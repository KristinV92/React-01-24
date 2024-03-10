import { useState } from 'react'
import hinnadFailist from "../data/hinnad.json";
import { Link } from 'react-router-dom';

// App.js sees teha URL ja faili seos (URL-ks pange sama mis faili nimi)
// URL-le sattumise võimekus läbi <Link>
// Array väljakuvamine (List, Massiiv) läbi useState (.map())
// [ 312, 1234, 56, 88, 8, 234, 12]
// Lisage sorteerimine A-Z
// Pange ka koguarv .length abil (mitu tk mul lehel on)

// Tühjenda nupp, mis kustub kui on .length väärtus 0
// Kui pole ühtegi töötajat, siis kuva <div>Pole ühtegi hinda nähtaval</div>

function Hinnad() {
    const [hinnad, uuendaHinnad] = useState(hinnadFailist);
   
    const sorteeriAZ = () => {
      hinnad.sort((a, b) => a.toString().localeCompare(b.toString()));
      uuendaHinnad(hinnad.slice());
    }

    const sorteeriZA = () => {
      hinnad.sort((a, b) => a.toString().localeCompare(a.toString()));
      // hinnad.reverse();
      uuendaHinnad(hinnad.slice());
    }

    const sorteeriKasvavalt = () => {
      hinnad.sort((a, b) => a - b);
      uuendaHinnad(hinnad.slice());
    }

    const sorteeriKahanevalt = () => {
      hinnad.sort((a, b) => b - a);
      uuendaHinnad(hinnad.slice());
    }

    const lisaHind123 = () => {
      hinnadFailist.push(123);
      uuendaHinnad(hinnadFailist.slice());
    }

    const kustutaEsimene = () =>{
      hinnadFailist.splice(0, 1); //esimene järjekorranumber, teine mitu tk tahan ühe nupuvajutusega kustutada
      uuendaHinnad(hinnadFailist.slice());
    }

    const kustutaTeine = () =>{
      hinnadFailist.splice(1, 1);
      uuendaHinnad(hinnadFailist.slice());
    }

    const kustutaKolmas = () =>{
      hinnadFailist.splice(2, 1);
      uuendaHinnad(hinnadFailist.slice());
    }

    const kustutaNeljas = () =>{
      hinnadFailist.splice(3, 1);
      uuendaHinnad(hinnadFailist.slice());
    }

    const filtreeriPaarisArvud = () => {
      const vastus = hinnad.filter(hind => hind % 2 === 0);
      uuendaHinnad(vastus);
    }

    const hinnadKokku = () => {
      let summa = 0;
      // summa = summa + 312;
      // summa = summa + 1234;
      // summa = summa + 56;
      // summa = summa + 88;

      // summa += 312;
      // summa += 1234;
      // summa += 56;
      // summa += 88;
      
      hinnad.forEach(hind => summa = summa + hind);
      return summa;
    }

    // .map(hind => MILLEGA_ASENDATAKSE)
    // .sort((a,b) => PLUSS_VÕI_MIINUS) -> plussiga muudetakse järjekord
    // .filter(hind => ÕIGE_VÕI_VÄÄR) -> õigega jäetakse alles
    // .forEach(hind => summa = summa + hind) -> igaühe kohta tehakse midagi

    // onClick={() => sorteeriAZ()} --> ÕIGE.
    // onClick={sorteeriAZ} --> ÕIGE.
    // onClick={sorteeriAZ()} --> VALE. Jääb lõputu loop (tsükkel), sest sorteeriAZ funktsiooni sees
    //      on useState-i parempoolne funktsioon, mis läheb HTMLi uuendama. Ja kui seda tehakse,
    //      siis pannakse uuesti see funktsioon käima, mis läheb omakorda uuesti HTMLi uuendama

    // <div>Kokkuarvutus, mis tagastab numbri: {hinnadKokku()}</div> --> ÕIGE.
    // <div>Kokkuarvutus, mis tagastab numbri: {hinnadKokku}</div> --> VALE. Sest ei käivitu
    // <div>Kokkuarvutus, mis tagastab numbri: {() => hinnadKokku()}</div> --> VALE. Sest ei käivitu

    
    // Too many re-renders. React limits the number of renders to prevent an infinite loop.
    // render ---> tähendab useState-i parempoolse funktsiooni käivitamine ehk HTMLi uuendus
    // render ---> HTMLi uuendus

  return (
    <div>
      { hinnad.length > 0 &&
      <div>
        <button onClick={sorteeriAZ} >Sorteeri A-Z</button>
        <button onClick={sorteeriZA} >Sorteeri Z-A</button>

        <button onClick={sorteeriKasvavalt} >Sorteeri kasvavalt</button>
        <button onClick={sorteeriKahanevalt} >Sorteeri kahanevalt</button>
        <br /><br />
        <button onClick={filtreeriPaarisArvud}> Jäta alles paarisarvud</button>
        <br />
        <button onClick={lisaHind123}>Lisa hind 123 lõppu juurde</button>
        <br />
        <button onClick={kustutaEsimene}>Kustuta esimene</button>
        <button disabled={hinnad.length < 2} onClick={kustutaTeine}>Kustuta teine</button>
        <button disabled={hinnad.length < 3} onClick={kustutaKolmas}>Kustuta kolmas</button>
        {hinnad.length >=4 && <button onClick={kustutaNeljas}>Kustuta neljas</button>}


        <h4>Hindasid on: {hinnad.length} tk</h4>

        {hinnad.map((hind, jrknr) => 
        <div key={jrknr}> 
        {hind} 
        <Link to={"/hind/" +jrknr}>
          <button>Vaata lähemalt</button>
        </Link>
        </div>)}
        
        <button onClick={() => uuendaHinnad([])} >Eemalda hinnad</button>
      </div>}

      <div>Kogusumma on: {hinnadKokku()} </div>

        {hinnad.length === 0 && 
        <div>Pole ühtegi hinda nähtaval</div>}
    
    </div>
  )
}

export default Hinnad

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort

//const [months, setMonths] = useState(['March', 'Jan', 'Feb', 'Dec']);
//const months = ['March', 'Jan', 'Feb', 'Dec'];
//months.sort();
//console.log(months);
// setMonths(months.slice());

//Küsige ChatGPT käest useState ülesandeid
//Küsige ChatGPT käest Array selgitusi

// https://www.udacity.com/course/intro-to-javascript--ud803
// https://www.codecademy.com/learn/introduction-to-javascript