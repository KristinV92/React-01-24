import React from 'react'
import hinnadFailist from "../data/hinnad.json"
import { useParams } from 'react-router-dom'

function YksHind() {
  const { index } = useParams();
  const hind = hinnadFailist[ index ]

  if (hind === undefined) {
    return <div>Hinda ei leitud</div>
  }

  return (
    <div>
      <h2>Number: {hind.number}</h2>
      <h3>Lisaja: {hind.lisaja} </h3>
    </div>
  )
}

export default YksHind