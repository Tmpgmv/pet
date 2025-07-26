import { useEffect, useState } from "react";
import H1 from "../../H1";
import Pagination from "../../Pagination";
import Card from "./Card";
import { SERVER_URL } from "../../../general/constants";

function SearchResult() {
  const [srchResult, setSearchResult] = useState([]);  
  
  // useEffect(() => {
  //   setSearchResult([
  //     {
  //       id: 1,
  //       kind: "Кошка",
  //       photos:
  //         SERVER_URL +
  //         "/storage/images/fXk6cXXxtggt6BDMa4y48WPheXTjwX5MengoQ5s3.png",
  //       description: "Кошка рыжая",
  //       mark: "vc-001-spb",
  //       district: "Василиостровский",
  //       date: "2023-03-05",
  //     },
  //     {
  //       id: 262,
  //       kind: "Кошка",
  //       photos:
  //         SERVER_URL +
  //         "/storage/images/tmFKdWa918STLByrM6s5qCC53aaolf4PVKDy6dEB.png",
  //       description: "Хорошая кошка",
  //       mark: "TR-123",
  //       district: "Приморский",
  //       date: "2023-12-16",
  //     },
  //     {
  //       id: 265,
  //       kind: "кошка",
  //       photos:
  //         SERVER_URL +
  //         "/storage/images/sAwehablfwJN0lxMc96nLkGhDQgZjMFCCdowOtGk.png",
  //       description: "кошка красивая",
  //       mark: "УвГ-101",
  //       district: "московский",
  //       date: "2023-12-18",
  //     },
  //     {
  //       id: 266,
  //       kind: "кошка",
  //       photos:
  //         SERVER_URL +
  //         "/storage/images/Dm78bITpNm9kPOZgVKyxRFR1Sb9rgen3YZTLU7sl.png",
  //       description: "кошка красивая",
  //       mark: "УвГ-101",
  //       district: "московский",
  //       date: "2023-12-18",
  //     },
  //     {
  //       id: 267,
  //       kind: "кошка",
  //       photos:
  //         SERVER_URL +
  //         "/storage/images/Rw6EyObmcc0S5KfGXa6XqWldg40MddcrdjbtRxg4.png",
  //       description: "кошка красивая",
  //       mark: "УвГ-101",
  //       district: "московский",
  //       date: "2023-12-18",
  //     },
  //     {
  //       id: 294,
  //       kind: "собака",
  //       photos:
  //         SERVER_URL +
  //         "/storage/images/gr2S7uEg4i3DeXg5DoL3HeeQ4aeh9xaTIFBsQewp.png",
  //       description: "макар-мукар-кошка",
  //       mark: "УвГ-120",
  //       district: "квартал",
  //       date: "2023-12-19",
  //     },
  //     {
  //       id: 298,
  //       kind: "Кошка",
  //       photos:
  //         SERVER_URL +
  //         "/storage/images/IRRonuWYcM81OEiqLXfPGVJDUGD9gAOij3sXgK3r.png",
  //       description: "макар-мукар-кошка",
  //       mark: "УвГ-120",
  //       district: "квартал",
  //       date: "2023-12-19",
  //     },
  //     {
  //       id: 323,
  //       kind: "кролик",
  //       photos:
  //         SERVER_URL +
  //         "/storage/images/aj3mlhvKaEBeKp6I9ajf7BqH7696MBU3RHeZEDgO.png",
  //       description: "Красивая кошка",
  //       mark: "йувва",
  //       district: "Красное село",
  //       date: "2023-12-21",
  //     },
  //     {
  //       id: 357,
  //       kind: "Кошка",
  //       photos:
  //         SERVER_URL +
  //         "/storage/images/eIAiryK0V3TRrdhlrAVVdiKZflWRTRgXl3vsck7n.png",
  //       description: "макар-мукар-кошка",
  //       mark: "УвГ-120",
  //       district: "квартал",
  //       date: "2023-12-21",
  //     },
  //     {
  //       id: 358,
  //       kind: "Кошка",
  //       photos:
  //         SERVER_URL +
  //         "/storage/images/SbQWg1xQzu70VuM9I0mnBQ4hjeq1VmHY3u6SK5C5.png",
  //       description: "макар-мукар-кошка",
  //       mark: "УвГ-120",
  //       district: "квартал",
  //       date: "2023-12-21",
  //     },
  //     {
  //       id: 368,
  //       kind: "кошка",
  //       photos:
  //         SERVER_URL +
  //         "/storage/images/TqbHBghsSV2l9tJCC6Tyj8gLaomIYMxDRN2RT5ec.png",
  //       description: 'потерялась кошка по кличке "Удача"',
  //       mark: "qw-22-spb",
  //       district: "Московский",
  //       date: "2023-12-22",
  //     },
  //     {
  //       id: 369,
  //       kind: "Кошка",
  //       photos:
  //         SERVER_URL +
  //         "/storage/images/5XoGHFZ6wKBvfomsYUyZADFZEmV3GRW9RthcGr8R.png",
  //       description: 'Потерялась кошка по кличке "Удача"',
  //       mark: "qw-23-spb",
  //       district: "Московский",
  //       date: "2023-12-22",
  //     },
  //     {
  //       id: 383,
  //       kind: "Кошка",
  //       photos:
  //         SERVER_URL +
  //         "/storage/images/43Zkp4EOEZBXgdXF8xnXuDJOw1rgMzXBNxf6Wyej.png",
  //       description: 'Кошка по кличке "Удача"',
  //       mark: "df-15-spb",
  //       district: "Московский",
  //       date: "2023-12-22",
  //     },
  //     {
  //       id: 816,
  //       kind: "Кошка",
  //       photos:
  //         SERVER_URL +
  //         "/storage/images/0yZoh6wlHeVl8q9Mnjo8a8VqfDI1qf0QepX1C5va.png",
  //       description: "Ищу хозяина для здоровой кошки.",
  //       mark: "К123",
  //       district: "Центральный район",
  //       date: "2024-12-25",
  //     },
  //     {
  //       id: 817,
  //       kind: "Кошка",
  //       photos:
  //         SERVER_URL +
  //         "/storage/images/9vop3uWdu7pz1FSAPuUIy6CrBgjS5WGhjUYCJq8P.png",
  //       description: "Ищу хозяина для здоровой кошки.",
  //       mark: "К123",
  //       district: "Центральный район",
  //       date: "2024-12-25",
  //     },
  //   ]);
  // }, []);

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
        {srchResult.map((item) => (
          <Card
            id={item.id}
            src={item.photos}
            kind={item.kind}
            date={item.date}
            district={item.district}
          />
        ))}
      </div>
      <Pagination />
    </section>
  );
}

export default SearchResult;
