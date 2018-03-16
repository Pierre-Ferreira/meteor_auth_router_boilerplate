import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

// add render routes function
import { renderRoutes } from '../imports/startup/client/routes.jsx'

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('target'));
});
