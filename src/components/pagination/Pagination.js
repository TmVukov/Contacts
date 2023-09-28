import { Link } from 'react-router-dom';
import { useStateContext } from '../../utils/stateProvider';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { SET_CURRENT_PAGE, SET_CONTACTS_PER_PAGE } from '../../constants';
import './Pagination.scss';

export default function Pagination() {
  const { state, dispatch } = useStateContext();
  const { contacts, currentPage, contactsPerPage } = state;

  const pageNumbers = [];
  const pageNumber = Math.ceil(contacts.length / contactsPerPage);

  for (let i = 1; i <= pageNumber; i++) {
    pageNumbers.push(i);
  }

  const handlePagination = (pageNumber) => {
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: { key: 'currentPage', value: pageNumber },
    });
  };

  const handlePrev = () => {
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: { key: 'currentPage', value: currentPage - 1 },
    });

    if (currentPage <= 1) {
      dispatch({
        type: SET_CURRENT_PAGE,
        payload: { key: 'currentPage', value: 1 },
      });
    }
  };

  const handleNext = () => {
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: { key: 'currentPage', value: currentPage + 1 },
    });

    if (currentPage >= pageNumber) {
      dispatch({
        type: SET_CURRENT_PAGE,
        payload: { key: 'currentPage', value: pageNumber },
      });
    }
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
          onChange={(e) =>
            dispatch({
              type: SET_CONTACTS_PER_PAGE,
              payload: { key: 'contactsPerPage', value: e.target.value },
            })
          }
        >
          <option value="5">5</option>
          <option value="10">10</option>
          {/* <option value="15">15</option> */}
        </select>
      </div>
    </div>
  );
}
