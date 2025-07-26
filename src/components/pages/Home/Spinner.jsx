function Spinner({aClassName=null}) {
  return (
    <div id="spinner" className={`spinner-grow d-flex text-success mx-auto ${aClassName ? aClassName : ""}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Spinner;
