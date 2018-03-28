import React, { PropTypes } from 'react';

const WelcomeComp = ({ props }) => {
  const { currentUser } = props;
  // const userDataAvailable = (currentUser !== undefined);
  // const loggedIn = (currentUser && userDataAvailable);
  return (
    <h1 className="text-center">
      Welcome {currentUser.username}
    </h1>
  );
};

WelcomeComp.propTypes = {
  currentUser: PropTypes.bool,
};

export default WelcomeComp;
