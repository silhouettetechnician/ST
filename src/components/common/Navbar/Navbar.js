import React from 'react'
import { withRouter } from 'react-router-dom'
import Logo from '../Logo/Logo'
import classes from './Navbar.css'
import SidedrawToggle from '../Sidebar/SidebarToggle'
import NavigationItems from './Navigation/NavigationItems'

class Navbar extends React.Component {
    constructor(){
        super()
        this.state = {
            homepage: true
        }
    }
   checkPath(){
      console.log(this.props.location) 
    }
    render(){
        return ( 
            <header className={this.props.location.pathname === '/' ? classes.NavbarHome : classes.Navbar}>
                <SidedrawToggle clicked={this.props.drawClicked} />
                <div className={classes.Logo}>
                    <h1>SILHOUETTE TECHNICIAN</h1>
                </div>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems />
                </nav>
            </header>
        )
    }
}
 
export default withRouter(Navbar)