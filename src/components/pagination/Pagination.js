import React, { useContext } from 'react';
import './Pagination.scss';
import { Link } from 'react-router-dom';
import { StateContext } from '../../utils/stateProvider';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

export default function Pagination() {
  const {
    contacts,
    currentPage,
    setCurrentPage,
    contactsPerPage,
    setContactsPerPage,
  } = useContext(StateContext);

  const pageNumbers = [];
  let pageNumber = Math.ceil(contacts.length / contactsPerPage);

  for (let i = 1; i <= pageNumber; i++) {
    pageNumbers.push(i);
  }

  const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);

    if (currentPage <= 1) setCurrentPage(1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage >= pageNumber) setCurrentPage(pageNumber);
  };

  return (
    <div className="pagination__container">
      <div className="pagination">
        <GrFormPrevious onClick={handlePrev} className="pagination__control" />

        {pageNumbers.map((num, i) => (
          <li key={i} className="pagination__num">
            <Link to="/contacts" onClick={() => handlePagination(num)}>
              {num}
            </Link>
          </li>
        ))}

        <GrFormNext onClick={handleNext} className="pagination__control" />
      </div>

      <div className="pagination__sort">
        <p>sort by:</p>
        <select
          value={contactsPerPage}
          onChange={(e) => setContactsPerPage(e.target.value)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          {/* <option value="15">15</option> */}
        </select>
      </div>
    </div>
  );
}
