import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'

export default class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
      resendVerificationMessages: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resendVerificationEmail = this.resendVerificationEmail.bind(this);
  }

  resendVerificationEmail(e) {
    // Clear the states.
    this.setState({
      error: `Busy...`,
      resendVerificationMessages: '',
    });
    // Retrieve the email.
    let email = document.getElementById('login-email').value;
    // Call the method to resend the verification email.
    Meteor.call('resendVerificationEmail', email, (err, res) => {
      if (err) {
        this.setState({
          error: `${err.reason}`
        });
      } else {
        this.setState({
          error: 'Verification email has been resent! Please check your email.'
        });
      }
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    Meteor.loginWithPassword(email, password, (err) => {
      if(err){
        this.setState({
          error: `${err.reason} `
        });
        if (err.error === "email-not-verified") {
          this.setState({
            resendVerificationMessages: 'Resend verification email?'
          });
        } else {
          this.setState({
            resendVerificationMessages: ''
          });
        }
      } else {
        this.props.history.push('/');
      }
    });
  }

  render(){
    const error = this.state.error;
    const resendVerificationMessages = this.state.resendVerificationMessages;
    return (
      <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="modal-body">
              { error.length > 0 ?
                <div className="alert alert-danger fade in">{error}
                  <a onClick={this.resendVerificationEmail}>
                    {resendVerificationMessages}
                  </a>
                </div>
                :''}
              <form  id="login-form"
                    className="form col-md-12 center-block"
                    onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="email"
                        id="login-email"
                        className="form-control input-lg"
                        placeholder="email"/>
                </div>
                <div className="form-group">
                  <input type="password"
                        id="login-password"
                        className="form-control input-lg"
                        placeholder="password"/>
                </div>
                <div className="form-group text-center">
                  <p className="text-left">
                    <Link to="/forgot_password">Forgot Password?</Link>
                  </p>
                </div>
                <div className="form-group text-center">
                  <input type="submit"
                        id="login-button"
                        className="btn btn-primary btn-lg btn-block"
                        value="Login" />
                </div>
                <div className="form-group text-center">
                  <p className="text-center">
                    Don't have an account? Register <Link to="/signup">here</Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="modal-footer" style={{borderTop: 0}}></div>
          </div>
        </div>
      </div>
    );
  }
}
