import React, { useState, useEffect } from 'react';
import './Favorites.scss';
import Top from '../../components/top/Top';
import Navbar from '../../components/navbar/Navbar';
import { extractDataFromObject } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { getId } from '../../utils/utils';
import { axiosInstance } from '../../utils/axios';
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteContacts = axiosInstance
      .get('contacts.json')
      .then((resp) => {
        const contacts = extractDataFromObject(resp);
        const favorites = contacts.filter((e) => e.favorite === true);
        setFavorites(favorites);
      })
      .catch((err) => console.log(err));

    return favoriteContacts;
  }, [setFavorites]);

  return (
    <div className="favorites__container">
      <Top />
      <Navbar />

      <Main>
        <table className="favorites__table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
            </tr>
            {favorites.map((contact, i) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </Main>

      <Footer />
    </div>
  );
}
