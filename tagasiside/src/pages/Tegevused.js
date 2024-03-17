import { useState } from "react";
import tegevusteFail from "../tegevused.json";

function Tegevused() {
    const [tegevused, uuendaTegevused] = useState(tegevusteFail);

    const n2itaKasutajaYks = () => {
        const vastus = tegevused.filter(element => element.userId === 1);
        uuendaTegevused(vastus);
    }   

    const n2itaKasutajaKaks = () => {
        const vastus = tegevused.filter(element => element.userId === 2);
        uuendaTegevused(vastus);
    }  
    
    const n2itaKasutajaKolm = () => {
        const vastus = tegevused.filter(element => element.userId === 3);
        uuendaTegevused(vastus);
    }  

    const n2itaK6iki = () => {
    uuendaTegevused(tegevusteFail);
    }

    const valmisTegevus = () => {
        const vastus = tegevused.filter(tegevus => tegevus.completed  === true)
        uuendaTegevused(vastus);
    }

    const mitteValmisTegevus = () => {
        const vastus = tegevused.filter(tegevus => tegevus.completed  === false)
        uuendaTegevused(vastus);
        
    }

    const algabTT2hega = () => {
        const vastus = tegevused.filter(tegevus => tegevus.title.startsWith("t"));
        uuendaTegevused(vastus);
    }

    const RohkemKui20T2hte = () => {
        const vastus = tegevused.filter(tegevus => tegevus.title.length > 20);
        uuendaTegevused(vastus);
    }

  return (<div>
    <div> Hetke on {tegevused.length} tegevust </div>
        <button onClick={() => n2itaKasutajaYks()}>Kuva kõik kasutaja ID 1 tegevused</button>
        <button onClick={() => n2itaKasutajaKaks()}>Kuva kõik kasutaja ID 2 tegevused</button>
        <button onClick={() => n2itaKasutajaKolm()}>Kuva kõik kasutaja ID 3 tegevused</button>
        <button onClick={() => valmisTegevus()}>Kuva kõik valmis tegevused</button>
        <button onClick={() => mitteValmisTegevus()}>Kuva kõik mittevalmis tegevused</button>
        <button onClick={() => algabTT2hega()}>Kuva kõik "t" tähega algavad tegevused</button>
        <button onClick={RohkemKui20T2hte}>Kuva tegevused, millel on tähemärke rohkem kui 20</button>
        <button onClick={() => n2itaK6iki()}>Kuva kõik tegevused tagasi</button>

    {tegevused.map(element =>
       <div>
            <div>Kasutaja ID: {element.userId}</div>
            <div>ID: {element.id}</div>
            <div>Tegevus: {element.title}</div>
            <div>Olek: {element.completed ? "Valmis tegevus" : "Mittevalmis tegevus"}</div>
            <br />
       </div> )}
  </div>);
}

export default Tegevused;