import React from 'react'
import ReactDOM from 'react-dom'
import { Link, withRouter } from 'react-router-dom'
import { BrowserRouter as Browser, Switch, Route } from 'react-router-dom'
import ProductShow from'../src/components/Shop Page/ProductShow'
import Home from '../src/components/Home'
import Nav from '../src/components/common/Nav'
import Shop from './containers/Shop'
import Login from './components/auth/login'
import Register from './components/auth/register'
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading: false
        }
    }


render() {
    return(
        <Browser>
        <Nav />
            <Switch>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/products' component={Shop} />
            <Route exact path='/' component={Home} />
            </Switch>
        </Browser>
    )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )