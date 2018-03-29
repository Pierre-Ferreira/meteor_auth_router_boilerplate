import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import SchoolsEditComp from '../Admin/SchoolsEditComp';
// import TablesMainComp from './components/TablesModule/TablesMainComp';
// import SumsMainComp from './components/SumsModule/SumsMainComp';
// components
import WelcomeComp from '../../containers/Main/WelcomeContainer';
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
    return (
      <div>
        <Container>
          <div>
            <Switch>
              <Route path="/admin/schools_edit" component={SchoolsEditComp} />
              <Route path="/auth/login" component={LoginComp} />
              <Route path="/auth/signup" component={SignupComp} />
              <Route path="/auth/forgot_password" component={ForgotPasswordComp} />
              <Route path="/auth/reset-password/:token" component={ResetPasswordComp} />
              <Route path="/main/welcome" component={WelcomeComp} />
              {/* <Route exact path="/" component={AppContainer} /> */}
            </Switch>
          </div>
        </Container>
      </div>
    );
  }
}
// 
// MainPage.propTypes = {
//   // username: React.PropTypes.string
// };
