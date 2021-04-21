import React, { useState } from 'react';
import './Navbar.scss';
import { FaBars } from 'react-icons/fa';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { Link, useLocation, useParams } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { id } = useParams();

  const sessionId = JSON.parse(sessionStorage.getItem('id'));

  return (
    <nav>
      <button className="nav__toggle" onClick={() => setOpen(!open)}>
        {open ? <AiOutlineCloseSquare /> : <FaBars />}
      </button>

      <div className="nav__container">
        <div className={open ? 'nav__links show__links' : 'nav__links'}>
          {location.pathname.endsWith('/') ? (
            ''
          ) : (
            <Link to="/" className="nav__link">
              home
            </Link>
          )}
          {location.pathname.includes('contacts') ? (
            ''
          ) : (
            <Link to="/contacts" className="nav__link">
              contacts
            </Link>
          )}
          {location.pathname.includes('favorites') ? (
            ''
          ) : (
            <Link to="/favorites" className="nav__link">
              favorites
            </Link>
          )}
          {location.pathname.includes('update') ? (
            <Link to={`/details/${sessionId}`} className="nav__link">
              details
            </Link>
          ) : (
            ''
          )}
          {location.pathname.includes(id) ? (
            <Link to="/update" className="nav__link">
              update
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    </nav>
  );
}
