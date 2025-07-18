import React from "react";
import geo from "../../../assets/images/geo.svg";
import calendar from "../../../assets/images/calendar.svg";
import status from "../../../assets/images/status.svg";
import Img from "../../Img";
import Card from "./Card";
import Pagination from "../../Pagination";
import H2 from "../../H2";

function Adverts() {
  return (
    <section id="adverts" className="mt-5">
      <H2 h2="Мои объявления" />

      <div className="row row-cols-1 row-cols-md-3 mt-4 mb-3 text-center">
        <Card src="https://placebear.com/674/400" alt="cat" />
        <Card src="https://placebear.com/674/400" alt="cat" />
        <Card src="https://placebear.com/674/400" alt="cat" />
        <Card src="https://placebear.com/674/400" alt="cat" />
        <Card src="https://placebear.com/674/400" alt="cat" />
        <Card src="https://placebear.com/674/400" alt="cat" />
        <Card src="https://placebear.com/674/400" alt="cat" />
        <Card src="https://placebear.com/674/400" alt="cat" />
        <Card src="https://placebear.com/674/400" alt="cat" />
      </div>

      <Pagination />
    </section>
  );
}

export default Adverts;
