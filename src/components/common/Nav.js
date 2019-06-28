import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../../lib/auth'

class Nav extends React.Component {
  constructor() {
    super()

    this.state = { navbarOpen: false }

    this.logout = this.logout.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  logout() { 
    Auth.logout()
    this.props.history.push('/')
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    return (
      <nav className="navbar is-dark">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>
          <a role="button"
            className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`}
            onClick={this.toggleNavbar.bind(this)}
            aria-label="menu" aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link to="/products" className="navbar-item">Shop</Link>
            <Link to="/register" className="navbar-item">Register</Link>
            <Link to="/login" className="navbar-item">Login</Link>
            <a className="navbar-item" onClick={this.logout.bind(this)}>Logout</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Nav)