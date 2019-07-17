import React from 'react'
import ReactDOM from 'react-dom'
import { Link, withRouter } from 'react-router-dom'
import { BrowserRouter as Browser, Switch, Route } from 'react-router-dom'

import Register from './components/auth/register'
import Login from './components/auth/Login/login'


import Modal from './components/UI/Modal/Modal'
import Home from './components/Homepage/Home'
import Nav from '../src/components/common/Nav'
import Shop from './containers/Shop/Shop'
import ProductShow from './containers/Shop/ProductShow'
import Layout from './components/common/Layout/Layout';

import './reset.css'
import './global.css'


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading: false
        }
    }


render() {
    return(
        <Layout>
        <Browser>
            <Switch>
            <Route path='/products/:id' component={ProductShow} />
            <Route path='/register' component={Register} />
            <Route exact path='/products' component={Shop} />
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            </Switch>
        </Browser>
        </Layout>
    )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )