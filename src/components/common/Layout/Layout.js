import React from 'react'
import Aux from '../../../HOC/Aux'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import classes from './Layout.css'
import { BrowserRouter as Browser, Switch, Route } from 'react-router-dom'

class Layout extends React.Component{
  constructor(){
    super()
    this.state = {
      sideBarShow: false 
    }
  }
 locationPath = () => {
   if(this.props.location === '/'){
     console.log('home')
   }
 }

  shouldShowBar = () => {
    this.setState({ sideBarShow: false })
  }

  shouldShowToggle = () => {
    this.setState((prevState => {
      return { sideBarShow: !prevState.sideBarShow }
    }))
  }

  render(){
    return(
        <Aux>
          <Browser>
            <Navbar 
            location={this.locationPath}
            drawClicked={this.shouldShowToggle}
            pathCheck={this.props.checkPath}
            />
            <Sidebar
            open={this.state.sideBarShow}
            close={this.shouldShowBar}
            />
          <main className={classes.Content}>
            {this.props.children}
          </main>
          </Browser>
        </Aux>
    )
  }
}

export default Layout
