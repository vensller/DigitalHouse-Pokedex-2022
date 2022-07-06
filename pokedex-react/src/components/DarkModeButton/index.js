import Pokebola from '../../assets/pokebola.svg';

function DarkModeButton({onClick}) {
  return (
    <a className="botao-flutuante" onClick={onClick}>
      <img src={Pokebola} alt="Pokebola"/>
    </a>
  )
}

export default DarkModeButton;