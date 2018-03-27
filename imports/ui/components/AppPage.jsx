import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import NavBarContainer from '../containers/NavBar/NavBarContainer';
import MainContainer from '../containers/MainContainer';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    // this.state = { isAuthenticated: isLoggedIn() };
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {

console.log('componentWillMount:', this.props.isAuthenticated);
    if (!this.props.isAuthenticated) {
      this.props.toLoginPage();
    }
// console.log('isAuthenticatedM:',this.state.isAuthenticated);
//     if (!this.state.isAuthenticated) {
//       this.props.toLoginPage();
//     }
  }

  componentDidUpdate(prevProps, prevState) {
// console.log('isAuthenticatedU:',this.state.isAuthenticated);
//     if (!this.state.isAuthenticated) {
//       this.props.toLoginPage();
//     }
console.log('componentDidUpdate:',this.props.isAuthenticated);
    if (!this.props.isAuthenticated) {
      this.props.toLoginPage();
    }
  }

  getMeteorData() {
    return { isAuthenticated: Meteor.userId() !== null };
  }

  logout(e) {
    e.preventDefault();
    Meteor.logout((err) => {
      if (err) {
        console.log( err.reason );
      } else {
        this.props.toLoginPage();
      }
    });
  }

  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">MathCombat.com App</a>
            </div>
            <div className="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/act/schools_edit">Schools</Link>
                </li>
                <li>
                  <a href="#" onClick={this.logout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
        <NavBarContainer />
        <MainContainer />
      </div>
    );
  }
}
