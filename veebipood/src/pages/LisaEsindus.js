import esindusedFailist from "../data/esindused.json";
import { useRef } from 'react';
import {ToastContainer, toast } from 'react-toastify';


function LisaEsindus() {
    const nimiRef = useRef(); 

    const lisa = () => {
        if (nimiRef.current.value  === "") {
        toast.error("Esindus peab olema sisestatud!");
        return; 
        }

        if (nimiRef.current.value.toLowerCase() === nimiRef.current.value) {
        toast.error("Esindus peab algama suure tähega!");
        return; 
        } 

        if (nimiRef.current.value.length < 3) {
        toast.error("Esindus peab olema vähemalt 3 tähemärki");
        return; 
        } 

        esindusedFailist.push(nimiRef.current.value);
        toast.success("Esindus lisatud");
        nimiRef.current.value = "";
    }

  return (
    <div>
        <label>Uue esinduse nimi</label><br />
        <input ref={nimiRef} type="text" />
        <button onClick={lisa}>Lisa</button>

        <ToastContainer 
            position="bottom-right"
            autoClose={4000}
            theme="dark"
        />
    </div>
  )
}

export default LisaEsindus