import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  const paged = pages.map((page, index) => {
    return (

      <li key={index}>
        <button
        onClick={() => setCurrentPage(page)}
        className={page == currentPage ? "active" : ""}
      >
        {page}
      </button>
      </li>
    );
  })

  return (
  <ul className="pagination pagination-circular" role="navigation" aria-label="Pagination">
      {paged}
  </ul>
  );
};

export default Pagination;
