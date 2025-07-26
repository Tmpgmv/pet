function KindInput({ aClassName = null, required=false, errorMessage="Введите вид животного." }) {
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
      />
      <div id="kindError" className="invalid-feedback">
        {errorMessage}
      </div>
    </div>
  );
}

export default KindInput;
