import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import YksikTagasisideAndja from './pages/YksikTagasisideAndja';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avaleht</button>
      </Link>

      <Link to="/tagasiside">
      <button>Tagasiside</button>
      </Link>

      <Link to="/TagasisideAndjad">
      <button>Tagasiside andjad</button>
      </Link>

      <Routes>
        <Route path="/" exact element={ <Avaleht />} />
        <Route path="/tagasiside" exact element={ <Tagasiside />} />
        <Route path="/TagasisideAndjad" exact element={ <TagasisideAndjad />} />
        <Route path="/yks-andja/:index" exact element={ <YksikTagasisideAndja/>} />
      </Routes>
    </div>
  );
}

export default App;
