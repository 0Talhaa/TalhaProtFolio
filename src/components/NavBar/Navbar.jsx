// import React, { useState } from "react";
// import './Navbar.css';
// import logo from '../../assets/Logo2.png';
// import contactImg from '../../assets/logo.png'
// // import newimg from '../../assets/Logo2.png'
// import {Link} from 'react-scroll';
// // const Navbar = () =>{
// //   const [showMenu, SetShowMenu] = useState(false)
//     return(
//         <nav className="navbar">
//         <img src={logo} alt="logo" className='logo'/>
//         <div className="desktopmenu">
//             <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
//             <Link activeClass="active" to="skills"  spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
//             <Link activeClass="active" to="works"  spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">ProtFolio</Link>
//             <Link activeClass="active" to="clints"  spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clints</Link>
//         </div>
//         {/* <button className="desktopMenuBtn" onClick={() =>{
//           document.getElementById('contact').scrollIntoView({behavior: 'smooth'}); */}
//         {/* }}> */}
//           {/* <img src={contactImg} alt=""  className="destopMenuImg" />
//           Contact Me
//         </button> */}

//         {/* <img src={newimg} alt="Menu" className='Mobmenu' onClick={()=>SetShowMenu(!showMenu)}/>
//         <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
//             <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>SetShowMenu(false)}>Home</Link>
//             <Link activeClass="active" to="skills"  spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>SetShowMenu(false)}>About</Link>
//             <Link activeClass="active" to="works"  spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>SetShowMenu(false)}>ProtFolio</Link>
//             <Link activeClass="active" to="clints"  spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>SetShowMenu(false)}>Clints</Link>
//             <Link activeClass="active" to=""  spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>SetShowMenu(false)}>Contact</Link>
//         </div> */}
//   </nav>
//     )
// // }

// export default Navbar


import React, { useState } from "react";
import './Navbar.css';
import logo from '../../assets/Logo4.png';
import contactImg from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    // const [showMenu, SetShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo' />
            <div className="desktopmenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass="active" to="clints" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
                <Link activeClass="active" to="ContactUs" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Contact Us</Link>
            </div>
        </nav>
    );
};

export default Navbar;
