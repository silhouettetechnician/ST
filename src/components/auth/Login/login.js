import React from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../../lib/auth'
import Aux from '../../../HOC/Aux'
import Flash from '../flashMessages'
import {facebookConfig, googleConfig} from '../socialConfig'
import ReactModalLogin from 'react-modal-login'


class Login extends React.Component{
    constructor(props){
        super(props)
        
        this.state ={
            data: { email: '', password: ''},
            error: '',
            showModal: true,
            loggedIn: null,
            loading: false,
            error: null,
            initialTab: null,
            recoverPasswordSuccess: null,
        }
    }

    handleChange({ target: {name, value}}) {
        const data ={...this.state.data, [name]: value}
        const errors = {...this.state.errors, [name]: ''}
        this.setState({ data, errors })
      }

    handleSubmit(e){
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

    onLogin() {
        console.log('__onLogin__');
        console.log('email: ' + document.querySelector('#email').value);
        console.log('password: ' + document.querySelector('#password').value);
    
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

    
        if (!email || !password) {
          this.setState({
            error: true
          })
        } else {
          this.onLoginSuccess('form');
        }
      }
    
      onRegister() {
        console.log('__onRegister__');
        console.log('login: ' + document.querySelector('#login').value);
        console.log('email: ' + document.querySelector('#email').value);
        console.log('password: ' + document.querySelector('#password').value);
    
        const login = document.querySelector('#login').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

    if (!login || !email || !password) {
        this.setState({
          error: true
        })
      } else {
        this.onLoginSuccess('form');
      }
    }
  
    onRecoverPassword() {
      console.log('__onFotgottenPassword__');
      console.log('email: ' + document.querySelector('#email').value);
  
      const email = document.querySelector('#email').value;
  
  
      if (!email) {
        this.setState({
          error: true,
          recoverPasswordSuccess: false
        })
      } else {
        this.setState({
          error: null,
          recoverPasswordSuccess: true
        });
      }
    }
  
    openModal(initialTab) {
      this.setState({
        initialTab: initialTab
      }, () => {
        this.setState({
          showModal: true,
        })
      });
    }
  
    onLoginSuccess(method, response) {
  
      this.closeModal();
      this.setState({
        loggedIn: method,
        loading: false
      })
    }
  
    onLoginFail(method, response) {
  
      this.setState({
        loading: false,
        error: response
      })
    }
  
    startLoading() {
      this.setState({
        loading: true
      })
    }
  
    finishLoading() {
      this.setState({
        loading: false
      })
    }
  
    afterTabsChange() {
      this.setState({
        error: null,
        recoverPasswordSuccess: false,
      });
    }
  
    closeModal() {
      this.setState({
        showModal: false,
        error: null
      });
    }
  

    

    render(props){
        const loggedIn = this.state.loggedIn
        ? <div>
            <p>You are signed in with: {this.state.loggedIn}</p>
          </div>
        : <div>
            <p>You are signed out</p>
        </div>;
  
      const isLoading = this.state.loading;
        return(
            <div>
            <button onClick={() => this.openModal()}></button>
            <ReactModalLogin
            visible={this.state.showModal}
            onCloseModal={this.closeModal.bind(this)}
            loading={isLoading}
            initialTab={this.state.initialTab}
            error={this.state.error}
            tabs={{
              afterChange: this.afterTabsChange.bind(this)
            }}
            startLoading={this.startLoading.bind(this)}
            finishLoading={this.finishLoading.bind(this)}
            form={{
              onLogin: (e) => this.handleSubmit.bind(this),
              onRegister: this.onRegister.bind(this),
              onRecoverPassword: this.onRecoverPassword.bind(this),
              
  
              recoverPasswordSuccessLabel: this.state.recoverPasswordSuccess
                ? {
                    label: "New password has been sent to your mailbox!"
                  }
                : null,
              recoverPasswordAnchor: {
                label: "Forgot your password?"
              },
              loginBtn: {
                label: "Sign in"
              },
              registerBtn: {
                label: "Sign up"
              },
              recoverPasswordBtn: {
                label: "Send new password"
              },
              loginInputs: [
                {
                  containerClass: 'RML-form-group',
                  label: 'Email',
                  type: 'email',
                  inputClass: 'RML-form-control',
                  id: 'email',
                  name: 'email',
                  placeholder: 'Email',
                },
                {
                  containerClass: 'RML-form-group',
                  label: 'Password',
                  type: 'password',
                  inputClass: 'RML-form-control',
                  id: 'password',
                  name: 'password',
                  placeholder: 'Password',
                }
              ],
              registerInputs: [
                {
                  containerClass: 'RML-form-group',
                  label: 'Nickname',
                  type: 'text',
                  inputClass: 'RML-form-control',
                  id: 'login',
                  name: 'login',
                  placeholder: 'Nickname',
                },
                {
                  containerClass: 'RML-form-group',
                  label: 'Email',
                  type: 'email',
                  inputClass: 'RML-form-control',
                  id: 'email',
                  name: 'email',
                  placeholder: 'Email',
                },
                {
                  containerClass: 'RML-form-group',
                  label: 'Password',
                  type: 'password',
                  inputClass: 'RML-form-control',
                  id: 'password',
                  name: 'password',
                  placeholder: 'Password',
                }
              ],
              recoverPasswordInputs: [
                {
                  containerClass: 'RML-form-group',
                  label: 'Email',
                  type: 'email',
                  inputClass: 'RML-form-control',
                  id: 'email',
                  name: 'email',
                  placeholder: 'Email',
                },
              ],
            }}
            separator={{
              label: "or"
            }}
            providers={{
              facebook: {
                config: facebookConfig,
                onLoginSuccess: this.onLoginSuccess.bind(this),
                onLoginFail: this.onLoginFail.bind(this),
                inactive: isLoading,
                label: "Continue with Facebook"
              },
              google: {
                config: googleConfig,
                onLoginSuccess: this.onLoginSuccess.bind(this),
                onLoginFail: this.onLoginFail.bind(this),
                inactive: isLoading,
                label: "Continue with Google"
              }
            }}
          />
        </div>
          )
          {loggedIn}
    }
}

export default Login
