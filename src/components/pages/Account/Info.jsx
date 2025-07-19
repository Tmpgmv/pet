import H1 from "../../H1";
import InfoRow from "../../InfoRow";

function Info() {
  return (
    <section id="info-section" className="mt-5">
      <H1 h1="Информация о пользователе" />

      <div className="container text-start info col col-md-8 mt-4">
        <InfoRow caption="Имя" value="Иван" />
        <InfoRow caption="Email" value="info@example.com" isEmail={true} />
        <InfoRow caption="Телефон" value="8 (911) 234-56-78" isPhone={true}/>
        <InfoRow caption="Зарегистрирован" value="01-01-1970" />
        <InfoRow caption="Количество объявлений" value="4" />
        <InfoRow caption="Найдено животных" value="2" />
      </div>
    </section>
  );
}

export default Info;
