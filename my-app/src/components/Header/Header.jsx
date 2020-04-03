import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props)=>{
    return (
        <header className={classes.header}>
            <img src="https://cdn.iconfinder.com/static/img/favicons/favicon-194x194.png?bf2736d2f8" alt=""/>
        <div className={classes.loginBlock}>
            {props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
        </header>
    );
};

export default Header;