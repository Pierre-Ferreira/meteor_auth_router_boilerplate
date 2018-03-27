import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SchoolsPage from '../../ui/components/SchoolsPage';
// import TablesMainComp from './components/TablesModule/TablesMainComp';
// import SumsMainComp from './components/SumsModule/SumsMainComp';
// components
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import ResetPassword from './ResetPassword';
import ForgotPassword from './ForgotPassword';
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
                <Route path="/act/schools_edit" component={SchoolsPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/forgot_password" component={ForgotPassword} />
                <Route path="/reset-password/:token" component={ResetPassword} />
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
