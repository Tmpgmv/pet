import H1 from "../../H1";
import EditDelete from "./EditDelete";
import Info from "./Info";
import Photos from "./Photos";

function Main({cardInfo}) {
  return (
    <main>      
      <section id="info-section" className="mt-5">
        <H1 h1="Найденное животное" />
        <EditDelete petId={cardInfo.id}/>
        <Info cardInfo={cardInfo}/>
      </section>
      <Photos cardInfo={cardInfo}/>
    </main>
  );
}

export default Main;
