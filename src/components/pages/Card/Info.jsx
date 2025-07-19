import React from "react";

function Info(props) {
  return (
    <div className="container text-start info col col-md-8 mt-4">
      <div className="row">
        <div className="col fw-bold">Вид</div>
        <div className="col">Кошка</div>
      </div>
      <div className="row">
        <div className="col fw-bold">Чип</div>
        <div className="col">VL-0214</div>
      </div>
      <div className="row">
        <div className="col fw-bold">Район</div>
        <div className="col">Василеостровский</div>
      </div>
      <div className="row">
        <div className="col fw-bold">Дата</div>
        <div className="col">01-01-1970</div>
      </div>
      <div className="row">
        <div className="col fw-bold">Описание</div>
        <div className="col">Найдена кошка, порода Сфинкс, очень грустная</div>
      </div>
      <div className="row">
        <div className="col fw-bold">Телефон</div>
        <div className="col">
          <a href="tel:89112345678">89112345678</a>
        </div>
      </div>
      <div className="row">
        <div className="col fw-bold">Email</div>
        <div className="col">
          <a href="mailto:user@user.ru">user@user.ru</a>
        </div>
      </div>
      <div className="row">
        <div className="col fw-bold">Имя</div>
        <div className="col">Иван</div>
      </div>
    </div>
  );
}

export default Info;
