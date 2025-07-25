import InfoRow from "../../InfoRow";

function Info({ cardInfo }) {
  
  
  
  return (
    
    <div className="container text-start info col col-md-8 mt-4">
      <InfoRow caption="Вид" value={cardInfo.kind} />
      <InfoRow caption="Чип" value={cardInfo.mark} />
      <InfoRow caption="Район" value={cardInfo.district} />
      <InfoRow caption="Дата" value={cardInfo.date} />
      <InfoRow caption="Описание" value={cardInfo.description} />
      <InfoRow caption="Телефон" value={cardInfo.phone} isPhone={true} />
      <InfoRow caption="Email" value={cardInfo.email} isEmail={true} />
      <InfoRow caption="Имя нашедшего" value={cardInfo.name} />
    </div>
  );
}

export default Info;
