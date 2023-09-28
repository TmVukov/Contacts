import React, { useState, useEffect } from 'react';
import './Update.scss';
import Top from '../../components/top/Top';
import Navbar from '../../components/navbar/Navbar';
import { useStateContext } from '../../utils/stateProvider';
import { axiosInstance } from '../../utils/axios';
import {
  SET_NAME,
  SET_SURNAME,
  SET_MOBILE,
  SET_EMAIL,
  SET_PHONE,
  SET_CONTACTS,
} from '../../constants';
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';

export default function Update() {
  const [error, setError] = useState('');
  const [updated, setUpdated] = useState(false);
  const sessionId = JSON.parse(sessionStorage.getItem('id'));

  const { state, dispatch } = useStateContext();
  const { contacts, name, surname, email, mobile, phone } = state;

  const mobileData = mobile ?? contacts[0]?.mobile;
  const phoneData = phone ?? contacts[0]?.phone;

  const mobileReg = /^[0][9][1-9]\s\d{3,4}\s\d{3}$/;
  const isMobValid = mobileData?.match(mobileReg);

  const phoneReg = /^[0][1]\s\d{3,4}\s\d{3}|[0][2-5][0-9]\s\d{3,4}\s\d{3}$/;
  const isPhoneValid = phoneData?.match(phoneReg);

  useEffect(() => {
    const singleContact = axiosInstance
      .get(`contacts/${sessionId}.json`)
      .then((resp) => {
        console.log(resp.data);

        dispatch({
          type: SET_CONTACTS,
          payload: { key: 'contacts', value: [resp.data] },
        });
      })
      .catch((err) => setError(err));

    return singleContact;
  }, [dispatch, sessionId]);

  const filterObject = (obj) => {
    const newObj = {};

    for (let key in obj) {
      if (obj[key] !== '' && obj[key] !== undefined) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  };

  const newContactData = {
    name,
    surname,
    email,
    mobile: mobile ?? mobileData,
    phone: phone ?? phoneData,
  };

  const updateContact = (e) => {
    e.preventDefault();

    axiosInstance
      .patch(`contacts/${sessionId}.json`, filterObject(newContactData))
      .then((res) => {
        console.log(res);
        setUpdated(true);

        setTimeout(() => {
          setUpdated(false);
        }, 1500);
      })
      .catch((err) => setError(err));
  };


  return (
    <div className="update__container">
      <Top />
      <Navbar />

      <Main>
        {updated && (
          <div className="update__message success">Contact is updated!</div>
        )}

        {error && <div className="update__message error">{error}</div>}

        {mobile && !isMobValid ? (
          <div className="update__message error">Mobile format is invalid!</div>
        ) : (
          ''
        )}

        {phone && !isPhoneValid ? (
          <div className="update__messageerror">Phone format is invalid!</div>
        ) : (
          ''
        )}

        {!contacts[0] ? (
          <p>Sorry, your contact is deleted.</p>
        ) : (
          contacts.map((contact, i) => (
            <form onSubmit={updateContact} key={i} className="update__form">
              <input
                onChange={(e) =>
                  dispatch({
                    type: SET_NAME,
                    payload: { key: 'name', value: e.target.value },
                  })
                }
                defaultValue={contact.name}
                placeholder="Update name"
                type="text"
              />

              <input
                onChange={(e) =>
                  dispatch({
                    type: SET_SURNAME,
                    payload: { key: 'surname', value: e.target.value },
                  })
                }
                defaultValue={contact.surname}
                placeholder="Update surname"
                type="text"
              />

              <input
                onChange={(e) =>
                  dispatch({
                    type: SET_EMAIL,
                    payload: { key: 'email', value: e.target.value },
                  })
                }
                defaultValue={contact.email}
                placeholder="update email"
                type="email"
              />

              <div className="subform__mobile">
                <label>Mobile format: 09x xxx(x) xxx</label>
                <input
                  onChange={(e) =>
                    dispatch({
                      type: SET_MOBILE,
                      payload: { key: 'mobile', value: e.target.value },
                    })
                  }
                  defaultValue={contact.mobile}
                  type="tel"
                  placeholder="Enter mobile"
                  maxLength="12"
                />
              </div>

              <div className="subform__phone">
                <label>Phone format: 0(xx) xxx(x) xxx</label>
                <input
                  onChange={(e) =>
                    dispatch({
                      type: SET_PHONE,
                      payload: { key: 'phone', value: e.target.value },
                    })
                  }
                  defaultValue={contact.phone}
                  type="tel"
                  placeholder="Enter phone"
                  maxLength="12"
                />
              </div>

              <button disabled={!isMobValid || !isPhoneValid}>
                Update contact
              </button>
            </form>
          ))
        )}
      </Main>

      <Footer />
    </div>
  );
}
