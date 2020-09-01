import React,{useState} from 'react';
import { Link } from "react-router-dom";
import './style.scss';

export const Header = () => {
    return (
        <div className="top-header">
            <div className="logo">
                <span>Article</span>
            </div>
            <div className="main-menu">
                <Link  to="/">Home</Link>
                <Link  to="/friends">Friends</Link>
            </div>
        </div>
    );
}

export default Header;
