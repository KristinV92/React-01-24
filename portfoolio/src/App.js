import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Work  from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses';


function App() {
  return (

    <div>
    <img className="home-page" src="abstract.jpg" alt="" />
    <div className="line" ></div>

    <div className="navigation-picture">
      <Link className="main-link" to="/work">
        <img src="/work.png" alt="" /> 
        <p>Tööde leht</p>
      </Link>
      <Link className="main-link" to="/hobbies">
    <img src="/hobby.jpg" alt="" /> 
    <p>Hobide leht</p>
    </Link>
    <Link className="main-link" to="/courses">
    <img src="/courses.jpg" alt="" /> 
    <p>Kursuste leht</p>
    </Link>
    </div>

    <Routes>
        <Route path="work" element={ <Work /> } />
        <Route path="hobbies" element={ <Hobbies />} />
        <Route path="courses" element={ <Courses />} />
      </Routes>

      <iframe 
      width="160" 
      height="250" 
      src="https://www.youtube.com/embed/5yXQJBU8A28?si=NYZKin7V_dJuTzZX" 
      title="YouTube video player" 
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <div className='facebook-button' href="https://www.facebook.com/">
          <img src="/facebook.png" alt="" />
          <span>Facebook</span>
      </div>
    </div>
  );
}

export default App;