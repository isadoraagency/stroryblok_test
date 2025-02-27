
import React from "react";

const Pagination = ({ page, totalPages, setPage }) => {
  const maxPageButtons = 5;
  const pageNumbers = [];

  if (totalPages <= maxPageButtons) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {

    pageNumbers.push(1);

    let startPage = Math.max(2, page - 2);
    let endPage = Math.min(totalPages - 1, page + 2);

    if (startPage > 2) {
      pageNumbers.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages - 1) {
      pageNumbers.push("...");
    }

    pageNumbers.push(totalPages);
  }

  return totalPages > 1 &&  (

    <div className="pagination">
      <button disabled={page === 1} style={page === 1 && ({display: 'none'})} onClick={() => setPage(page - 1)}>Prev
      </button>
      {pageNumbers.map((num, index) =>
        num === "..." ? (
          <span key={index}> ... </span>
        ) : (
          <button
            key={index}
            className={num === page ? "active" : ""}
            onClick={() => setPage(num)}
          >
            {num}
          </button>
        )
      )}
      <button disabled={page === totalPages} style={page === totalPages && ({display: 'none'})}
              onClick={() => setPage(page + 1)}>Next
      </button>
    </div>
  );
};

export default Pagination;
