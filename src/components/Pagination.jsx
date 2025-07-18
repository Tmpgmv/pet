function Pagination() {
  return (
    <nav aria-label="pagination">
      <ul className="pagination">
        <li className="page-item disabled">
          <a className="page-link">&lt;&lt;</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#" aria-current="page">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            &gt;&gt;
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
