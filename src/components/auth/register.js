import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth';
import { Link, withRouter } from 'react-router-dom'

class Register extends React.Component{
    constructor(){
        super()

        this.state = {
            data: {
                username: '',
                email: '',
                password: '',
                passwordConfirmation: ''
            },
            errors: {}
        }   
    }

    handleChange({ target: {name, value}}){
        const data = {...this.state.data, [name]: value}
        const errors = {...this.state.errors, [name]: ''}
        this.setState({data, errors})
    }

    handleSubmit(e){
       
        e.preventDefault()
        axios.post('api/register'), this.state.data
        .then(res => {
            console.log(this.state.data)
        
            Auth.setToken(res.data.token)
            this.props.history.push('/login')
        })
        .catch(err => console.log(err))
    
}

    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
            <h2>Register</h2>
            <label htmlFor='email'>Email</label>
            <input 
            name='email'
            placeholder='email'
            value={this.state.data.email}
            onChange={this.handleChange.bind(this)}
            />

            <label htmlFor='username'>Username</label>
            <input 
            name='username'
            placeholder='username'
            value={this.state.data.username}
            onChange={this.handleChange.bind(this)}
            />
            {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
            <label htmlFor='password'>Password</label>
            <input 
            name='password'
            placeholder='password'
            value={this.state.data.password}
            onChange={this.handleChange.bind(this)}
            />

            <label htmlFor='passwordConfirmation'>Password Confirmation</label>
            <input 
            name='passwordConfirmation'
            placeholder='Confirm Password'
            value={this.state.data.passwordConfirmation}
            onChange={this.handleChange.bind(this)}
            />
            </form>
            <button>Register</button>
            <p>Already Registered? <Link to='/login'>Login Here</Link></p>
            </div>
            

        )
    }
}

export default Register