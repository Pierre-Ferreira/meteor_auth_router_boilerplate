import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { AuthFeedbackMessage } from './AuthFeedbackMessage';

export default class SignupPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      feedbackMessage: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    this.setState({
      feedbackMessage: "Busy...",
      feedbackMessageType: "success",
    });
    Accounts.createUser({email: email, username: name, password: password}, (err) => {
      if(err){
        this.setState({
          feedbackMessage: err.reason,
          feedbackMessageType: "danger",
        });
      } else {
        Meteor.call( 'sendVerificationLink', ( err, response ) => {
          if ( err ) {
            this.setState({
              feedbackMessage: err.reason,
              feedbackMessageType: "danger",
            });
          } else {
            this.setState({
              feedbackMessage: 'Email sent! Please click the verification link!',
              feedbackMessageType: "success",
            });
          }
        });
      }
    });
  }

  render(){
    const feedbackMessage = this.state.feedbackMessage;
    const feedbackMessageType = this.state.feedbackMessageType;
    return (
      <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center">Sign up</h1>
            </div>
            <div className="modal-body">
              <AuthFeedbackMessage
                feedbackMessageType={feedbackMessageType}
                feedbackMessage={feedbackMessage}
              />
              <form  id="login-form"
                    className="form col-md-12 center-block"
                    onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="text" id="signup-name"
                        className="form-control input-lg" placeholder="name"/>
                </div>
                <div className="form-group">
                  <input type="email" id="signup-email"
                        className="form-control input-lg" placeholder="email"/>
                </div>
                <div className="form-group">
                  <input type="password" id="signup-password"
                        className="form-control input-lg"
                        placeholder="password"/>
                </div>
                <div className="form-group">
                  <input type="submit" id="login-button"
                        className="btn btn-lg btn-primary btn-block"
                        value="Sign Up" />
                </div>
                <div className="form-group">
                  <p className="text-center">
                    Already have an account? Login <Link to="/login">here</Link>
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
