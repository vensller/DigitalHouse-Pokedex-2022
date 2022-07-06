import { useEffect, useState } from 'react';
import './style.css';
import Pikachu from './assets/pikachu.svg';
import Header from './components/Header';
import DarkModeButton from './components/DarkModeButton';
import api from './services/api';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  function onClickDarkMode() {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    async function loadLegendaries() {
      const legendaries = await api.get("/legendaries/all");
      console.log(legendaries.data);
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
    </>
  );
}

export default App;
