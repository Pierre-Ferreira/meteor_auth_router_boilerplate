import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux-meteor';
import { push } from 'react-router-redux';
import NavbarComp from '../../components/Navbar/NavbarComp';

const mapTrackerToProps = (state, props) => {
  return {isAuthenticated: Meteor.userId() !== null}
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toLoginPage: () => dispatch(push('/login')),
  };
}

export default connect(mapTrackerToProps,mapStateToProps, mapDispatchToProps)(NavbarComp);
