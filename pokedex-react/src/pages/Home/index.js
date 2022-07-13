import { useState } from "react";
import Pikachu from "../../assets/pikachu.svg";
import Header from "../../components/Header";
import DarkModeButton from "../../components/DarkModeButton";
import { useDarkMode } from "../../Context/DarkModeContext";

function Home() {
  const { darkMode } = useDarkMode();

  return (
    <>
      <Header />
      <main className={darkMode ? "dark-mode-main" : ""}>
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
        <DarkModeButton />
      </main>
    </>
  );
}

export default Home;
