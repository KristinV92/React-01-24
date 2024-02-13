import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import { useState } from 'react';
import { useRef } from 'react';
import Leht from './pages/Leht';
import Loader from './pages/Loader';

function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
    if (paroolRef.current.value.length <8) {
      toast.error("Liiga lühike");
      return;
    } 
    if (paroolRef.current.value.toLowerCase() === paroolRef.current.value) {
      toast.error("Peab sisaldama suurt tähte");
      return;
    } 
    if (paroolRef.current.value.toUpperCase() === paroolRef.current.value) {
      toast.error("Peab sisaldama väikest tähte");
      return;
    } 
    if (paroolRef.current.value.includes("%") === false) {
      toast.error("Peab sisaldama protsenti");
      return;
    } 
    if (paroolRef.current.value === "123"){
    muudaSisselogitud("jah");
    muudaSonum(kasutajaNimiRef.current.value + ", oled sisselogitud");
    toast.success("Oled sisselogitud!");
    return;
  } 
    muudaSonum("Vale parool");
    toast.error("Ei ole sisselogitud, vale parool");
   return;
  }
  
  const logiValja = () => {
    muudaSisselogitud("ei");
    muudaSonum("");
  }

  return (
    <div className="App">
      <div>{sonum}</div>
      { sisselogitud === "ei" && <div>
        <label>Kasutajanimi</label> <br />
        <input ref={kasutajaNimiRef} type="text" /><br />
        <label>Parool</label> <br />
        <input ref={paroolRef} type="password" /><br />
      </div>}

      { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
      { sisselogitud === "jah" && <button onClick={logiValja}>Logi välja</button>}
 
      <Link to="/">
          <button>Avaleht</button>
      </Link>
      <Link to="/kontakt">
          <button>Kontakt</button>
      </Link>
      <Link to="/meist">
          <button>Meist</button>
      </Link>
      <Link to="/seaded">
          <button>Seadetesse</button>
      </Link>
      <Link to="leht">
        <button>Leht</button>
      </Link>
      <Link to="loader">
        <button>Loader</button>
      </Link>

      <Routes>
        <Route path='' element={ <Avaleht />} />
        <Route path='kontakt' element={ <Kontakt /> } />
        <Route path='meist' element={ <Meist /> } />
        <Route path='seaded' element={ <Seaded /> } />
        <Route path='leht' element= { <Leht /> } />
        <Route path='loader' element= { <Loader /> } />
      </Routes>

      <ToastContainer />
    </div>
  
  );
}

export default App;
