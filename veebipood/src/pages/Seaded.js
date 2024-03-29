import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
// ee, en, ru

function Seaded() { //kui localStorage-s sellist võtit ei ole, tuleb väärtuseks "null"
const [keel, muudaKeel] =useState(localStorage.getItem("keel") || "ee");
const emailRef = useRef();
const aadressRef = useRef();
const telefonRef = useRef();
const [email, muudaEmail] = useState("Emaili pole sisestatud");
const [aadress, muudaAadress] = useState("Aadressi pole sisestatud");
const [telefon, muudaTelefon] = useState("Telefoni pole sisestatud");


const sisestaEmail = () => {
  //logime välja brauseri konsooli
  //vead:
  // 1)"npm start" --> terminalis on viga (kompileerimise viga - koodi kokkupakkimine)
  //         leht on üleni musta taustaga ja kirjutatakse meile mingi viga välja
  // 2) parem klõps -> inspect -> console ---> console-s lahti kirjutatud viga (run-time error - brauseris viga)
  //         leht on üleni valge, terminalis (npm start) on roheline
  // 3) muutuja sees vale väärtus, valesti olen midagi kokku pannud
  // console.log("email fnkts käivitatud: " + emailRef.current.value);
  if (emailRef.current.value.includes("@") === false) {
    // alert("E-mail pole korrektne");
    toast.error("E-mail pole korrektne!");
  } else {
    muudaEmail(emailRef.current.value);
    toast.success("Email uuendatud!");
    emailRef.current.value = "";
  }
}

const sisestaAadress = () => {
  // if (aadressRef.current.value === 0) {
  if (aadressRef.current.value === "") {
    toast.error("Aadress peab olema sisestatud!");
    return; //funktsiooni lõpetaja
  } 

  //Tammsaare tee -> tammsaare tee  === Tammsaare tee
  if (aadressRef.current.value.toLowerCase() === aadressRef.current.value) {
    toast.error("Tänavanimi peab olema suure tähega!");
    return; //funktsiooni lõpetaja
  } 

  if (aadressRef.current.value.length < 4) {
    toast.error("Aadress pole korrektne");
    return; //funktsiooni lõpetaja
  } 

  muudaAadress(aadressRef.current.value);
  toast.success("Aadress uuendatud!");
  aadressRef.current.value = "";
  
}

const sisestaTelefon = () => {
  if (telefonRef.current.value.startsWith("+372") === false) {
    toast.error("Telefon pole korrektne");
  } else {
    muudaTelefon(telefonRef.current.value);
    toast.success("Telefon uuendatud!");
    telefonRef.current.value = "";
  }
}

const uuendaKeelEE = () => {
  muudaKeel("ee");
  localStorage.setItem("keel", "ee");
}

const uuendaKeelEN = () => {
  muudaKeel("en");
  localStorage.setItem("keel", "en");
}

const uuendaKeelRU = () => {
  muudaKeel("ru");
  localStorage.setItem("keel", "ru");
}

  return (
    <div>
        {keel === "ee" && <div>Leht on eesti keelne</div>}
        {keel === "ru" && <div>Cтpaницa на русском языке</div>}
        {keel === "en" && <div>The page is in Estonian</div>}

        <button onClick={uuendaKeelEE}>Est</button>
        <button onClick={uuendaKeelEN}>Eng</button>
        <button onClick={uuendaKeelRU}>Rus</button>

        <br /><br />

        <label>Email</label> <br />
        <input type="text" ref={emailRef} /> <br />
        <button onClick={sisestaEmail}>Sisesta</button> <br />

        <label>Aadress</label> <br />
        <input type="text" ref={aadressRef} /> <br />
        <button onClick={sisestaAadress}>Sisesta</button> <br />

        <label>Telefon</label> <br />
        <input type="text" ref={telefonRef} /> <br />
        <button onClick={sisestaTelefon}>Sisesta</button> <br />
        <br />
        <div>Sisestatud email: {email}</div>
        <div>Sisestatud aadress: {aadress}</div>
        <div>Sisestatud telefon: {telefon}</div>

        <br /><br />

        <ToastContainer 
        position="bottom-right"
        autoClose={4000}
        theme="dark"
        />
    </div>
  )
}

export default Seaded