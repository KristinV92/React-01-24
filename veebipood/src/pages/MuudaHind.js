import React, { useRef } from 'react'
import hinnadFailist from "../data/hinnad.json";
import { useParams } from 'react-router-dom';

function MuudaHind() {
  const { index } = useParams();
  const hind = hinnadFailist[index];
  const hindRef = useRef();

  if( hind === undefined) {
    return <div>Hinda ei leitud</div>
  }

  const muuda = () => {
    hinnadFailist[index] = {
      "number": Number(hindRef.current.value),
      "lisaja": hind.lisaja
    };
  }

  return (
    <div>
      <label>Hind</label> <br />
      <input ref={hindRef} defaultValue={hind.number} type="text" /> <br />
      <button onClick={muuda}>Muuda hind</button>
    </div>
  )
}

export default MuudaHind