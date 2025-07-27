function PhoneInput({ defaultValue=null}) {
  return (
    <div>
      <label htmlFor="phone" className="form-label">
        Телефон (цифры, может начинаться со знака +)
      </label>
      <input
        type="tel"
        className="form-control"
        id="phone"
        aria-describedby="phoneError"
        name="phone"
        pattern="^\+?\d+$"
        required={true}
        defaultValue={defaultValue ? defaultValue : undefined}
      />
      <div id="phoneError" className="invalid-feedback">
        Введите корректный телефон.
      </div>
    </div>
  );
}

export default PhoneInput;
