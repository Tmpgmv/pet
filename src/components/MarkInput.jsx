
function MarkInput({defaultValue =null}) {
  return (
    <div>
      <label htmlFor="validationServerMark" className="form-label">
        Электронный чип
      </label>
      <input
        type="text"
        className="form-control"
        id="validationServerMark"
        aria-describedby="markError"
        name="mark"
        defaultValue={defaultValue ? defaultValue : undefined}        
      />
      <div id="markError" className="invalid-feedback">
        Введите корректный электронный чип.
      </div>
    </div>
  );
}

export default MarkInput;
