import { Link } from 'react-router-dom';

function Navbar() {
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
    </div>
  )
}

export default Navbar