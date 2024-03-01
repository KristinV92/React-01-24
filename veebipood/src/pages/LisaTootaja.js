import { useRef } from 'react';
import tootajadFailist from "../data/tootajad.json";
import {ToastContainer, toast } from 'react-toastify';

function LisaTootaja() {
    const nimiRef = useRef();

    const lisa = () =>{
      if (nimiRef.current.value  === "") {
      toast.error("Nimi peab olema sisestatud!");
      return; 
      }

      if (nimiRef.current.value.toLowerCase() === nimiRef.current.value) {
      toast.error("Nimi peab olema suure tähega!");
      return; 
      } 

      if (nimiRef.current.value.length < 3) {
      toast.error("Nimi peab olema vähemalt 3 tähemärki");
      return; 
      } 

      tootajadFailist.push(nimiRef.current.value);
      toast.success("Nimi lisatud");
      nimiRef.current.value = "";
    }


  return (
    <div>
        <label>Uue töötaja nimi</label><br />
        <input ref={nimiRef}type="text" /><br />
        <button onClick={lisa}>Lisa</button><br />

        <ToastContainer 
            position="bottom-right"
            autoClose={4000}
            theme="dark"
        />
    </div>
  )
}

export default LisaTootaja