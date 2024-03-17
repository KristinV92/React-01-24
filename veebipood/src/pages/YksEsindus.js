import React from 'react'
import esindusedFailist from "../data/esindused.json";
import { useParams } from 'react-router-dom';

function YksEsindus() {
  const { index } = useParams();
  const esindus = esindusedFailist[index];

if (esindus === undefined) {
  return <div>Esindust ei leitud</div>
}


  return (
    <div>
      <h2>{esindus.nimi}</h2>
      <div>Aadress: {esindus.aadress}</div>
      <div>Kontakt: {esindus.tel}</div>
    </div>
  )
}

export default YksEsindus