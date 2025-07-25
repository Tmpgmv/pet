import Alert from "../../Alert";
import H1 from "../../H1";
import EditDelete from "./EditDelete";
import Info from "./Info";
import Photos from "./Photos";

function Main({cardId}) {
  return (
    <main>      
      <section id="info-section" className="mt-5">
        <H1 h1="Найденное животное" />
        <EditDelete />
        <Info cardId={cardId}/>
      </section>
      <Photos />
    </main>
  );
}

export default Main;
