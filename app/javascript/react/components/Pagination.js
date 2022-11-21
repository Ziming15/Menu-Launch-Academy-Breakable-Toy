import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
  <ul className="pagination pagination-circular" role="navigation" aria-label="Pagination">
      {pages.map((page, index) => {
        return (

          <li><button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </button></li>
        );
      })}
    </ul>
  );
};

export default Pagination;
