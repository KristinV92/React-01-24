import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import YksikTagasisideAndja from './pages/YksikTagasisideAndja';
import Tegevused from './pages/Tegevused';
import Kasutajad from './pages/Kasutajad';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avaleht</button>
      </Link>

      <Link to="/tagasiside">
      <button>Tagasiside</button>
      </Link>

      <Link to="/tagasisideAndjad">
      <button>Tagasiside andjad</button>
      </Link>

      <Link to="/tegevused">
      <button>Tegevused</button>
      </Link>

      <Link to="/kasutajad">
      <button>Vaata kasutajaid</button>
      </Link>

      <Routes>
        <Route path="/" exact element={ <Avaleht />} />
        <Route path="/tagasiside" exact element={ <Tagasiside />} />
        <Route path="/tagasisideAndjad" exact element={ <TagasisideAndjad />} />
        <Route path="/yks-andja/:index" exact element={ <YksikTagasisideAndja/>} />
        <Route path="/tegevused" element={ <Tegevused /> }/>
        <Route path="/kasutajad" element={ <Kasutajad /> }/>
      </Routes>
    </div>
  );
}

export default App;
