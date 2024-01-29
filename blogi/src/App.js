import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

<Routes>
<Route path="" element={
<div className="header">
  <div className="headerTitles">
    <span className="headerTitleLr">Blogi</span>
</div>
<img className="headerImg"
src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg" alt="" />
</div>
} />
<Route path="lisa-postitus" element={ <img src="" alt="" />} />
<Route path="contact" element={<div>Saada sõnum</div>} />
<Route path="login" element={<div>LOGI SISSE</div>} />
<Route path="register" element={<div>Registreeri</div>} />
</Routes>
    </div>
  );
}

export default App;
