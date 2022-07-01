import './style.css';
import Pikachu from './assets/pikachu.svg';
import Pokebola from './assets/pokebola.svg';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className="">
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
        <a href="dark-mode" className="botao-flutuante">
          <img src={Pokebola} alt="Pokebola"/>
        </a>
      </main>
    </>
  );
}

export default App;
