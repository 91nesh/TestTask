import React,{useState} from 'react';
import { Link } from "react-router-dom";
import './style.scss';

export const Header = () => {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
        </div>
    );
}

export default Header;
