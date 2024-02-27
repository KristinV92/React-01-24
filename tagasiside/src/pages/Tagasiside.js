import { useRef } from "react";
import { useState } from "react";

function Tagasiside() {
    const [tagasisided, määraTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"]);
    const tagasisideRef = useRef();

    function kustutaTagasiside(jrknr){
      tagasisided.splice(jrknr, 1);
      määraTagasisided(tagasisided.slice());
    }

    function lisaUusTagasiside(){
      tagasisided.push(tagasisideRef.current.value);
      määraTagasisided(tagasisided.slice());

    }

  return (
  <div>
    <h3>Tagasisided:</h3>
    {tagasisided.map((element, jrknr) =>
    <div>
      <span>{element}</span>
      <button onClick={() => kustutaTagasiside(jrknr)}>X</button>
    </div>)}
    <br />
    <label>Lisa uus tagasiside:</label>
    <input ref={tagasisideRef} type="text" />
    <button onClick={() => lisaUusTagasiside()} >Sisesta</button>
  </div> )
  }

export default Tagasiside;