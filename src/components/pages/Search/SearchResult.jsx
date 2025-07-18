import H1 from "../../H1";
import Pagination from "../../Pagination";
import Card from "./Card";

function SearchResult() {
  return (
    <section id="search-result-section" className="mt-5">
      <H1 h1="Результаты поиска" />

      <div className="text-danger text-center mt-4">Ничего не найдено.</div>

      <div className="row row-cols-1 row-cols-md-2 mt-4 pt-1 mb-3 text-center">
        <Card h2="Кошка" src="https://placebear.com/674/400" />
        <Card h2="Кошка" src="https://placebear.com/674/400" />
        <Card h2="Кошка" src="https://placebear.com/674/400" />
        <Card h2="Кошка" src="https://placebear.com/674/400" />
        <Card h2="Кошка" src="https://placebear.com/674/400" />
        <Card h2="Кошка" src="https://placebear.com/674/400" />
        <Card h2="Кошка" src="https://placebear.com/674/400" />
        <Card h2="Кошка" src="https://placebear.com/674/400" />
        <Card h2="Кошка" src="https://placebear.com/674/400" />
        <Card h2="Кошка" src="https://placebear.com/674/400" />
      </div>
      <Pagination />
    </section>
  );
}

export default SearchResult;
