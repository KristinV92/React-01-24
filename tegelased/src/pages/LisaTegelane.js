import { useRef, useState } from "react";

function LisaTegelane() {
    const [sonum, uuendaSonum] = useState ("");
    const eesnimiRef = useRef();
    const perekonnanimiRef = useRef();
    const elukohtRef = useRef();
    const vanusRef = useRef();

    const lisaUusTegelane = () => {
        if (eesnimiRef.current.value === "") {
            uuendaSonum("Tühja nimega ei saa sisestada");
        } else {
            uuendaSonum("Tegelane lisatud" + eesnimiRef.current.value);
            const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
            tegelased.push({
              "eesnimi": eesnimiRef.current.value, 
              "perenimi":perekonnanimiRef.current.value, 
              "elukoht": elukohtRef.current.value, 
              "vanus": Number(vanusRef.current.value )
            })
            localStorage.setItem("tegelased", JSON.stringify(tegelased))
          }  
          console.log(eesnimiRef.current.value)
          console.log(perekonnanimiRef.current.value)
          console.log(elukohtRef.current.value)
          console.log(vanusRef.current.value) 
      }

  return ( 
  <div>
    <div>{sonum} </div>
    <div>Lisa uus tegelane</div>
        <label>Tegelase eesnimi:</label> <br />
        <input ref={eesnimiRef} type="text" /> <br />
        <label>Tegelase perkonnanimi:</label> <br />
        <input ref={perekonnanimiRef} type="text" /> <br />
        <label>Tegelase elukoht:</label> <br />
        <input ref={elukohtRef} type="text" /><br />
        <label>Tegelase vanus:</label> <br />
        <input ref={vanusRef} type="number" /> <br />
      <button onClick={lisaUusTegelane}>Sisesta</button>
    </div> );
}

export default LisaTegelane;