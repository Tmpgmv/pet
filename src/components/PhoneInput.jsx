function PhoneInput() {
  return (
    <div>
      <label htmlFor="validationServerPhone" className="form-label">
        Телефон (цифры, может начинаться со знака +)
      </label>
      <input
        type="tel"
        className="form-control"
        id="validationServerPhone"
        aria-describedby="phoneError"
        name="phone"
        pattern="^\+?\d+$"
        required={true}
      />
      <div id="phoneError" className="invalid-feedback">
        Введите корректный телефон.
      </div>
    </div>
  );
}

export default PhoneInput;
