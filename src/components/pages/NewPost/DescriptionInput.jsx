
function DescriptionInput() {
  return (
    <div>
      <label htmlFor="validationServerDescription" className="form-label">
        Описание
      </label>
      <textarea
        className="form-control"
        id="validationServerDescription"
        aria-describedby="descriptionError"
        name="description"
        rows={3}
        required=""
        defaultValue={""}
      />
      <div id="descriptionError" className="invalid-feedback">
        Введите корректное описание.
      </div>
    </div>
  );
}

export default DescriptionInput;
