import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// containers
import AppContainer from '../../ui/containers/AppContainer.jsx'
import MainContainer from '../../ui/containers/MainContainer.jsx'

// components
import SignupPage from '../../ui/components/SignupPage.jsx'
import LoginPage from '../../ui/components/LoginPage.jsx'
import ResetPassword from '../../ui/components/ResetPassword.jsx'
import ForgotPassword from '../../ui/components/ForgotPassword.jsx'

export const renderRoutes = () => (
  <Router>
    <div>
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={SignupPage}/>
      <Route exact={true} path="/" component={AppContainer}/>
      <Route path="/forgot_password" component={ForgotPassword}/>
      <Route path="/reset-password/:token" component={ResetPassword}/>
    </div>
  </Router>
);
