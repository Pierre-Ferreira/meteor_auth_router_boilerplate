import React from 'react';
import { Meteor } from 'meteor/meteor';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const logout = (e) => {
  e.preventDefault();
  Meteor.logout((err) => {
    if (err) {
      console.log( err.reason );
    } else {
      this.props.toLoginPage();
    }
  });
}

const AuthenticatedNavigationLinksComp = () => (
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink to="/schools_edit">Schools</NavLink>
    </NavItem>
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Modules
      </DropdownToggle>
      <DropdownMenu >
        <DropdownItem>
          <NavLink to="/tables" style={{ textDecoration: 'none', color: 'black' }}>
            x en ÷
          </NavLink>
        </DropdownItem>
        <DropdownItem >
          <NavLink to="/sums" style={{ textDecoration: 'none', color: 'black' }}>
          + en -
          </NavLink>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          PEMDAS
        </DropdownItem>
        <DropdownItem>
          Tyd
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    <NavItem>
      <NavLink to="/auth/login" onClick={logout}>Logout</NavLink>
    </NavItem>
  </Nav>
);

export default AuthenticatedNavigationLinksComp;
