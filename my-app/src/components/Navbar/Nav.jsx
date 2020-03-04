import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Sitebar from "../Sitebar/Sitebar";

const Navbar = (props) => {
    return (
            <nav className={classes.nav}>
                <div className={classes.optionLink}><NavLink to={'/profile'} activeClassName={classes.activeLink}
                              className={classes.item}>Profile</NavLink></div>
                <div className={classes.optionLink}><NavLink to={'/dialogs'} activeClassName={classes.activeLink}
                              className={classes.item}>Messages</NavLink></div>
                <div className={classes.optionLink}><NavLink to={'/news'} activeClassName={classes.activeLink} className={classes.item}>News</NavLink>
                </div>
                <div className={classes.optionLink}><NavLink to={'/music'} activeClassName={classes.activeLink}
                              className={classes.item}>Music</NavLink></div>
                <div className={classes.optionLink}><NavLink to={'/settings'} activeClassName={classes.activeLink}
                              className={classes.item}>Settings</NavLink></div>
                <Sitebar friends={props.data}/>
            </nav>




    );
};

export default Navbar;