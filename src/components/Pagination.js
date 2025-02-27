
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

  return ( //totalPages > 1 &&
    <div className="page-navi-wrap">
      <div className="pagination wp-pagenavi">
        <button className="previouspostslink" disabled={page === 1} style={page === 1 && ({display: 'none'})}
                onClick={() => setPage(page - 1)}><i
          className="icon-arrow"></i>
        </button>
        {pageNumbers.map((num, index) =>
          num === "..." ? (
            <span key={index}> ... </span>
          ) : (
            <button c
                    key={index}
                    className={num === page ? "active page smaller" : "page smaller"}
                    onClick={() => setPage(num)}
            >
              {num}
            </button>
          )
        )}
        <button className="nextpostslink" disabled={page === totalPages}
                style={page === totalPages && ({display: 'none'})}
                onClick={() => setPage(page + 1)}><i className="icon-arrow"></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
