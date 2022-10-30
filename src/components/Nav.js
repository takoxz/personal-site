import React, {useState, useRef } from 'react'
import { navLinks } from "../config"
import {Link, animateScroll as scroll } from "react-scroll"
import { ReactComponent as Logosvg } from '../assets/moonLogo-cropped2.svg';
import "../styles/nav.scss";
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import ClickAwayListener from '@mui/material/ClickAwayListener';


const MenuBar = styled(MenuIcon)`
    display: none;
    cursor: pointer;

    @media screen and (max-width: 600px){
        display: block;
        cursor: pointer;
        top: 0;
        right: 0;
    }
    
`

const Nav =() => {
    const [state,setState] = useState("close");

    const handleClickAway = () => {
        setState("close")
      };

    return (
    <ClickAwayListener onClickAway={handleClickAway}>
    <div className="navbar">
        <div className="navbar__left">
            <div className='logowrapper' onClick={scroll.scrollToTop}>
            <Logosvg className='navbar__logo'/>
            </div>
        </div>
        <div className="navbar__right">
            <ul className='navbar__ul'>
                {navLinks.map(({ url, name }, i) => (
                    <li key={i} className="navbar__li">
                    <Link to={url}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>{name}</Link>
                    </li>
                ))}
            </ul>
        
        <MenuBar onClick={() => setState("open")}/>
        <div className={`side-drawer ${state}`}>
        <ul className="side-drawer__ul">
        {navLinks.map(({ url, name }, i) => (
                        <li className="side-drawer__li" key={i}>
                        <Link to={url}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>{name}</Link>
                        </li>
                    ))}
        </ul>
        </div>
        
    </div>
    </div>
    </ClickAwayListener>
    
  )
}

export default Nav