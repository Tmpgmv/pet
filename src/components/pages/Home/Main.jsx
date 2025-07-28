import QuickSearch from "../../QuickSearch";
import About from "./About";
import Carousel from "./Carousel";
import FoundAnimals from "./FoundAnimals";
import Subscription from "./Subscription"

function Main() {
  return (
    <main>
      <div id="intro">
        <About />
        <QuickSearch />
      </div>

      <Carousel />
      <FoundAnimals />
      <Subscription />
    </main>
  );
}

export default Main;
