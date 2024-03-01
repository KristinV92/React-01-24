import { useState } from 'react';
import tootedFailist from "../data/tooted.json"


// App.js sees teha URL ja faili seos (URL-ks pange sama mis faili nimi)
// URL-le sattumise võimekus läbi <Link>
// Array väljakuvamine (List, Massiiv) läbi useState (.map())
// ["Nobe", "BMW", "Tesla"]
// Lisage sorteerimine A-Z
// Pange ka koguarv .length abil (mitu tk mul lehel on)

function Tooted() {

    const [tooted, uuendaTooted] = useState(tootedFailist);
    
    const sorteeriAZ = () => {
        tooted.sort();
        uuendaTooted(tooted.slice());
    }

    const sorteeriZA = () => {
      tooted.sort((a,b) => b.localeCompare(a));
      uuendaTooted(tooted.slice());
    }

    const sorteeriTahedKasvavalt = () => {
      tooted.sort((a, b) => a.length - b.length);
      uuendaTooted(tooted.slice());
    }

    const sorteeriTahedKahanevalt = () => {
      tooted.sort((a, b) => b.length - a.length);
      uuendaTooted(tooted.slice());
    }
    
  return (
    <div>
      {tooted.length >0 &&
    <div>
        <button onClick={sorteeriAZ} >Sorteeri A-Z</button>
        <button onClick={sorteeriZA} >Sorteeri Z-A</button>
        <button onClick={sorteeriTahedKasvavalt} >Sorteeri tähed kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt} >Sorteeri tähed kahanevalt</button>
        {tooted.map(toode => <div>{toode}</div>)}
        <h4>Tooteid on {tooted.length} (tk)</h4>
        <button onClick={() => uuendaTooted ([])}>Eemalda tooted</button>
    </div>}
      {tooted.length === 0 && <div>Ühtegi toodet pole nähtavalt</div>}
    </div>
  )
}

export default Tooted