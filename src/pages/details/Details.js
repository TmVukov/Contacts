import React, { useState, useEffect } from 'react';
import './Details.scss';
import Top from '../../components/top/Top';
import Navbar from '../../components/navbar/Navbar';
import { useStateContext } from '../../utils/stateProvider';
import { SET_CONTACTS } from '../../constants';
import { axiosInstance } from '../../utils/axios';
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';

export default function Details() {
  const [error, setError] = useState('');
  const {
    state: { contacts },
    dispatch,
  } = useStateContext();
  const sessionId = JSON.parse(sessionStorage.getItem('id'));

  useEffect(() => {
    const detail = axiosInstance
      .get(`contacts/${sessionId}.json`)
      .then((resp) => {
        console.log(resp.data);

        dispatch({
          type: SET_CONTACTS,
          payload: { key: 'contacts', value: [resp.data] },
        });
      })
      .catch((err) => setError(err));

    return detail;
  }, [dispatch, sessionId]);

  const deleteContact = () => {
    axiosInstance.delete(`contacts/${sessionId}.json`).then((resp) => {
      console.log(resp);

      dispatch({
        type: SET_CONTACTS,
        payload: { key: 'contacts', value: [] },
      });
    });
  };

  return (
    <div className="details__container">
      <Top />
      <Navbar />

      <Main>
        <button className="details__btn" onClick={deleteContact}>
          Delete Contact
        </button>

        {error ? (
          <p>{error}</p>
        ) : !contacts[0] ? (
          <p>Your contact is deleted.</p>
        ) : (
          sessionId &&
          contacts.map((contact, i) => (
            <section key={i}>
              <table className="details__table">
                <tbody>
                  <tr>
                    <th>Contact Details</th>
                  </tr>
                  <tr>
                    <td>Name: {contact.name}</td>
                  </tr>
                  <tr>
                    <td>Surname: {contact.surname}</td>
                  </tr>
                  <tr>
                    <td>Email: {contact.email}</td>
                  </tr>
                  <tr>
                    <td>Mob: {contact.mobile}</td>
                  </tr>
                  <tr>
                    <td>Phone: {contact.phone}</td>
                  </tr>
                  <tr>
                    <td>Birthdate: {contact.birthDate}</td>
                  </tr>
                </tbody>
              </table>
            </section>
          ))
        )}
      </Main>

      <Footer />
    </div>
  );
}
