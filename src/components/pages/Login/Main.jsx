import React from 'react';

function Main(props) {
    return (
        <main>
            <section id="login-section" className="mt-5">
                <h1 className="text-center  line-hight-08">Вход</h1>
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
                <a href="#" className="ms-5">
                    Регистрация
                </a>
                </form>
            </section>            
        </main>

    );
}

export default Main;