import React, { useRef } from 'react'
import tootajadFailist from "../data/tootajad.json";
import { useParams } from 'react-router-dom';

function MuudaTootaja() {
  const { index } = useParams();
  const tootaja = tootajadFailist[index]
  const nimiRef = useRef();

  if (tootaja === undefined ) {
    return <div>Töötajat ei leitud</div>
  }

  const muuda = () => {
    tootajadFailist[index] = nimiRef.current.value
  }

  return (
    <div>
      <label Töötaja nimi></label><br />
      <input ref={nimiRef} defaultValue={tootaja} type="text" /> <br />
      <button onClick={muuda} >Muuda</button><br />
    </div>
  )
}

export default MuudaTootaja