//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Esindused from './pages/Esindused';
import Ariklient from './pages/Ariklient';
import Kinkekaart from './pages/Kinkekaart';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import NotFound from './pages/NotFound';
import { useState } from 'react';
import Hinnad from './pages/Hinnad';
import Tootajad from './pages/Tootajad';
import Tooted from './pages/Tooted';
import HaldaTooted from './pages/HaldaTooted';
import LisaHind from './pages/LisaHind';
import LisaTootaja from './pages/LisaTootaja';
import LisaEsindus from './pages/LisaEsindus';
import HaldaTootajad from './pages/HaldaTootajad';
import HaldaEsindusi from './pages/HaldaEsindusi';
import HaldaHindu from './pages/HaldaHindu';
import YksToode from './pages/YksToode';
import YksTootaja from './pages/YksTootaja';
import YksEsindus from './pages/YksEsindus';
import YksHind from './pages/YksHind';
import MuudaEsindus from './pages/MuudaEsindus';
import MuudaTootaja from './pages/MuudaTootaja';
import MuudaHind from './pages/MuudaHind';
import MuudaToode from './pages/MuudaToode';

function App() {
  const [tume, uuendaTume] = useState(localStorage.getItem("onTume") === "jah");

  const tumedaks = () => {
    uuendaTume(true);
    localStorage.setItem("onTume", "jah");
    // console.log()  logi konsooli
    // localStorage.setItem  pane lokaalmällu
  }

  const heledaks = () => {
    uuendaTume(false);
    localStorage.setItem("onTume", "ei");
  }

  return (
    <div className={tume === true ? "App-dark" : "App"}>
      <div className="nav"> 
        <Link to="/avaleht"> 
          <img className="pilt" src=" /logo.png" alt="Nobe elektriauto" />
        </Link>
        <div>
        <Link  className="navlink" to="/esindused">
          <img src="/esindus.svg" alt="" />
          <span>Esindused</span>
        </Link>
        <Link className="navlink" to="/arikliendile">
        <img src="/ari.svg" alt="" />
          <span>Ärikliendile</span>
        </Link>
        <Link className="navlink" to="/osta-kinkekaart">
        <img src="/kinkekaart.svg" alt="" />
          <span>Kinkekaart</span>
        </Link>
        <Link className="navlink" to="/lisa-toode">
          <span>Lisa toode</span>
        </Link>
        <Link className="navlink" to="/ostukorv">
        <img src="/shopping.svg" alt="" />
          <span>Ostukorv</span>
        </Link>
        <Link className="navlink" to="/seaded">
          <span>Seaded</span>
        </Link>
        <Link className="navlink" to="/hinnad">
          <span>Hinnad</span>
        </Link>
        <Link className="navlink" to="/tooted">
          <span>Tooted</span>
        </Link>
        <Link className="navlink" to="/tootajad">
          <span>Töötajad</span>
        </Link>
        <Link className="navlink" to="/halda">
          <span>Halda tooteid</span>
        </Link>
        <Link className="navlink" to="/lisa-hind">
          <span>Lisa hind</span>
        </Link>
        <Link className="navlink" to="/lisa-tootaja">
          <span>Lisa töötaja</span>
        </Link>
        <Link className="navlink" to="/lisa-esindus">
          <span>Lisa esindus</span>
        </Link>
        <Link className="navlink" to="/halda-tootajad">
          <span>Halda töötajaid</span>
        </Link>
        <Link className="navlink" to="/halda-esindused">
          <span>Halda esindusi</span>
        </Link>
        <Link className="navlink" to="/halda-hindu">
          <span>Halda hindu</span>
        </Link>
        
        </div>
        <div>
          <button onClick={tumedaks}>Tume</button>
          <button onClick={heledaks}>Hele</button>
        </div>
      </div>
    

      <Routes>
        <Route path="avaleht" element={ <Avaleht />} />
        <Route path="esindused" element={ <Esindused />} />
        <Route path="arikliendile" element={ <Ariklient />} />
        <Route path="osta-kinkekaart" element={ <Kinkekaart />} />
        <Route path="lisa-toode" element={ <LisaToode />} />
        <Route path="ostukorv" element={ <Ostukorv />} />
        <Route path="seaded" element={ <Seaded />} />
        <Route path="hinnad" element={ <Hinnad />} />
        <Route path="tootajad" element={ <Tootajad />} />
        <Route path="tooted" element={ <Tooted />} />
        <Route path="halda" element={ <HaldaTooted />} />
        <Route path="lisa-hind" element={ <LisaHind />} />
        <Route path="lisa-tootaja" element={ <LisaTootaja />} />
        <Route path="lisa-esindus" element={ <LisaEsindus />} />
        <Route path="halda-tootajad" element={ <HaldaTootajad />} />
        <Route path="halda-esindused" element={ <HaldaEsindusi />} />
        <Route path="halda-hindu" element={ <HaldaHindu/>} />
        <Route path="toode/:index" element={ <YksToode/>} />
        <Route path="esindus/:index" element={ <YksEsindus/>} />
        <Route path="tootaja/:index" element={ <YksTootaja/>} />
        <Route path="hind/:index" element={ <YksHind/>} />
        <Route path="muuda-esindus/:index" element={ <MuudaEsindus/>} />
        <Route path="muuda-tootaja/:index" element={ <MuudaTootaja/>} />
        <Route path="muuda-hind/:index" element={ <MuudaHind/>} />
        <Route path="muuda-toode/:index" element={ <MuudaToode/>} />
        <Route path="*" element={ <NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
