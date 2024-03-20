import React, { useState } from 'react'

function Ostukorv() {
    const [ostukorv, uuendaOstukorv] = useState(JSON.parse(localStorage.getItem("cartLaptops")) || []);

    const kustuta = (index) => {
        ostukorv.splice(index,1);
        uuendaOstukorv(ostukorv.slice());
        localStorage.setItem("cartLaptops", JSON.stringify(ostukorv));
    }


  return (
    <div>
        {ostukorv.map((ostukorviEse, index) =>
        <div key={index}>
           <div>Mark: {ostukorviEse.mark}</div>
           <div>Mudel: {ostukorviEse.mudel}</div>
           <div>Maksumus: {ostukorviEse.maksumus}</div>
            <button onClick={() => kustuta(index)}>x</button>
        </div>)}
    </div>);
}

export default Ostukorv