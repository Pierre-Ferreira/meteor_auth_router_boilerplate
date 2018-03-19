import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';

export const AuthFeedbackMessage = (props) => {
  let feedbackMessageType = (props.feedbackMessageType) ? `alert-${props.feedbackMessageType}` : 'alert-danger';
  let feedbackMessage = props.feedbackMessage || '';
  let tokenExpiredFlag = props.tokenExpiredFlag || false;
  let resendVerificationEmailFN = props.resendVerificationEmailFN || '';
  let resendVerificationMessages = props.resendVerificationMessages || '';

  // Check if a feedback message was set.
  if (feedbackMessage.trim().length !== 0) {
    return (
      <div className={`alert ${feedbackMessageType} fade in`}>
        {feedbackMessage}
        {/* Check if 'forgot password' link should be displayed */}
        {tokenExpiredFlag
          ? <span> Please request new <Link to="/forgot_password">forgot password</Link> email. </span>
          : ''
        }
        {/* Check if 'resend verification email' link should be displayed */}
        {resendVerificationMessages
          ? <span><a onClick={resendVerificationEmailFN}> {resendVerificationMessages}</a></span>
          : ''
        }
      </div>
    )
  } else {
    return ''
  }
}
