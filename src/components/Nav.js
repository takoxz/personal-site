import React from 'react'
import { navLinks } from "../config"
import {Link} from "react-scroll"
import { ReactComponent as Logosvg } from '../assets/moonLogo-cropped.svg';
import "../styles/nav.scss";

const Nav =() => {
  return (
    <div className="navbar">
        <div className="navbar__left">
            <Logosvg className='navbar__logo'/>
        </div>
        <div className="navbar__right">
        {/* <div className="navbar__item"> */}
            <ul>
                {navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                    <Link to={url}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>{name}</Link>
                    </li>
                ))}
            </ul>
        {/* </div> */}
        </div>
        
    </div>
  )
}

export default Nav