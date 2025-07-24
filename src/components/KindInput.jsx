function KindInput({ aClassName = null }) {
  return (
    <div className={aClassName ?? undefined}>
      <label htmlFor="validationServerKind" className="form-label">
        Вид животного (кириллица, пробел, дефис)
      </label>
      <input
        type="text"
        className="form-control"
        id="validationServerKind"
        aria-describedby="kindError"
        name="kind"
        pattern="[а-яёА-ЯЁ\s\-]+"
        required={true}
      />
      <div id="kindError" className="invalid-feedback">
        Введите корректный вид животного.
      </div>
    </div>
  );
}

export default KindInput;
