import React from 'react';

function Email() {
  const Mailto = ({
    email,
    subject = '',
    body = '',
    message = '',
    children,
  }) => {
    let mailContent = subject || body || message ? '?' : '';
    if (subject)
      mailContent += `${subject ? '&' : ''}subject=${encodeURIComponent(
        subject
      )}`;
    if (body)
      mailContent += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
    if (message)
      mailContent += `${message ? '&' : ''}message=${encodeURIComponent(
        message
      )}`;

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
      <Mailto email='metalrocks71.79@gmail.com' subject=''>
        <p>Contact the support team</p>
      </Mailto>
    </div>
  );
}

export default Email;
