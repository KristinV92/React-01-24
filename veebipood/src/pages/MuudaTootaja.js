import React, { useRef } from 'react'
import tootajadFailist from "../data/tootajad.json";
import { useParams } from 'react-router-dom';

function MuudaTootaja() {
  const { index } = useParams();
  const tootaja = tootajadFailist[index]
  const nimiRef = useRef();
  const ametRef = useRef();
  const emailRef = useRef();
  const vanusRef = useRef();

  if (tootaja === undefined ) {
    return <div>Töötajat ei leitud</div>
  }

  const muuda = () => {
    tootajadFailist[index] = {
      "nimi": nimiRef.current.value,
      "amet": ametRef.current.value,
      "email": emailRef.current.value, 
      "vanus":Number(vanusRef.current.value) 
    };
  }

  return (
    <div>
      <label Töötaja nimi></label><br />
      <input ref={nimiRef} defaultValue={tootaja.nimi} type="text" /><br />
      <label Töötaja amet></label><br />
      <input ref={ametRef} defaultValue={tootaja.amet} type="text" /><br />
      <label Töötaja email></label><br />
      <input ref={emailRef} defaultValue={tootaja.email} type="text" /><br />
      <label Töötaja vanus></label><br />
      <input ref={vanusRef} defaultValue={tootaja.vanus} type="number" /><br />
      <button onClick={muuda} >Muuda</button><br />
    </div>
  )
}

export default MuudaTootaja