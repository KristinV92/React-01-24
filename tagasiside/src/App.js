import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Tagasiside from './pages/Tagasiside';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avaleht</button>
      </Link>

      <Link to="/tagasiside">
      <button>Tagasiside</button>
      </Link>
      <Routes>
        <Route path="/" exact element={ <Avaleht />} />
        <Route path="/tagasiside" exact element={ <Tagasiside />} />
      </Routes>
    </div>
  );
}

export default App;
