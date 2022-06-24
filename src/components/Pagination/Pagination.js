import React from 'react';

// eslint-disable-next-line react/prop-types
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const responsivity = {
    width: '100%',
    'max-width': '100%',
    'overflow-x': 'auto',
  };

  return (
    <nav className="mt-3">
      <ul className="pagination" style={responsivity}>
        {pageNumbers.map((number) => (
          <li key={number} className={`li-pagination`}>
            <button
              onClick={() => paginate(number)}
              className={`page-link fw-bold`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
