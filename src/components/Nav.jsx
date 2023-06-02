import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegTimesCircle, FaGripLines } from 'react-icons/fa';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
      setIsOpen(!isOpen);
    };
    return (
      <>
      <div className="mobile-nav" onClick={toggleNav}>
        {isOpen ? <FaRegTimesCircle /> : <FaGripLines />}
      </div>
      <nav className={`nav ${isOpen ? 'active' : ''}`} onClick={toggleNav}>
        <Link to="/" className="nav-item">HOME</Link>
        <Link to="#" className="nav-item">ABOUT</Link>
        <Link to="#" className="nav-item">MENU</Link>
        <Link to="/booking" className="nav-item">RESERVATIONS</Link>
        <Link to="#" className="nav-item">ORDER ONLINE</Link>
        <Link to="#" className="nav-item">LOGIN</Link>
      </nav>
      </>
    )
  }

  export default Nav