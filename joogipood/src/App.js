import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaJook from './pages/LisaJook';
import HaldaJooke from './pages/HaldaJooke';
import Jook from './pages/Jook';


function App() {
  return (
    <div>
      <Link to="/">
        <button>Avaleht</button>
      </Link>

      <Link to="/lisa-jook">
        <button>Lisa jook</button>
      </Link>

      <Link to="/halda-jooke">
        <button>Halda jooke</button>
      </Link>


      <Routes>
        <Route path= "/" element={ <Avaleht />} />
        <Route path= "lisa-jook" element={ <LisaJook />} />
        <Route path= "halda-jooke" element={ <HaldaJooke />} />
        <Route path= "jook/:number" element={ <Jook />} />
      </Routes>


    </div>
  );
}

export default App;
