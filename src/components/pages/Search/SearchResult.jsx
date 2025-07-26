import { useEffect, useState } from "react";
import H1 from "../../H1";
import Pagination from "../../Pagination";
import Card from "./Card";
import { SERVER_URL } from "../../../general/constants";
import { useLocation } from "react-router-dom";
import Spinner from "../Home/Spinner";


function SearchResult() {
  const location = useLocation();
  const [srchResult, setSearchResult] = useState([]);  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (location.state && location.state.items) {
      setSearchResult(location.state.items);
    }
  }, [location.state]);  

    // Pagination logic
  const totalPages = Math.ceil(srchResult.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = srchResult.slice(indexOfFirst, indexOfLast);

  return (
    <section id="search-result-section" className="mt-5">
      <H1 h1="Результаты поиска" />      

      {srchResult.length === 0 && (
        <div id="nothing-found" className="text-danger text-center mt-4">
          Ничего не найдено.
        </div>
      )}

      <div
        id="search-result"
        className="row row-cols-1 row-cols-md-2 mt-4 pt-1 mb-3 text-center"
      >
        {currentItems.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            src={SERVER_URL + item.photos}
            kind={item.kind}
            date={item.date}
            district={item.district}
          />
        ))}
      </div>

      {srchResult.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </section>
  );
}

export default SearchResult;
