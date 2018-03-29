import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import 'react-router-modal/css/react-router-modal.css';
import SchoolsEditComp from '../Admin/SchoolsEditComp';
// import TablesMainComp from './components/TablesModule/TablesMainComp';
// import SumsMainComp from './components/SumsModule/SumsMainComp';
// components
import HomepageComp from '../Main/HomepageComp';
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
              <Route exact path="/" component={HomepageComp} />
              <Route path="/admin/schools_edit" component={SchoolsEditComp} />
              <Route path="/auth/login" component={LoginComp} />
              <Route path="/auth/signup" component={SignupComp} />
              <Route path="/auth/forgot_password" component={ForgotPasswordComp} />
              <Route path="/auth/reset-password/:token" component={ResetPasswordComp} />
              <Route path="/main/welcome" component={WelcomeComp} />
              {/* <Route exact path="/" component={AppContainer} /> */}
            </Switch>
            {/* <ModalRoute component={LoginComp} path="/auth/login" className="test-modal test-modal-foo" />
            <ModalRoute component={SignupComp} path="/auth/signup" className="test-modal test-modal-foo" />
            <ModalRoute component={SchoolsEditComp} path="/admin/schools_edit" className="test-modal test-modal-foo" />
            <ModalContainer /> */}
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
