import { useState } from 'react'


// App.js sees teha URL ja faili seos (URL-ks pange sama mis faili nimi)
// URL-le sattumise võimekus läbi <Link>
// Array väljakuvamine (List, Massiiv) läbi useState (.map())
// ["Nobe", "BMW", "Tesla"]
// Lisage sorteerimine A-Z
// Pange ka koguarv .length abil (mitu tk mul lehel on)

function Tooted() {

    const [tooted, uuendaTooted] = useState(["Nobe", "BMW", "Tesla"]);
    
    const sorteeriAZ = () => {
        tooted.sort();
        uuendaTooted(tooted.slice());
    }
  return (
    <div>
        { tooted.length === 0 && <div> Tooteid on 0</div>}
        <button onClick={() => uuendaTooted(["Nobe", "BMW", "Tesla"])} >Jäta alles Nobe, BMW, Tesla</button>

        {tooted.length > 0 &&
          <div>
            <div>Tooteid on {tooted.length} (tk) </div>
            <button onClick={() => uuendaTooted([])} >Tühjenda</button>
        </div>}

        {tooted.map(toode => <div>{toode}</div>)}
        <button onClick={sorteeriAZ} >Sorteeri A-Z</button>

    </div>
  )
}

export default Tooted