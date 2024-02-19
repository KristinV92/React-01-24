import { useState } from 'react'

// App.js sees teha URL ja faili seos (URL-ks pange sama mis faili nimi)
// URL-le sattumise võimekus läbi <Link>
// Array väljakuvamine (List, Massiiv) läbi useState (.map())
// ["Urmet", "Kaido", "Liina", "Maiki"]
// Lisage sorteerimine A-Z
// Pange ka koguarv .length abil (mitu tk mul lehel on)

// Tühjenda nupp, mis kustub kui on .length väärtus 0
// Kui pole ühtegi töötajat, siis kuva <div>Pole ühtegi töötajad nähtavad</div>

function Tootajad() {

    const [tootajad, uuendaTootajad] = useState(["Urmet", "Kaido", "Liina", "Maiki"]);
    
    const sorteeriAZ = () => {
        tootajad.sort();
        uuendaTootajad(tootajad.slice());
    }
  return (
    <div>
        {tootajad.map(tootaja => <div>{tootaja}</div>)}
        <button onClick={sorteeriAZ} >Sorteeri A-Z</button>
       
        {tootajad.length < 0 &&  
        <div>Pole ühtegi töötajat nähtaval</div>}
        <div>Töötajaid on: {tootajad.length} </div>
    </div>
  )
}

export default Tootajad