import React from "react";
import InfoRow from "../../InfoRow";


function Info(props) {
  return (
    <div className="container text-start info col col-md-8 mt-4">
        <InfoRow caption="Вид" value="Кошка"/>
        <InfoRow caption="Чип" value="VL-0214"/>
        <InfoRow caption="Район" value="Василеостровский"/>
        <InfoRow caption="Дата" value="01-01-1970"/>
        <InfoRow caption="Описание" value="Найдена кошка, порода Сфинкс, очень грустная"/>
        <InfoRow caption="Телефон" value="8 (911) 234-56-78" isPhone={true}/>
        <InfoRow caption="Email" value="user@user.ru" isEmail={true}/>
        <InfoRow caption="Имя нашедшего" value="Иван"/>
    </div>
  );
}

export default Info;
