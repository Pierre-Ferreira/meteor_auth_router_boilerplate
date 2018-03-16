import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // 1. Set up stmp
  // const username = 'postmaster%40sandbox56ca93bc62b8424ebc907139117a42cb.mailgun.org';
  // const password = '94d296eb9ab2b8929321ba944d5b06b8';
  const username = 'postmaster@mg.mathcombat.co.za';
  const password = '6c35be6478bcf660dbedb5e1c3947247-833f99c3-2850b1d1';
  const server = 'smtp.mailgun.org';
  const port = '587';

  process.env.MAIL_URL = 'smtp://' +
      encodeURIComponent(username) + ':' +
      encodeURIComponent(password) + '@' +
      encodeURIComponent(server) + ':' + port;

  // process.env.MAIL_URL = "smtps://postmaster%40sandbox56ca93bc62b8424ebc907139117a42cb.mailgun.org:94d296eb9ab2b8929321ba944d5b06b8@smtp.mailgun.org:587";
  if (process.env.MAIL_URL) {
      console.log('It is set!: ',process.env.MAIL_URL);
  } else {
      console.log('No set!');
  }
});
