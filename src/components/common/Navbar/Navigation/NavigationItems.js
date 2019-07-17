import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem'
import Login from '../../../auth/Login/login'


const NavigationItems = ( props ) => {
    return ( 
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' active>HOME</NavigationItem>
            <NavigationItem link='/products'>SHOP</NavigationItem>
            <NavigationItem onClick={() => props.openModal()} link='/login' active >LOGIN</NavigationItem>
        </ul>
     );
}
 
export default NavigationItems