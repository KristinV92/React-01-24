import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';

function App() {
  return (
    <div>
      <Link to="/">
      <button>Avalehele</button>
      </Link>
      <Link to="/tagasiside">
      <button>Tagasisidede lehele</button>
      </Link>
      <Routes>
        <Route path="/" ecaxt element={<div>Tere</div>} />
        <Route path="/tagasiside" ecaxt element={ <Tagasiside />} />
      </Routes>
    </div>
  );
}

export default App;
