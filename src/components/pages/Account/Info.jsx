import React from "react";
import Row from "./Row";
import H1 from "../../H1";

function Info() {
  return (
    <section id="info-section" className="mt-5">
      <H1 h1="Информация о пользователе" />

      <div className="container text-start info col col-md-8 mt-4">
        <Row caption="Имя" value="Иван" />
        <Row caption="Email" value="info@example.com" isEmail={true} />
        <Row caption="Зарегистрирован" value="01-01-1970" />
        <Row caption="Количество объявлений" value="4" />
        <Row caption="Найдено животных" value="2" />
      </div>
    </section>
  );
}

export default Info;
