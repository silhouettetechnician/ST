import React from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/auth'
import Flash from '../auth/flashMessages'
class Login extends React.Component{
    constructor(props){
        super(props)
        
        this.state ={
            data: { email: '', password: ''},
            error: ''
        }
    }

    handleChange({ target: {name, value}}) {
        const data ={...this.state.data, [name]: value}
        const errors = {...this.state.errors, [name]: ''}
        this.setState({ data, errors })
      }

    handleSubmit(){
        e.preventDefault()
        axios.post('api/login', this.state.data)
        .then(res => {
            console.log('success')
            Flash.setMessage('success', res.data.message)
            Auth.setToken(res.data.token)
            this.props.history.push('/')
        })
        .catch(() => {
            this.setState({ error: 'Invalid Credentials' })
        })
    }

    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
            <h2>Login</h2>
            <label htmlFor='email'>Email</label>
            <input 
            name='email'
            placeholder='email'
            value={this.state.data.email}
            onChange={this.handleChange.bind(this)}
            />

            <label htmlFor='password'>Password</label>
            <input 
            name='password'
            placeholder='password'
            value={this.state.data.password}
            onChange={this.handleChange.bind(this)}
            />
            </form>
            <button>Login</button>
            <p>Not a member? <Link to='/register'>Register Here</Link></p>
            </div>
        )
    }
}

export default Login