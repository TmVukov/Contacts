import React, { useEffect, useContext } from 'react';
import './Dashboard.scss';
import { StateContext } from '../../utils/stateProvider';
import { extractDataFromObject } from '../../utils/utils';
import { auth } from '../../utils/firebase';
import { useHistory } from 'react-router-dom';
import { axiosInstance } from '../../utils/axios';
import Top from '../../components/top/Top';
import Navbar from '../../components/navbar/Navbar';
import Form from '../../components/form/Form';
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';

export default function Dashboard() {
  const { username, setUsername } = useContext(StateContext);

  const sessionEmail = JSON.parse(sessionStorage.getItem('user'));

  const history = useHistory();

  const handleLogout = () =>
    auth.signOut().then(() => {
      history.push('/login');
    });

  useEffect(() => {
    const fetchedUsers = axiosInstance
      .get('users.json')
      .then((resp) => {
        const usersArr = extractDataFromObject(resp);
        const user = usersArr.filter((e) => e.email === sessionEmail);
        setUsername(user[0].username);
      })
      .catch((err) => console.log(err));

    return fetchedUsers;
  }, [setUsername, sessionEmail]);

  return (
    <section className="dashboard__container">
      <Top>
        <p>Welcome {username}!</p>

        <button onClick={handleLogout} className="dashboard__btn-logout">
          log out
        </button>
      </Top>

      <Navbar />

      <Main>
        <Form />
      </Main>

      <Footer />
    </section>
  );
}
