import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem'


const NavigationItems = () => {
    return ( 
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' active>HOME</NavigationItem>
            <NavigationItem link='/products'>SHOP</NavigationItem>
            <NavigationItem link='/login'>LOGIN</NavigationItem>
        </ul>
     );
}
 
export default NavigationItems