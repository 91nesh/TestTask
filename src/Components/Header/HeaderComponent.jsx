import React from 'react';
import { NavLink } from "react-router-dom";
import './style.scss';

export const Header = () => {
    return (
        <div className="top-header">
            <div className="logo">
                <span>Article</span>
            </div>
            <div className="main-menu">
                <NavLink  to="/">Home</NavLink>
                <NavLink  to="/friends">Friends</NavLink>
            </div>
        </div>
    );
}

export default Header;
