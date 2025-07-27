function KindInput({
  aClassName = null,
  required = false, // Для поиска эта строка тоже применяется. И там это не обязательный параметр.
  errorMessage = "Введите вид животного.",
  defaultValue = null
}) {
  return (
    <div className={aClassName ?? undefined}>
      <label htmlFor="kind" className="form-label">
        Вид животного (кириллица, пробел, дефис)
      </label>
      <input
        type="text"
        className="form-control"
        id="kind"
        aria-describedby="kindError"
        name="kind"
        pattern="[а-яёА-ЯЁ\s\-]+"
        required={required}
        defaultValue={defaultValue ? defaultValue : undefined}
      />
      <div id="kindError" className="invalid-feedback">
        {errorMessage}
      </div>
    </div>
  );
}

export default KindInput;
