import AlerSuccess from "../../AlertSuccess";
import H1 from "../../H1";
import EditDelete from "./EditDelete";
import Info from "./Info";

function Main() {
  return (
    <main>
      <AlerSuccess message="Изменения сохранены." />
      <section id="info-section" className="mt-5">
        <H1 h1="Найденное животное" />
        <EditDelete />
        <Info />
      </section>
    </main>
  );
}

export default Main;
