function Pagination({ currentPage, totalPages, onPageChange }) {
  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav aria-label="pagination" className="d-flex justify-content-center">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => handleClick(currentPage - 1)}>
            &lt;&lt;
          </button>
        </li>

        {pages.map((num) => (
          <li key={num} className={`page-item ${num === currentPage ? "active" : ""}`}>
            <button className="page-link" onClick={() => handleClick(num)}>
              {num}
            </button>
          </li>
        ))}

        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => handleClick(currentPage + 1)}>
            &gt;&gt;
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;