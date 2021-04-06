import React from 'react';

const Pagination = ({ pokemonPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const pages = Math.ceil(totalPosts / pokemonPerPage);
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
      <li  className='page-item'>
            <button onClick={() => paginate(currentPage - 1)} type="button" className='page-link prev' disabled={((currentPage - 1) <= 1)? true:false}>
              prev
            </button>
          </li>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} type="button" className='page-link'>
              {number}
            </button>
          </li>
        ))}
        <li  className='page-item'>
            <button onClick={() => paginate(currentPage + 1)} type="button" className='page-link next' disabled={((currentPage + 1) === pages)? true:false}>
              next
            </button>
          </li>
      </ul>
    </nav>
  );
};

export default Pagination;