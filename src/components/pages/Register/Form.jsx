import React from "react";
import PhoneInput from '../../PhoneInput';
import EmailInput from '../../EmailInput';
import Button from "../../Button";

function Form() {
  return (
    <form
      id="registration-form"
      method="post"
      className="row g-3 mt-2 col-12 col-md-6 mx-auto"
    >
      <div>
        <label htmlFor="validationServerName" className="form-label">
          Имя (кириллица, пробел, дефис)
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          id="validationServerName"
          aria-describedby="nameError"
          name="name"
          pattern="[А-Яа-яЁё\s\-]+"
          required=""
        />
        <div id="nameError" className="invalid-feedback">
          Введите корректное имя.
        </div>
      </div>
      
      <PhoneInput />

      <EmailInput />

      <div>
        <label htmlFor="validationServerPassword" className="form-label">
          Пароль (не менее 7 символов, обязательно: 1 цифра, 1 строчная, 1
          заглавная буквы)
        </label>
        <input
          type="password"
          className="form-control is-invalid"
          id="validationServerPassword"
          aria-describedby="passwordError"
          name="password"
          pattern="(?=.*\d)(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ]).{7,}"
          required=""
        />
        <div id="passwordError" className="invalid-feedback">
          Введите корректный пароль.
        </div>
      </div>
      <div>
        <label
          htmlFor="validationServerPasswordConfirmation"
          className="form-label"
        >
          Повтор пароля
        </label>
        <input
          type="password"
          className="form-control is-invalid"
          id="validationServerPasswordConfirmation"
          aria-describedby="passwordConfirmationError"
          name="passwordConfirmation"
          required=""
        />
        <div id="passwordConfirmationError" className="invalid-feedback">
          Пароли не совпадают.
        </div>
      </div>
      <div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue=""
            id="validationServerConfirm"
            aria-describedby="confirmError"
            name="confirm"
            required=""
          />
          <label className="form-check-label" htmlFor="validationServerConfirm">
            Согласие на обработку персональных данных.
          </label>
          <div id="confirmError" className="invalid-feedback">
            Необходимо согласиться.
          </div>
        </div>
      </div>
      <div className="col-12">
        <Button btnText="Зарегистрироваться" />
      </div>
    </form>
  );
}

export default Form;
