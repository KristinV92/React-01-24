import { useState } from 'react';

function Numbrid() {
    const [numbrid, uuendaNumbrid] = useState([4, 23, 7, 39, 19, 0, 9, 14, 135, 31, 40])

    const originaal = () => {
        uuendaNumbrid ([4, 23, 7, 39, 19, 0, 9, 14, 135, 31, 40])
    }


    const sorteeriKasvavalt = () => {
        numbrid.sort((a, b) => a - b);
        uuendaNumbrid(numbrid.slice());
    }

    const sorteeriKahanevalt = () => {
        numbrid.sort((a, b) => b - a);
        uuendaNumbrid(numbrid.slice());
    }

    const sorteeriAZ =() => {
       numbrid.sort((a,b) => a.toString().localeCompare(b.toString())); 
       uuendaNumbrid(numbrid.slice());
    }

    const sorteeriZA =() => {
       numbrid.sort((a,b) => b.toString().localeCompare(a.toString())); 
       uuendaNumbrid(numbrid.slice());
    }

    const filtreeriSuuremadKui8 =() => {
        const vastus = numbrid.filter(suurem => suurem > 8);
        uuendaNumbrid(vastus);
    }

    const filtreeriVaiksemadKui10 =() => {
        const vastus = numbrid.filter(vaiksem => vaiksem < 10);
        uuendaNumbrid(vastus);
    }

    const filtreeriPaarisArvud = () => {
        const vastus = numbrid.filter(e => e % 2 === 0);
        uuendaNumbrid(vastus);
    }

    const filtreeriPaaritudArvud = () => {
        const vastus = numbrid.filter(p => p % 2 !== 0);
        uuendaNumbrid(vastus);
    }
  
    const filtreeriAlgavad1 = () => {
        const vastus = numbrid.filter(y => {
        const numStr = y.toString();
        return numStr.startsWith('1');
        });
        uuendaNumbrid(vastus);
    }

    const filtreeriSisaldavad3 = () => {
            const vastus = numbrid.filter(s => {
            const numStr = s.toString();
            return numStr.includes('3');
            });
            uuendaNumbrid(vastus);
    }


  return (
    <div>
        <br /><br />
        <button onClick={sorteeriKasvavalt}>Sorteeri Kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri Kahanevalt</button>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <br /><br />

        <button onClick={originaal}>Tagasi originaali</button>
        <br /><br />

        <button onClick={filtreeriSuuremadKui8}>Filtreeri suuremad kui 8</button>
        <button onClick={filtreeriVaiksemadKui10}>Filtreeri väiksemad kui 10</button>
        <button onClick={filtreeriPaarisArvud}>Filtreeri paarisarvud</button>
        <button onClick={filtreeriPaaritudArvud}>Filtreeri paaritud arvud</button>
        <button onClick={filtreeriAlgavad1}>Filtreeri numbrid mis algavad 1'ga</button>
        <button onClick={filtreeriSisaldavad3}>Filtreeri numbrid mis sisaldavad 3'e</button>

        {numbrid.map(d => <div>{d}</div>)}
    </div>
  )
}

export default Numbrid