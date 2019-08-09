import React from 'react';

const Pagination = (props) => {
  const { changePage, nextPage, prevPage } = props;

  return (
    <div>
      <button
        type="button"
        onClick={() => changePage(prevPage)}
        disabled={!prevPage}
      >
        Prev Page
      </button>

      <button
        type="button"
        onClick={() => changePage(nextPage)}
        disabled={!nextPage}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
