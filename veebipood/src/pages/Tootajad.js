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
    {tootajad.length > 0 &&
    <div>
        <button onClick={sorteeriAZ} >Sorteeri A-Z</button> 
        {tootajad.map(tootaja => <div>{tootaja}</div>)}
        <div><h4>Töötajaid on: {tootajad.length}</h4></div>
        <button onClick={ () => uuendaTootajad ([])} >Eemalda töötajad</button> 
    </div>}

    {tootajad.length === 0 &&  <div>Ühtegi töötajat pole nähtaval</div>}
       
    </div>
        
        
  )
}

export default Tootajad