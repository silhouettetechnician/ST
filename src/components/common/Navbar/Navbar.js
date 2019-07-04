import React from 'react'
import Logo from '../Logo/Logo'
import classes from './Navbar.css'
import SidedrawToggle from '../Sidebar/SidebarToggle'
import NavigationItems from './Navigation/NavigationItems'

const Navbar = ( props ) => {
    return ( 
        <header className={classes.Navbar}>
            <SidedrawToggle clicked={props.drawClicked} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
     );
}
 
export default Navbar;