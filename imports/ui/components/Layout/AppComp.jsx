import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import NavBarContainer from '../../containers/Navbar/NavbarContainer';
import MainContainer from '../../containers/Layout/MainContainer';

export default class AppComp extends Component {
  constructor(props) {
    super(props);
    // this.state = { isAuthenticated: isLoggedIn() };
    // this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    // if (!this.props.isAuthenticated) {
    //   this.props.toLoginPage();
    // }
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
    // if (!this.props.isAuthenticated) {
    //   this.props.toLoginPage();
    // }
  }

  // getMeteorData() {
  //   return { isAuthenticated: Meteor.userId() !== null };
  // }

  // logout(e) {
  //   e.preventDefault();
  //   Meteor.logout((err) => {
  //     if (err) {
  //       console.log( err.reason );
  //     } else {
  //       this.props.toLoginPage();
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        <NavBarContainer />
        <MainContainer />
      </div>
    );
  }
}
