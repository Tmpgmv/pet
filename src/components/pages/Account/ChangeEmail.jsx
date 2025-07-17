import React from 'react';
import H2 from '../../H2';

function ChangeEmail() {
    return (
        <section id="change-email" className="mt-5">
            <H2 h2="Изменить email" />
            
            <form
            id="change-email-form"
            className="mx-auto col col-md-8 mt-4"
            method="post"
            >
            <label htmlFor="validationServerEmail" className="form-label">
                Адрес электронной почты
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
            <div className="col">
                <button className="btn btn-primary mt-3" type="submit">
                Сохранить
                </button>
            </div>
            </form>
        </section>
    );
}

export default ChangeEmail;