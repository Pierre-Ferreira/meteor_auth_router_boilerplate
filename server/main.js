import { Meteor } from 'meteor/meteor';

// import { settings } from '../settings.json';


Meteor.startup(() => {

console.log("usernameP: ",Meteor.settings.private.username);
console.log("passwordP: ",Meteor.settings.private.password);
console.log("serverP: ",Meteor.settings.private.server);
console.log("portP: ",Meteor.settings.private.port);
  // 1. Set up stmp. NOTE! For security smtps should be used, but it does not work in dev enviroment.
  process.env.MAIL_URL = 'smtp://' +
      encodeURIComponent(Meteor.settings.private.username) + ':' +
      encodeURIComponent(Meteor.settings.private.password) + '@' +
      encodeURIComponent(Meteor.settings.private.server) + ':' + Meteor.settings.private.port;

  // process.env.MAIL_URL = "smtps://postmaster%40sandbox56ca93bc62b8424ebc907139117a42cb.mailgun.org:94d296eb9ab2b8929321ba944d5b06b8@smtp.mailgun.org:587";
  if (process.env.MAIL_URL) {
      console.log('It is set!: ',process.env.MAIL_URL);
  } else {
      console.log('No set!');
  }
});
