import React from 'react';
import './Homepage.scss';
import { Link } from 'react-router-dom';
import { IoMdContact } from 'react-icons/io';
import Main from '../../components/main/Main';

export default function Homepage() {
  return (
    <section className="home__container">
      <header className="home__header">
        <IoMdContact className="home__logo" />

        <div className="home__links">
          <Link to="/signup">
            <button>register</button>
          </Link>
          <Link to="/login">log in</Link>
        </div>
      </header>

      <div className="home__titles">
        <h1>Save your contacts</h1>
        <h2>Fast and easy</h2>
      </div>
    </section>
  );
}
