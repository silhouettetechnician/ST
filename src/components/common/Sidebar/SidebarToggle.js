import React from 'react'
import classes from './SidebarToggle.css'

const SidebarToggle = ( props ) => {
    return ( 
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
     )
}
 
export default SidebarToggle;