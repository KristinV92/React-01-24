import { useState } from 'react'
import tootajadJSON from "../data/tootajad.json";
import { Link } from 'react-router-dom';

function HaldaTootajad() {
    const [tootajad, uuendaTootajad] = useState(tootajadJSON);

    const kustutaTootaja =(index) => {
        tootajadJSON.splice(index, 1); //.splice() abil kustutan
        uuendaTootajad(tootajadJSON.slice()); //.slice() abil teen koopia, et ei peaks iseenda abil uuendama
      }
  
      const lisaTootaja = (uusTootaja) => {
        tootajad.push(uusTootaja);
        uuendaTootajad(tootajad.slice());
      }

  return (
    <div>
       {tootajad.map((tootaja, index) => 
     <div key={index}>
        {tootaja}
        <button onClick={() => kustutaTootaja(index)}>X</button>
        <button onClick={() => lisaTootaja(tootaja)}>Lisa lõppu juurde</button>
        <Link to={"/muuda-tootaja/" +index}>
          <button>Muuda</button>
        </Link>
     </div>)}
    </div>
  )
}

export default HaldaTootajad