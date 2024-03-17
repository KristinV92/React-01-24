import React, { useState } from 'react';
import esindusedFailist from "../data/esindused.json";
import { Link } from "react-router-dom";


// KOJU:
// Kustutada ei saa enam vaatamise lehel. Esindused.js
// Lisada ei saa juba eelmise korra kodutöö tõttu vaatamise lehel: LisaEsindus.js
// Kustutada saab läbi HaldaEsindusi.js
// Esindused.js sees imiteerime tavainimese vaadet
// LisaEsindus.js ja HaldaEsindusei.js imiteerivad Administraatori vaadet

function HaldaEsindusi() {
  const [keskused, uuendaKeskused] = useState(esindusedFailist);

  const kustutaTallinnaEsindused =(index) => {
    esindusedFailist.splice(index, 1);
    uuendaKeskused(esindusedFailist.slice());
   }
   
   const lisaTallinnaEsindused= (uusKeskus) => {
     esindusedFailist.push(uusKeskus);
     uuendaKeskused(esindusedFailist.slice());
   }
  return (
    <div>
      {keskused.map((keskus, index) =>
    <div key={index}>
      <div>{keskus.nimi}</div>  
      <div>Aadress: {keskus.aadress}</div>  
      <div>Kontakt: {keskus.tel}</div> 
     <button onClick={() => kustutaTallinnaEsindused(index)}>Kustuta</button>
     <button onClick={() => lisaTallinnaEsindused(keskus)}>Lisa lõppu juurde</button>
     <Link to={"/muuda-esindus/" +index}>
        <button>Muuda</button>
     </Link>
    </div>)}
    </div>
  )
}

export default HaldaEsindusi