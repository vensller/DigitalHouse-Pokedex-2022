import { useParams } from 'react-router-dom';

function Legendary() {
  const {id} = useParams();

  return (
    <div>
      Olá, eu sou o Legendary com ID {id}
      {/* LISTAR TODAS AS INFORMAÇÕES DESSE LEGENDARY */}
    </div>    
  )
}

export default Legendary;