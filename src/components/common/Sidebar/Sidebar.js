import React from 'react'
import classes from './Sidebar.css'
import Aux from '../../../HOC/Aux'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Logo from '../Logo/Logo'
import NavigationItems from '../Navbar/Navigation/NavigationItems'

const Sidebar = ( props ) => {
    let attachedClasses = [classes.Sidebar, classes.Close]
    if(props.open){
        attachedClasses = [classes.Sidebar, classes.Open]
    }
    return ( 
        <Aux>
            <Backdrop show={props.open} clicked={props.close}
            />
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
       
     )
}
 
export default Sidebar;