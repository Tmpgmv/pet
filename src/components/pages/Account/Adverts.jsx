import H2 from "../../H2";
import Pagination from "../../Pagination";
import Card from "./Card";

function Adverts() {
  return (
    <section id="adverts" className="mt-5">
      <H2 h2="Мои объявления" />

      <div className="row row-cols-1 row-cols-md-3 mt-4 mb-3 text-center">
        <Card src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
        <Card src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
        <Card src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
        <Card src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
        <Card src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
        <Card src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
        <Card src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
        <Card src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
        <Card src="https://placebear.com/674/400" alt="cat" date="30 июня 2025 г." district="Кировский район"/>
      </div>

      <Pagination />
    </section>
  );
}

export default Adverts;
