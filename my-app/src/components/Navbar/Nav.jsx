import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = ()=>{
    return(

        <nav className={classes.nav}>
            <div><NavLink to={'/profile'} activeClassName={classes.activeLink} className={classes.item}>Profile</NavLink></div>
            <div><NavLink to={'/dialogs'} activeClassName={classes.activeLink} className={classes.item}>Messages</NavLink></div>
            <div><NavLink to={'/news'} activeClassName={classes.activeLink} className={classes.item}>News</NavLink></div>
            <div><NavLink to={'/music'} activeClassName={classes.activeLink} className={classes.item}>Music</NavLink></div>
            <div><NavLink to={'/settings'} activeClassName={classes.activeLink} className={classes.item}>Settings</NavLink></div>
        </nav>

    );
};

export default Navbar;