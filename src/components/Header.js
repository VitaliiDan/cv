import React from "react";
import PLIco from '../img/lang/icon_PL.png';
import ENIco from '../img/lang/icon_EN.png';
import UAIco from '../img/lang/icon_UA.png';
import RUIco from '../img/lang/icon_RU.png';

import {NavLink} from "react-router-dom";

export const Header = () => {
    const style = {
        border: 'none'
    }
    const activeStyle = {
        border: '1px solid white'
    }
    return (
        <nav className='headerWrapper'>
            <NavLink
                exact to='/lang/pl'
                style={style}
                activeStyle={activeStyle}
            > <img src={PLIco} alt=""/> </NavLink>
            <NavLink
                to='/lang/en'
                style={style}
                activeStyle={activeStyle}
            > <img src={ENIco} alt=""/> </NavLink>
            <NavLink
                to='/lang/ua'
                style={style}
                activeStyle={activeStyle}
            > <img src={UAIco} alt=""/> </NavLink>
            <NavLink
                to='/lang/ru'
                style={style}
                activeStyle={activeStyle}
            > <img src={RUIco} alt=""/> </NavLink>
        </nav>
    )
}