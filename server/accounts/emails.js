Accounts.emailTemplates.siteName = "MathCombat";
Accounts.emailTemplates.from     = "MathCombat <admin@mathcombat.co.za>";

// Email template for verification emails.
Accounts.emailTemplates.verifyEmail = {
  subject() {
    return "[MathCombat] Verify Your Email Address";
  },
  text( user, url ) {
    let emailAddress   = user.emails[0].address,
        urlWithoutHash = url.replace( '#/', '' ),
        supportEmail   = "admin@mathcombat.co.za",
        emailBody      = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

    return emailBody;
  }
};

// Email template for reset-password emails.
Accounts.emailTemplates.resetPassword = {
  subject() {
    return "[MathCombat] Reset your password";
  },
  text( user, url ) {
    let emailAddress   = user.emails[0].address,
        urlWithoutHash = url.replace( '#/', '' ),
        supportEmail   = "admin@mathcombat.co.za",
        emailBody      = `To reset the password for (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

    return emailBody;
  }
};
