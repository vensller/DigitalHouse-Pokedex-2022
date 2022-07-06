import { useEffect, useState } from 'react';
import './style.css';
import Pikachu from './assets/pikachu.svg';
import Header from './components/Header';
import DarkModeButton from './components/DarkModeButton';
import api from './services/api';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [legendaries, setLegendaries] = useState([]);
  
  function onClickDarkMode() {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    async function loadLegendaries() {
      const legendaries = await api.get("/legendaries/all");
      setLegendaries(legendaries.data);
    }

    loadLegendaries();
  }, [])

  return (
    <>
      <Header darkMode={darkMode}/>
      {/* <main className={darkMode ? "dark-mode-main" : ""}>
        <img src={Pikachu} alt="Pikachu" />
        <div>
          <h1>
            <strong>Find</strong> all your favorite <strong>Pokemon</strong>
          </h1>
          <p>
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
          </p>
          <a className="link-pokemons">See pokemons</a>
        </div>
        <DarkModeButton onClick={onClickDarkMode}/>
      </main> */}
      <div>
        {legendaries.map(legendary => (
          <div className="legendary">
            <h1>{legendary.name}</h1>
            <p>{legendary.description}</p>
            <span>Health points: {legendary.healthPoints}</span>
            <span>Experience: {legendary.experience}</span>
            <span>Attack: {legendary.attack}</span>
            <span>Defense: {legendary.defense}</span>
            <span>Special attack: {legendary.specialAttack}</span>
            <span>Special defense: {legendary.specialDefense}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
