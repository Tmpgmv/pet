function NameInput({ defaultValue = null }) {
  return (
    <div>
      <label htmlFor="name" className="form-label">
        Имя (кириллица, пробел, дефис)
      </label>
      <input
        type="text"
        className="form-control"
        id="name"
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
