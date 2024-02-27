import { useRef } from "react";
import { useState } from "react";
import nimedJSON from "../nimed.json";

function TagasisideAndjad() {
    const [andjad, uuendaAndjad] = useState(nimedJSON);
    

    const filtreeriM = () => {
        const vastus = andjad.filter(element => element.startsWith('M'));
        uuendaAndjad(vastus);
    }

    const filtreeri6Kohalised = () => {
        const vastus = andjad.filter(element => element.length === 6);
        uuendaAndjad(vastus);
    }

    const filtreeriYLopp = () => {
        const vastus = andjad.filter(element => element.endsWith("y"));
        uuendaAndjad(vastus);
    }

    const sortZA = () => {
        andjad.sort();
        andjad.reverse();
        uuendaAndjad(andjad.slice());
    }

    const insertEST = () => {
        const vastus = andjad.map(element => "EST-" + element);
        uuendaAndjad(vastus);
    }

    const kustutaTagasiside = (index) => {
        andjad.splice(index, 1);
        uuendaAndjad(andjad.slice());
    }

    const andjaRef= useRef();

    const lisaTagasiside = () => {
        andjad.push(andjaRef.current.value);
        uuendaAndjad(andjad.slice());
    }


  return ( <div>
    <div><h3> Tagasiside on andnud: {andjad.length} inimest</h3></div>

    <button onClick={filtreeriM}>Filtreeri 'M' tähega algavad nimed</button>
    <button onClick={filtreeri6Kohalised}>Filtreeri 6 kohalised nimed</button>
    <button onClick={filtreeriYLopp}>Filtreeri 'Y' tähega lõppevad nimed</button>

    <button onClick={sortZA}>Sorteeri Z-A</button>

    <button onClick={insertEST}>Iga nime ette 'EST'</button>

    {andjad.map((element,index) =>
    <div key={element}>
        {element} <button onClick={() => kustutaTagasiside(index)}>Kustuta</button>
    </div>)}

    <h3><label> Lisa tagasiside andja</label></h3> 
    <input ref={andjaRef} type="text" />
    <button onClick={() => lisaTagasiside()}>Lisa</button>
    </div>)
}

export default TagasisideAndjad;