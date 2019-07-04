import React from 'react'
import Aux from '../../../HOC/Aux'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import classes from './Layout.css'


class Layout extends React.Component{
  state = {
    sideBarShow: false
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
            <Navbar 
            drawClicked={this.shouldShowToggle}/>
            <Sidebar
            open={this.state.sideBarShow}
            close={this.shouldShowBar}
            />
          <main className={classes.Content}>
            {this.props.children}
          </main>
        </Aux>
    )
  }
}

export default Layout
