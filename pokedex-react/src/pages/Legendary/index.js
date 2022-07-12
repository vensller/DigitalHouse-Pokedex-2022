import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import api from '../../services/api';

function Legendary() {
  const {id} = useParams();
  const [legendary, setLegendary] = useState();

  useEffect(() => {
    async function loadLegendary() {
      const response = await api.get(`/legendaries/${id}`);
      setLegendary(response.data);
    }

    loadLegendary();
  }, [id]);

  return (
    <div>
      {legendary ? (
        <>
          Olá, eu sou o Legendary com ID {id}
          <div className="legendary">
            <h1>{legendary?.name}</h1>
            <p>{legendary?.description}</p>
            <span>Health points: {legendary?.healthPoints}</span>
            <span>Experience: {legendary?.experience}</span>
            <span>Attack: {legendary?.attack}</span>
            <span>Defense: {legendary?.defense}</span>
            <span>Special attack: {legendary?.specialAttack}</span>
            <span>Special defense: {legendary?.specialDefense}</span>
          </div>
        </>
      ) : (
        <span>
          Não existe Legendary cadastrado com o ID {id}
        </span>
      )}      
    </div>    
  )
}

export default Legendary;