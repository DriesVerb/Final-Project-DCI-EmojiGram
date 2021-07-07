import React from 'react' 

export default function Email() {
  const Mailto = ({ email, subject = '', body = '', children }) => {
    let mailContent = subject || body ? '?' : '';
    if (subject) mailContent += `subject=${encodeURIComponent(subject)}`;
    if (body) mailContent += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${mailContent}`}>{children}</a>;
  };

  return (
    <div className='Email'>
      <h1>Dear EmojiGram Customer</h1>
      <h2>Click the link below to contact the support team</h2>
      <Mailto email='metalrocks71.79@gmail.com' subject=''>
        <p>Contact the support team</p>
      </Mailto>
    </div>
  );
}
