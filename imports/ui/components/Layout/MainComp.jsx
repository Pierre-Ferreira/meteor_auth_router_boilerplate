import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SchoolsEditComp from '../Admin/SchoolsEditComp';
// import TablesMainComp from './components/TablesModule/TablesMainComp';
// import SumsMainComp from './components/SumsModule/SumsMainComp';
// components
import SignupComp from '../Auth/SignupComp';
import LoginComp from '../Auth/LoginComp';
import ResetPasswordComp from '../Auth/ResetPasswordComp';
import ForgotPasswordComp from '../Auth/ForgotPasswordComp';
// import { withHistory, Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  render() {
    const { currentUser } = this.props;
    const userDataAvailable = (currentUser !== undefined);
    const loggedIn = (currentUser && userDataAvailable);
    return (
      <div>
        <div className="container">
          <h1 className="text-center">
            { loggedIn ? 'Welcome ' + currentUser.username : '' }
          </h1>
          <div>
            {/* <Grid> */}
              <Switch>
                <Route path="/admin/schools_edit" component={SchoolsEditComp} />
                <Route path="/auth/login" component={LoginComp} />
                <Route path="/auth/signup" component={SignupComp} />
                <Route path="/auth/forgot_password" component={ForgotPasswordComp} />
                <Route path="/auth/reset-password/:token" component={ResetPasswordComp} />
                {/* <Route exact path="/" component={AppContainer} /> */}
              </Switch>
            {/* </Grid> */}
          </div>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  // username: React.PropTypes.string
};
