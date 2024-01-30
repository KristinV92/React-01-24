//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Esindused from './pages/Esindused';
import Ariklient from './pages/Ariklient';
import Kinkekaart from './pages/Kinkekaart';


function App() {
  return (
    <div className="App">
      <div className="nav"> 
        <Link to="avaleht"> 
        <img className="pilt" src=" /logo.png" alt="Nobe elektriauto" />
      </Link>
      <div>
      <Link  className="navlink" to="esindused">
        <img src="/esindus.svg" alt="" />
        <span>Esindused</span>
      </Link>
      <Link className="navlink" to="arikliendile">
      <img src="/ari.svg" alt="" />
        <span>Ärikliendile</span>
      </Link>
      <Link className="navlink" to="osta-kinkekaart">
      <img src="/kinkekaart.svg" alt="" />
        <span>Kinkekaart</span>
      </Link>
      </div>
      <div>s</div>
     </div>
    

    <Routes>
      <Route path="avaleht" element={ <Avaleht />} />
      <Route path="esindused" element={ <Esindused />} />
      <Route path="arikliendile" element={ <Ariklient />} />
      <Route path="osta-kinkekaart" element={ <Kinkekaart />} />
    </Routes>
    </div>
  );
}

export default App;
