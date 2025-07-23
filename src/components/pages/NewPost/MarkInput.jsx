
function MarkInput() {
  return (
    <div>
      <label htmlFor="validationServerMark" className="form-label">
        Электронный чип (латиница, дефис, цифры)
      </label>
      <input
        type="text"
        className="form-control"
        id="validationServerMark"
        aria-describedby="markError"
        name="mark"        
      />
      <div id="markError" className="invalid-feedback">
        Введите корректный электронный чип.
      </div>
    </div>
  );
}

export default MarkInput;
