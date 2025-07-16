import React from 'react';
import FoundAnimalCard from './FoundAnimalCard';

function FoundAnimals(props) {
    return (
        <section id="card-section" className="mt-5">
          <h2 className="text-center pb-1 line-hight-08">Найденные животные</h2>
          <div class="row row-cols-1 row-cols-md-3 mt-4 mb-3 text-center">      
              <FoundAnimalCard kind="Кошка" src="https://placebear.com/674/400" alt="cat" date="30 ноября 2025" district="Кировский район"/>
              <FoundAnimalCard kind="Кошка" src="https://placebear.com/674/400" alt="cat" date="30 ноября 2025" district="Кировский район"/>
              <FoundAnimalCard kind="Кошка" src="https://placebear.com/674/400" alt="cat" date="30 ноября 2025" district="Кировский район"/>
              <FoundAnimalCard kind="Кошка" src="https://placebear.com/674/400" alt="cat" date="30 ноября 2025" district="Кировский район"/>
              <FoundAnimalCard kind="Кошка" src="https://placebear.com/674/400" alt="cat" date="30 ноября 2025" district="Кировский район"/>
              <FoundAnimalCard kind="Кошка" src="https://placebear.com/674/400" alt="cat" date="30 ноября 2025" district="Кировский район"/>
          </div>
        </section> 
    );
}

export default FoundAnimals;