import React, { Component } from 'react';
 import { withHistory, Link } from 'react-router-dom';
 import { Accounts } from 'meteor/accounts-base';

export default class ResetPassword extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    // let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    // let password = document.getElementById("signup-password").value;
    this.setState({error: "Besig..."});
    Accounts.forgotPassword({email: email}, (err) => {
      if(err){
        this.setState({
          error: err.reason
        });
      } else {
          this.setState({
            error: 'Kyk asb na die email wat ons gestuur het en click die reset-password link!'
          });
      }
    });
  }

  render(){
    const error = this.state.error;
    return (
      <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center">Reset Password</h1>
            </div>
            <div className="modal-body">
              { error.length > 0 ?
                <div className="alert alert-danger fade in">{error}</div>
                :''}
              <form  id="login-form"
                    className="form col-md-12 center-block"
                    onSubmit={this.handleSubmit}>
                {/* <div className="form-group">
                  <input type="text" id="signup-name"
                        className="form-control input-lg" placeholder="name"/>
                </div> */}
                {/* <div className="form-group">
                  <input type="email" id="signup-email"
                        className="form-control input-lg" placeholder="email"/>
                </div> */}
                <div className="form-group">
                  <input type="password" id="signup-password"
                        className="form-control input-lg"
                        placeholder="password"/>
                </div>
                <div className="form-group">
                  <input type="password" id="signup-password"
                        className="form-control input-lg"
                        placeholder="re-type password"/>
                </div>
                <div className="form-group">
                  <input type="submit" id="login-button"
                        className="btn btn-lg btn-primary btn-block"
                        value="Reset password" />
                </div>
                <div className="form-group">
                  <p className="text-center">
                    <Link to="/login">Login</Link>
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
