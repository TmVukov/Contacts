import React, { useState, useRef } from 'react';
import './Form.scss';
import { axiosInstance } from '../../utils/axios';
import { useStateContext } from '../../utils/stateProvider';
import { SET_NAME, SET_SURNAME } from '../../constants';
import SubForm from '../subform/SubForm';

export default function Form() {
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState(false);

  const formRef = useRef();

  const { state, dispatch } = useStateContext();
  const { name, surname, mobile, phone, email, favorite } = state;

  //const emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

  const mobileReg = /^[0][9][1-9]\s\d{3,4}\s\d{3}$/;
  const isMobValid = mobile && mobile.match(mobileReg);

  const phoneReg = /^[0][1]\s\d{3,4}\s\d{3}|[0][2-5][0-9]\s\d{3,4}\s\d{3}$/;
  const isPhoneValid = phone && phone.match(phoneReg);

  const formatDate = (date) => {
    const formatted = date.split('-');
    return formatted.reverse().join('/');
  };

  const addContact = (e) => {
    e.preventDefault();

    const contact = {
      name,
      surname,
      email,
      mobile,
      phone,
      birthDate: formatDate(date),
      favorite,
    };

    axiosInstance
      .post('contacts.json/', contact)
      .then((res) => {
        console.log(res);
        setAdded(true);

        setTimeout(() => {
          setAdded(false);
        }, 1500);
      })
      .catch((err) => console.log(err));

    formRef.current.reset();
  };

  return (
    <form onSubmit={addContact} ref={formRef} className="form">
      {added ? (
        <div className="form__message success">Contact is saved!</div>
      ) : (
        ''
      )}

      {mobile && !isMobValid ? (
        <div className="form__message error">Mobile format is invalid!</div>
      ) : (
        ''
      )}

      {phone && !isPhoneValid ? (
        <div className="form__message error">Phone format is invalid!</div>
      ) : (
        ''
      )}

      <input
        onChange={(e) =>
          dispatch({
            type: SET_NAME,
            payload: { key: 'name', value: e.target.value },
          })
        }
        type="text"
        placeholder="Enter name"
        maxLength="100"
        required
      />

      <input
        onChange={(e) =>
          dispatch({
            type: SET_SURNAME,
            payload: { key: 'surname', value: e.target.value },
          })
        }
        type="text"
        placeholder="Enter surname"
        maxLength="300"
        required
      />

      <div className="form__date">
        <label>Select birthdate</label>
        <input onChange={(e) => setDate(e.target.value)} type="date" />
      </div>

      <button onClick={() => setOpen(!open)} className="form__button-enter">
        Enter contacts
      </button>

      {open && <SubForm />}

      <button disabled={!isMobValid || !isPhoneValid ? true : false}>
        Add your contact
      </button>
    </form>
  );
}
