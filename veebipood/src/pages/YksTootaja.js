import React from 'react'
import tootajadFailist from "../data/tootajad.json";
import { useParams } from 'react-router-dom';

function YksTootaja() {
  const { index } = useParams();
  const tootaja = tootajadFailist[index];

  if (tootaja === undefined) {
    return <div>töötajat ei leitud</div>
  }

  return (
    <div>
      <h3>{tootaja.nimi}</h3>
      <div>Amet: {tootaja.amet}</div>
      <div>E-mail: {tootaja.email}</div>
      <div>Vanus: {tootaja.vanus}</div>
    </div>
  )
}

export default YksTootaja