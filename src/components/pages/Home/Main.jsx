import React from 'react';
import Search from './Search';
import About from './About';
import Carousel from './Carousel';
import FoundAnimals from './FoundAnimals';


function Main() {
    return (
      <main>
        <div id="intro">
            <About />
            <Search />
        </div>
        
        <Carousel />
        <FoundAnimals />
 
      </main>
    );
}

export default Main;