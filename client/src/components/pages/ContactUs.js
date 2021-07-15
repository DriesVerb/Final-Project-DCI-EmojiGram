import React from 'react';

function Email() {
  const Mailto = ({ email, subject = '', body = '', children }) => {
 
    let mailContent = subject || body ? '?' : '';
    if (subject)
      mailContent += `${subject ? '&' : ''}subject=${encodeURIComponent(
        subject
      )}`;
    if (body)
      mailContent += `${body ? '&' : ''}body=${encodeURIComponent(body)}`;
    return <a href={`mailto:${email}${mailContent}`}>{children}</a>;
  };

  return (
    <div className='Email'>
      <h1>Dear EmojiGram Customer</h1>
      <h2>
        Click the link below to contact the support team, you will be redirected
        to your email from where you will be able to write to us the issue(s)
        you are facing
      </h2>
      <Mailto
        email='testfinalprojectone@gmail.com'
        subject='You are raising an issue'
        body=''>
        <p>Contact the support team</p>
      </Mailto>
    </div>
  );
}

export default Email;