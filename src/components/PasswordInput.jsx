import {attr} from "../general/debugFunctions";

/*
При регистрации необходимо объявить требования к паролю.
Однако, при добавлении нового объявления требуется просто 
ввести существующий пароль.
*/
function PasswordInput({ extendedLabel = false }) {
    // Debug {
      var required = attr({ debugValue: false, prodValue: true });      
      var pattern = attr({ debugValue: "*", prodValue: "(?=.*\d)(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])[A-Za-zА-Яа-яЁё\d]{7,}" });
    //} Debug
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
        pattern= {pattern}
        required={required}
      />
      <div id="passwordError" className="invalid-feedback">
        Введите корректный пароль.
      </div>
    </div>
  );
}

export default PasswordInput;
