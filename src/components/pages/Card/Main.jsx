import H1 from "../../H1";
import EditDelete from "./EditDelete";
import Info from "./Info";
import Photos from "./Photos";

function Main({cardInfo, belongsToCurrentUser=false}) {
  
  return (
    <main>      
      <section id="info-section" className="mt-5">        
        <H1 h1="Найденное животное" />
        {/* См. комментарий к тегу Link в components/pages/Account/Card. */}
        {belongsToCurrentUser && <EditDelete petId={cardInfo.id}/>}        
        <Info cardInfo={cardInfo}/>
      </section>
      <Photos cardInfo={cardInfo}/>
    </main>
  );
}

export default Main;
