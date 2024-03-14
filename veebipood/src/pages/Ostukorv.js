import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvFailist from "../data/ostukorv.json";

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);

  const lisaOstukorviRedBull = () => {
    ostukorv.push("Red bull");
    uuendaOstukorv(ostukorv.slice());
  }

  const kustutaOstukorvist = (index) => {
    ostukorv.splice(index, 1);
    uuendaOstukorv(ostukorv.slice());
  }

  const lisaOstukorvi = (uusToode) => {
    ostukorv.push(uusToode);
    uuendaOstukorv(ostukorv.slice());
  }

  const arvutaKogusumma = () => {
     let summa = 0;
     ostukorv.forEach(toode => summa = summa + toode.hind);
     return summa;
  }

  return (
    <div>
        { ostukorv.length === 0 && <div> Ostukorv on hetkel tühi.</div>}

        <button onClick={() => uuendaOstukorv(["Coca", "Fanta"])} >Jäta alles Coca + Fanta</button>
        <button onClick={lisaOstukorviRedBull} >Lisa lõppu juurde Red bull</button>
       
        {ostukorv.length > 0 &&
          <div>
            <div>Ostukorvis on {ostukorv.length} ese(t) </div>
            <button onClick={() => uuendaOstukorv([])} >Tühjenda</button>
        </div>}

        { ostukorv.map((toode, index) => 
          <div key={index}>
            {index}.
            <img style={{width: "50px"}} src={toode.pilt} alt="" />
            {toode.nimi} - {toode.hind} €
            <button onClick={() => kustutaOstukorvist(index)} >Kustuta</button>
            <button onClick={() => lisaOstukorvi(toode)} >Lisa lõppu üks juurde</button>
          </div> )}

          <div>Kogusumma: {arvutaKogusumma()} €</div>
        
        <Link to="/avaleht">Avalehele</Link>

        { ostukorv.length === 0 && <img src="/empty.svg" alt="" />}
    </div>
  )
}

export default Ostukorv