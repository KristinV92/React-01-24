import { useState } from 'react';
import esindusedFailist from '../data/esindused.json';
import { Link } from "react-router-dom";

function Esindused() {
  // vasakul pool on muutuja, mille sees on muutuv väärtus
  //    see võib lõpmatuseni muutuda
  // paremal pool on muutja, tema abil muudan muutujat
const [linn,uuendaLinn] = useState("Pärnu");

const [keskused, uuendaKeskused] = useState(esindusedFailist);

// .sort() ---> kõik täpitähed lõppu

const sorteeriAZ = () => {
  keskused.sort((a,b) => a.localeCompare(b, "et"));
  uuendaKeskused(keskused.slice());
}

const sorteeriZA = () => {
  keskused.sort((a,b) => b.localeCompare(a, "et"));
  uuendaKeskused(keskused.slice());
}

const sorteeriTahedKasvavalt = () => {
  keskused.sort((a, b) => a.length - b.length);
  uuendaKeskused(keskused.slice());
}

const sorteeriTahedKahanevalt = () => {
  keskused.sort((a, b) => b.length - a.length);
  uuendaKeskused(keskused.slice());
}

const sorteeriTeineTahtAZ = () => {
  keskused.sort((a,b) => a[1].localeCompare(b[1], "et"));
  uuendaKeskused(keskused.slice());
}

const filtreeriEgaLoppevad = () => {
  const vastus = keskused.filter(e => e.endsWith("e") === true);
  uuendaKeskused(vastus);
}

const filtreeriVah7Tahelised = () => {
  const vastus = keskused.filter(element => element.length < 7);
  uuendaKeskused(vastus);
}

const filtreeri9Tahelised = () => {
  const vastus = keskused.filter(keskused => keskused.length === 9);
  uuendaKeskused(vastus);
}

const filtreeriLyhenditIsSisaldavad = () => {
  const vastus = keskused.filter(yksKeskus => yksKeskus.includes("is") === true );
  uuendaKeskused(vastus);
}

const filtreeriNeljasTahtI = () => {
  const vastus = keskused.filter(e => e[3] === "i");
  uuendaKeskused(vastus);
}


  return (
    <div>
    <div>Esindused</div>
    <span className={linn === "Tallinn" ? "linn-aktiivne" : "linn"} onClick={() => uuendaLinn("Tallinn")}>Tallinn(7)</span>
    <span className={linn === "Tartu" ? "linn-aktiivne" : "linn"} onClick={() => uuendaLinn("Tartu")}>Tartu(2)</span>
    <span className={linn === "Narva" ? "linn-aktiivne" : "linn"} onClick={() => uuendaLinn("Narva")}>Narva(1)</span>
    <span className={linn === "TPärnu" ? "linn-aktiivne" : "linn"} onClick={() => uuendaLinn("Pärnu")}>Pärnu(1)</span>
    <br /><br />

    <div>Aktiivne linn: {linn} </div>

    {linn === "Tallinn" &&
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA} >Sorteeri Z-A</button> 
      <button onClick={sorteeriTahedKasvavalt} >Sorteeri tähed kasvavalt</button> 
      <button onClick={sorteeriTahedKahanevalt} >Sorteeri tähed kahanevalt</button>
      <button onClick={sorteeriTeineTahtAZ} >Sorteeri teine täht A-Z</button> 

      <button onClick={filtreeriEgaLoppevad}>Filtreeri 'e'ga lõppevad</button> 
      <button onClick={filtreeriVah7Tahelised}>Filtreeri vähem kui 7 tähelised</button>
      <button onClick={filtreeri9Tahelised}>Filtreeri täpselt 9 tähelised</button>
      <button onClick={filtreeriLyhenditIsSisaldavad}>Filtreeri kellel on sees lühend 'is'</button>
      <button onClick={filtreeriNeljasTahtI}>Filtreeri kellel on neljas täht 'i'</button>
      
     {keskused.map((keskus, index) => 
     <div key={index}> {keskus}  
      <Link to={"/Esindus/" +index}>
          <button>Vaata lähemalt</button>
      </Link>
     </div>)}

     {/* 
     KOJU:
     Kustutamise võimekus
     Sama lõppu lisamise võimekus
     Läbi inputi enda kirjutatu lüppu lisamise võimekus
     Saab teha ainult Tallinnale, sest seal on .map()
      */}
    </div>}



   
 {/*  Hard-coded allpool */}

   {linn === "Tartu" && 
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <div>Raatuse</div>
      <div>Lõunakeskus</div>
    </div>}

      { linn === "Narva" && <div>Fama</div>}
    
      { linn === "Pärnu" && <div>Port Artur 2</div>}
      </div>
  )
}

export default Esindused