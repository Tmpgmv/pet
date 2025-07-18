import React from "react";
import { Link } from "react-router-dom";

function Form(props) {
  return (
    <form
      id="login-form"
      method="post"
      className="col-12 col-md-6 mx-auto mt-4"
    >
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        type="email"
        className="form-control is-invalid"
        id="email"
        aria-describedby="emailError"
        required=""
      />
      <div id="emailError" className="invalid-feedback">
        Емейл или пароль неверны.
      </div>
      <label htmlFor="password" className="form-label">
        Пароль
      </label>
      <input
        type="password"
        className="form-control is-invalid"
        id="password"
        required=""
      />
      <button className="btn btn-primary mt-3" type="submit">
        Отправить
      </button>
      
      <Link to="/register" className="ms-5">Регистрация</Link>

    </form>
  );
}

export default Form;
