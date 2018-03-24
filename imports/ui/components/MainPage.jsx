import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SchoolsPage from '../../ui/components/SchoolsPage';
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
          <Router>
            <div>
              <Route path="/act/schools_edit" component={SchoolsPage} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  // username: React.PropTypes.string
};
