import React, { useState, createContext, useEffect } from 'react';
import { auth } from '../utils/firebase';

export const StateContext = createContext(); 

export default function StateProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [mobile, setMobile] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage, setContactsPerPage] = useState('10');
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const state = {
    contacts,
    setContacts,
    name,
    setName,
    surname,
    setSurname,
    mobile,
    setMobile,
    phone,
    setPhone,
    email,
    setEmail,
    username,
    setUsername,
    currentPage,
    setCurrentPage,
    contactsPerPage,
    setContactsPerPage,
    currentUser,
    setCurrentUser,
  };

  return (
    <StateContext.Provider value={state}>
      {!loading && children}
    </StateContext.Provider>
  );
}
