import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';
import AuthenticatedNavigationLinksComp from './AuthenticatedNavigationLinksComp';
import PublicNavigationLinks from './PublicNavigationLink';
// import './NavbarComp.css';

export default class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const renderNavigationLinks = authenticated =>
      (authenticated ? <AuthenticatedNavigationLinksComp /> : <PublicNavigationLinks />);
    return (
      <div>
        <Navbar color="faded" className="navbar-dark bg-dark" light expand="md">
          <NavbarBrand>
            <NavLink to="/">MATHCOMBAT</NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            { renderNavigationLinks(this.props.authenticated) }
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
