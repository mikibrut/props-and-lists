import './App.css';
import React, {useState } from 'react';
import animalData from './data.json';
import Card from './components/Card';

function App() {

const [animals, setAnimal] = useState(animalData);

const handleSortByLife = () => {
  const sortedAnimal = [...animals].sort((a,b) => a.lifeExpectancy - b.lifeExpectancy);
    setAnimal(sortedAnimal);
}

const handleFilterDogs = () => {
  const onlyDogs = animalData.filter(elem => elem.type === "dog");
    setAnimal(onlyDogs)
}

  return (
    <div className="App">
      <h1>Adopt me plz 🐾</h1>
      <button onClick={handleSortByLife} className='action-btn'>Sort by life expectancy</button>
      <button onClick={handleFilterDogs} className='action-btn'>Dogs</button>
      {animals.map(elem => {
        return <Card key={elem._id} animal={elem}/>
      })};
    </div>
  );
}

export default App;
