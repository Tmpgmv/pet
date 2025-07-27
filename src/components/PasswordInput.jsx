function PasswordInput({ extendedLabel = false }) {
  return (
    <div>
      <label htmlFor="password" className="form-label">
        Пароль{" "}
        {extendedLabel
          ? " (не менее 7 символов, обязательно: 1 цифра, 1 строчная, 1 заглавная буквы)"
          : undefined}
      </label>
      <input
        type="password"
        className="form-control"
        id="password"
        aria-describedby="passwordError"
        name="password"
        pattern="(?=.*\d)(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])[A-Za-zА-Яа-яЁё\d]{7,}"
        required={true}
      />
      <div id="passwordError" className="invalid-feedback">
        Введите корректный пароль.
      </div>
    </div>
  );
}

export default PasswordInput;
