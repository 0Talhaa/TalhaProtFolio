import React from "react";
import './Navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/logo.png'
import {Link} from 'react-scroll';
const Navbar = () =>{
    return(
        <nav className="navbar">
        <img src="{logo}" alt="logo" className='logo'/>
        <div className="desktopmenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">ProtFolio</Link>
            <Link className="desktopMenuListItem">Clints</Link>
        </div>
        <button className="desktopMenuBtn">
          <img src="{contactImg}" alt=""  className="destopMenuImg" />
          Contact Me
        </button>
  </nav>
    )
}

export default Navbar