import React, { useState, useEffect, useContext } from 'react';
import './Contacts.scss';
import Top from '../../components/top/Top';
import Navbar from '../../components/navbar/Navbar';
import { StateContext } from '../../utils/stateProvider';
import { extractDataFromObject } from '../../utils/utils';
import { getId } from '../../utils/utils';
import { axiosInstance } from '../../utils/axios';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Pagination from '../../components/pagination/Pagination';
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';

export default function Contacts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState([]);
  const [selectedValue, setSelectedValue] = useState('a-z');

  const { contacts, setContacts, currentPage, contactsPerPage } = useContext(
    StateContext,
  );

  const lastContact = currentPage * contactsPerPage;
  const firstContact = lastContact - contactsPerPage;
  const currentContacts = contacts.slice(firstContact, lastContact);

  useEffect(() => {
    setLoading(true);

    const fetchedContacts = axiosInstance
      .get('contacts.json')
      .then((resp) => {
        const props = extractDataFromObject(resp);
        const sorted = props.sort((a, b) => (a.surname > b.surname ? 1 : -1));

        setContacts(sorted);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });

    return fetchedContacts;
  }, [setContacts]);

  const handleFavorite = (id) => {
    let contact = contacts.filter((e) => e.id === id);

    const newStatus = !contact[0].favorite;

    const updatedContacts = contacts.map((obj) => {
      if (obj.id === id) {
        return {
          ...obj,
          favorite: newStatus,
        };
      }
      return obj;
    });
    setContacts(updatedContacts);

    getId(id);

    const sessionId = JSON.parse(sessionStorage.getItem('id'));

    const updatedContact = { ...contact[0], favorite: newStatus };

    axiosInstance
      .patch(`contacts/${sessionId}.json`, updatedContact)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  return (
    <section className="contacts__container">
      <Top>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search..."
        />

        <div className="contacts__sort">
          <p>sort by:</p>
          <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </select>
        </div>
      </Top>

      <Navbar />

      <Main>
        {loading ? (
          <Loader type="Oval" color="##004890" height={80} width={80} />
        ) : error ? (
          <p>{error}</p>
        ) : (
          ''
        )}

        <table className="contacts__table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Star</th>
            </tr>
            {currentContacts
              .filter((contact) => {
                if (!search.length) return contact;
                return (
                  contact.name.includes(search) ||
                  contact.surname.includes(search) ||
                  contact.email.includes(search)
                );
              })
              .sort((a, b) => {
                if (selectedValue === 'a-z')
                  return a.surname > b.surname ? 1 : -1;
                return a.surname < b.surname ? 1 : -1;
              })
              .map((contact, i) => (
                <tr key={i}>
                  <td>
                    <Link
                      to={`/details/${contact.id}`}
                      onClick={() => getId(contact.id)}
                    >
                      {contact.name}
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/details/${contact.id}`}
                      onClick={() => getId(contact.id)}
                    >
                      {contact.surname}
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/details/${contact.id}`}
                      onClick={() => getId(contact.id)}
                    >
                      {contact.email}
                    </Link>
                  </td>
                  <td>
                    {contact.favorite ? (
                      <AiFillStar onClick={() => handleFavorite(contact.id)} />
                    ) : (
                      <AiOutlineStar
                        onClick={() => handleFavorite(contact.id)}
                      />
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <Pagination />
      </Main>

      <Footer />
    </section>
  );
}
