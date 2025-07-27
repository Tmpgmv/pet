function NameInput({ defaultValue = null }) {
  return (
    <div>
      <label htmlFor="validationServerName" className="form-label">
        Имя (кириллица, пробел, дефис)
      </label>
      <input
        type="text"
        className="form-control"
        id="validationServerName"
        aria-describedby="nameError"
        name="name"
        pattern="[А-Яа-яЁё\s\-]+"
        required={true}
        defaultValue={defaultValue ? defaultValue : undefined}
      />
      <div id="nameError" className="invalid-feedback">
        Введите корректное имя.
      </div>
    </div>
  );
}

export default NameInput;
