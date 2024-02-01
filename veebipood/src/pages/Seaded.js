import React, { useState } from 'react'

// ee, en, ru
function Seaded() {
const [keel, muudaKeel] =useState("ee");


  return (
    <div>

        {keel === "ee" && <div>Leht on eesti keelne</div>}
        {keel === "ru" && <div>Cтpaницa на русском языке</div>}
        {keel === "en" && <div>The page is in Estonian</div>}

        <button onClick={() => muudaKeel("ee")}>Est</button>
        <button onClick={() => muudaKeel("en")}>Eng</button>
        <button onClick={() => muudaKeel("ru")}>Rus</button>
    </div>
  )
}

export default Seaded