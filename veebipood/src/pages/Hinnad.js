import { useState } from 'react'

// App.js sees teha URL ja faili seos (URL-ks pange sama mis faili nimi)
// URL-le sattumise võimekus läbi <Link>
// Array väljakuvamine (List, Massiiv) läbi useState (.map())
// [ 312, 1234, 56, 88, 8, 234, 12]
// Lisage sorteerimine A-Z
// Pange ka koguarv .length abil (mitu tk mul lehel on)

// Tühjenda nupp, mis kustub kui on .length väärtus 0
// Kui pole ühtegi töötajat, siis kuva <div>Pole ühtegi hinda nähtaval</div>

function Hinnad() {
    const [hinnad, uuendaHinnad] = useState(["312", "1234", "56", "88", "8", "234", "12"]);
   
    const sorteeriAZ = () => {
        hinnad.sort();
        uuendaHinnad(hinnad.slice());
    }
  return (
    <div>
        {hinnad.map(hinnad => <div>{hinnad}</div>)}
        
        <button onClick={sorteeriAZ} >Sorteeri 1-1500</button>
         
        
        {hinnad.length < 0 && 
        <div>Pole ühtegi hinda nähtaval</div>}
        <div>Hindasid on: {hinnad.length} </div>
        <button onClick={() => uuendaHinnad([])} >Tühjenda</button>
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