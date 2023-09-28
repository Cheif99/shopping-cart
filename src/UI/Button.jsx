import classes from  './Button.module.css'
import React from 'react'

const Button = (props) => {
    return ( 
        <div
        className={classes.button}
        onClick={props.onClick}>{props.children}</div>
     );
}
 
export default Button;