import React from "react";

function Main() {
  return (
    <section id="new-post-section" className="mt-5">
      <h1 className="text-center  line-hight-08">Новое объявление</h1>
      <form
        id="new-post-form"
        method="post"
        encType="multipart/form-data"
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
        <div>
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
        </div>
        <div>
          <label htmlFor="validationServerEmail" className="form-label">
            Электронная почта
          </label>
          <input
            type="email"
            className="form-control is-invalid"
            id="validationServerEmail"
            aria-describedby="emailError"
            name="email"
            required=""
          />
          <div id="emailError" className="invalid-feedback">
            Адрес электронной почты уже занят.
          </div>
        </div>
        <div>
          <label htmlFor="validationServerKind" className="form-label">
            Вид животного (кириллица, пробел, дефис)
          </label>
          <input
            type="text"
            className="form-control is-invalid"
            id="validationServerKind"
            aria-describedby="kindError"
            name="kind"
            pattern="[а-яёА-ЯЁ\s\-]+"
            required=""
          />
          <div id="kindError" className="invalid-feedback">
            Введите корректный вид животного.
          </div>
        </div>
        <div>
          <label htmlFor="validationServerMark" className="form-label">
            Электронный чип (латиница, дефис, цифры)
          </label>
          <input
            type="text"
            className="form-control is-invalid"
            id="validationServerMark"
            aria-describedby="markError"
            name="mark"
            required=""
          />
          <div id="markError" className="invalid-feedback">
            Введите корректный электронный чип.
          </div>
        </div>
        <div>
          <label htmlFor="validationServerDescription" className="form-label">
            Описание
          </label>
          <textarea
            className="form-control is-invalid"
            id="validationServerDescription"
            aria-describedby="descriptionError"
            name="description"
            rows={3}
            required=""
            defaultValue={""}
          />
          <div id="descriptionError" className="invalid-feedback">
            Введите корректное описание.
          </div>
        </div>
        <div>
          <label htmlFor="formPhoto1" className="form-label">
            Изображения
          </label>
          <input
            className="form-control is-invalid"
            type="file"
            accept="image/*"
            id="formPhoto1"
            name="photo1"
            aria-describedby="validationServerPhoto1Feedback"
            required=""
          />
          <div id="validationServerPhoto1Feedback" className="invalid-feedback">
            Проблема с изображением.
          </div>
        </div>
        <div>
          <input
            className="form-control is-invalid"
            type="file"
            accept="image/*"
            id="formPhoto2"
            name="photo2"
            aria-describedby="validationServerPhoto2Feedback"
            required=""
          />
          <div id="validationServerPhoto2Feedback" className="invalid-feedback">
            Проблема с изображением.
          </div>
        </div>
        <div>
          <input
            className="form-control is-invalid"
            type="file"
            accept="image/*"
            id="formPhoto3"
            name="photo3"
            aria-describedby="validationServerPhoto3Feedback"
            required=""
          />
          <div id="validationServerPhoto3Feedback" className="invalid-feedback">
            Проблема с изображением.
          </div>
        </div>
        <div>
          <div className="form-check">
            <input
              className="form-check-input is-invalid"
              type="checkbox"
              defaultValue=""
              id="validationServerConfirm"
              aria-describedby="confirmError"
              name="confirm"
              required=""
            />
            <label
              className="form-check-label"
              htmlFor="validationServerConfirm"
            >
              Согласие на обработку персональных данных
            </label>
            <div id="confirmError" className="invalid-feedback">
              Необходимо согласиться.
            </div>
          </div>
        </div>
        <div>
          <div className="form-check">
            <input
              className="form-check-input is-invalid"
              type="checkbox"
              defaultValue=""
              id="validationServerRegister"
              aria-describedby="registerError"
              name="register"
            />
            <label
              className="form-check-label"
              htmlFor="validationServerRegister"
            >
              Пройти автоматическую регистрацию
            </label>
            <div id="registerError" className="invalid-feedback">
              Проблема на сервере.
            </div>
          </div>
        </div>
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
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Отправить
          </button>
        </div>
      </form>
    </section>
  );
}

export default Main;
