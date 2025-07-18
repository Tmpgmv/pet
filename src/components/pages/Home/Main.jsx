import React from "react";
import QuickSearch from "../../QuickSearch";
import About from "./About";
import Carousel from "./Carousel";
import FoundAnimals from "./FoundAnimals";

function Main() {
  return (
    <main>
      <div id="intro">
        <About />
        <QuickSearch />
      </div>

      <Carousel />
      <FoundAnimals />
    </main>
  );
}

export default Main;
