import { useState } from 'react';
import joogidFailist from "../joogid.json";

function HaldaJooke() {
    const [joogid, uuendaJoogid] = useState (joogidFailist);
    

    const kustuta = (index) => {
        joogidFailist.splice(index,1);
        uuendaJoogid(joogidFailist.slice());
    }


  return (
    <div>Joogid:
        {joogid.map((element, index) =>
    <div>
        <span>{element}</span>
        <button onClick={() => kustuta(index)} >X</button>
    </div>)}
    <br />
    </div>)
}

export default HaldaJooke