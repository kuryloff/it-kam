import preloader from "../../../assets/images/preloader.gif";
import React from "react";
import classes from "../preloader/Preloader.module.css"

let Preloader = () => {
    return <div className={classes.container}>
        <img  src={preloader} alt={'preloader image'}/>
    </div>

};

export default Preloader
