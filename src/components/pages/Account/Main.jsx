import React from 'react';

function Main(props) {
    return (
        <main>
        <div className="alert alert-success" role="alert">
            Изменения сохранены.
        </div>
        <section id="info-section" className="mt-5">
            <h1 className="text-center  line-hight-08 pb-1">
            Информация о пользователе
            </h1>
            <div className="container text-start info col col-md-8 mt-4">
            <div className="row">
                <div className="col fw-bold">Имя</div>
                <div className="col">Иван</div>
            </div>
            <div className="row">
                <div className="col fw-bold">Email</div>
                <div className="col">info@example.com</div>
            </div>
            <div className="row">
                <div className="col fw-bold">Зарегистрирован</div>
                <div className="col">01-01-1970</div>
            </div>
            <div className="row">
                <div className="col fw-bold">Количество объявлений</div>
                <div className="col">4</div>
            </div>
            <div className="row">
                <div className="col fw-bold">Найдено животных</div>
                <div className="col">2</div>
            </div>
            </div>
            {/* .account-info */}
        </section>
        {/* #info-section */}
        <section id="change-phone" className="mt-5">
            <h2 className="text-center line-hight-08">Изменить телефон</h2>
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
        {/* #change-phone*/}
        <section id="change-email" className="mt-5">
            <h2 className="text-center line-hight-08">Изменить email</h2>
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
        {/* #change-email*/}
        <section id="adverts" className="mt-5">
            <h2 className="text-center line-hight-08">Мои объявления</h2>
            <div className="row row-cols-1 row-cols-md-3 mt-4 mb-3 text-center">
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-primary border-solid">
                <div className="card-header py-3 border-primary bs-primary-bg-subtle">
                    <h4 className="my-0 fw-normal">Кошка</h4>
                </div>
                <div className="card-body">
                    <img className="w-100" src="img/4.jpeg" alt="pet" />
                    <div className="row mt-2">
                    <div className="w-25 text-end">
                        <img src="img/calendar.svg" height={30} alt="calendar" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold">
                        30 июня 2025 г.
                    </div>
                    </div>
                    <div className="row mt-2 mh-3em">
                    <div className="w-25 text-end">
                        <img src="img/geo.svg" height={30} alt="calendar" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold ">
                        Красногвардейский район
                    </div>
                    </div>
                    <div className="row mt-2 mb-2">
                    <div className="w-25 text-end">
                        <img src="img/status.svg" height={30} alt="status" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold">Активное</div>
                    </div>
                    <button type="button" className="w-100 btn btn-lg btn-primary">
                    Подробнее
                    </button>
                </div>
                </div>
            </div>{" "}
            {/* .col */}
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-primary border-solid">
                <div className="card-header py-3 border-primary bs-primary-bg-subtle">
                    <h4 className="my-0 fw-normal">Кошка</h4>
                </div>
                <div className="card-body">
                    <img className="w-100" src="img/4.jpeg" alt="pet" />
                    <div className="row mt-2">
                    <div className="w-25 text-end">
                        <img src="img/calendar.svg" height={30} alt="calendar" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold">
                        30 июня 2025 г.
                    </div>
                    </div>
                    <div className="row mt-2 mh-3em">
                    <div className="w-25 text-end">
                        <img src="img/geo.svg" height={30} alt="calendar" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold ">
                        Красногвардейский район
                    </div>
                    </div>
                    <div className="row mt-2 mb-2">
                    <div className="w-25 text-end">
                        <img src="img/status.svg" height={30} alt="status" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold">Активное</div>
                    </div>
                    <button type="button" className="w-100 btn btn-lg btn-primary">
                    Подробнее
                    </button>
                </div>
                </div>
            </div>{" "}
            {/* .col */}
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-primary border-solid">
                <div className="card-header py-3 border-primary bs-primary-bg-subtle">
                    <h4 className="my-0 fw-normal">Кошка</h4>
                </div>
                <div className="card-body">
                    <img className="w-100" src="img/4.jpeg" alt="pet" />
                    <div className="row mt-2">
                    <div className="w-25 text-end">
                        <img src="img/calendar.svg" height={30} alt="calendar" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold">
                        30 июня 2025 г.
                    </div>
                    </div>
                    <div className="row mt-2 mh-3em">
                    <div className="w-25 text-end">
                        <img src="img/geo.svg" height={30} alt="calendar" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold ">
                        Красногвардейский район
                    </div>
                    </div>
                    <div className="row mt-2 mb-2">
                    <div className="w-25 text-end">
                        <img src="img/status.svg" height={30} alt="status" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold">Активное</div>
                    </div>
                    <button type="button" className="w-100 btn btn-lg btn-primary">
                    Подробнее
                    </button>
                </div>
                </div>
            </div>{" "}
            {/* .col */}
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-primary border-solid">
                <div className="card-header py-3 border-primary bs-primary-bg-subtle">
                    <h4 className="my-0 fw-normal">Кошка</h4>
                </div>
                <div className="card-body">
                    <img className="w-100" src="img/4.jpeg" alt="pet" />
                    <div className="row mt-2">
                    <div className="w-25 text-end">
                        <img src="img/calendar.svg" height={30} alt="calendar" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold">
                        30 июня 2025 г.
                    </div>
                    </div>
                    <div className="row mt-2 mh-3em">
                    <div className="w-25 text-end">
                        <img src="img/geo.svg" height={30} alt="calendar" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold ">
                        Красногвардейский район
                    </div>
                    </div>
                    <div className="row mt-2 mb-2">
                    <div className="w-25 text-end">
                        <img src="img/status.svg" height={30} alt="status" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold">Активное</div>
                    </div>
                    <button type="button" className="w-100 btn btn-lg btn-primary">
                    Подробнее
                    </button>
                </div>
                </div>
            </div>{" "}
            {/* .col */}
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-primary border-solid">
                <div className="card-header py-3 border-primary bs-primary-bg-subtle">
                    <h4 className="my-0 fw-normal">Кошка</h4>
                </div>
                <div className="card-body">
                    <img className="w-100" src="img/4.jpeg" alt="pet" />
                    <div className="row mt-2">
                    <div className="w-25 text-end">
                        <img src="img/calendar.svg" height={30} alt="calendar" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold">
                        30 июня 2025 г.
                    </div>
                    </div>
                    <div className="row mt-2 mh-3em">
                    <div className="w-25 text-end">
                        <img src="img/geo.svg" height={30} alt="calendar" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold ">
                        Красногвардейский район
                    </div>
                    </div>
                    <div className="row mt-2 mb-2">
                    <div className="w-25 text-end">
                        <img src="img/status.svg" height={30} alt="status" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold">Активное</div>
                    </div>
                    <button type="button" className="w-100 btn btn-lg btn-primary">
                    Подробнее
                    </button>
                </div>
                </div>
            </div>{" "}
            {/* .col */}
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-primary border-solid">
                <div className="card-header py-3 border-primary bs-primary-bg-subtle">
                    <h4 className="my-0 fw-normal">Кошка</h4>
                </div>
                <div className="card-body">
                    <img className="w-100" src="img/4.jpeg" alt="pet" />
                    <div className="row mt-2">
                    <div className="w-25 text-end">
                        <img src="img/calendar.svg" height={30} alt="calendar" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold">
                        30 июня 2025 г.
                    </div>
                    </div>
                    <div className="row mt-2 mh-3em">
                    <div className="w-25 text-end">
                        <img src="img/geo.svg" height={30} alt="calendar" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold ">
                        Красногвардейский район
                    </div>
                    </div>
                    <div className="row mt-2 mb-2">
                    <div className="w-25 text-end">
                        <img src="img/status.svg" height={30} alt="status" />
                    </div>
                    <div className="w-75 text-start my-auto fw-bold">Активное</div>
                    </div>
                    <button type="button" className="w-100 btn btn-lg btn-primary">
                    Подробнее
                    </button>
                </div>
                </div>
            </div>{" "}
            {/* .col */}
            </div>
            {/* .row */}
            <nav aria-label="pagination">
            <ul className="pagination">
                <li className="page-item disabled">
                <a className="page-link">&lt;&lt;</a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    1
                </a>
                </li>
                <li className="page-item active">
                <a className="page-link" href="#" aria-current="page">
                    2
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    3
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    &gt;&gt;
                </a>
                </li>
            </ul>
            </nav>
        </section>
        {/* #adverts*/}
        </main>

    );
}

export default Main;