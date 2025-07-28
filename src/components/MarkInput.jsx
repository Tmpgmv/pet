
function MarkInput({defaultValue =null}) {

  const ID = "mark";

  return (
    <div>
      <label htmlFor="validationServerMark" className="form-label">
        Электронный чип
      </label>
      <input
        type="text"
        className="form-control"
        id={ID}
        aria-describedby={`${ID}Error`}
        name={ID}
        defaultValue={defaultValue ? defaultValue : undefined}        
      />
      <div id={`${ID}Error`} className="invalid-feedback">
        Введите корректный электронный чип.
      </div>
    </div>
  );
}

export default MarkInput;
