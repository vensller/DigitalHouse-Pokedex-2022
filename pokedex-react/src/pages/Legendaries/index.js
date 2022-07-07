import { useEffect, useState } from 'react';
import api from '../../services/api';

function Legendaries() {
  const [legendaries, setLegendaries] = useState([]);
    
  useEffect(() => {
    async function loadLegendaries() {
      const legendaries = await api.get("/legendaries/all");
      setLegendaries(legendaries.data);
    }

    loadLegendaries();
  }, [])
  
  return (
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
  )
}

export default Legendaries;