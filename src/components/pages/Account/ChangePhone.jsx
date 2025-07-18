import React from "react";
import H2 from "../../H2";

function ChangePhone() {
  return (
    <section id="change-phone" className="mt-5">
      <H2 h2="Изменить телефон" />

      <form
        id="change-phone-form"
        className="mx-auto col col-md-8 mt-4"
        method="post"
      >
        <label htmlFor="validationServerPhone" className="form-label">
          Телефон (цифры, может начинаться со знака +)
        </label>
        <input
          type="tel"
          className="form-control is-invalid"
          id="validationServerPhone"
          aria-describedby="phoneError"
          name="phone"
          pattern="^\+?\d+$"
          required=""
        />
        <div id="phoneError" className="invalid-feedback">
          Введите корректный телефон.
        </div>
        <div className="col">
          <button className="btn btn-primary mt-3" type="submit">
            Сохранить
          </button>
        </div>
      </form>
    </section>
  );
}

export default ChangePhone;
