import React from 'react';
import '../styles/footer.css';
const Footer = () => {
  return (
    <div className='footerwrapper'>
      <section>
        <a href='https://github.com/oslabs-beta/projectArtemis/blob/main/README.md'>
          ReadMe
        </a>
      </section>
      <section>
        <a href='#'>Social</a>
      </section>
      <section>
        <a href='https://github.com/oslabs-beta/projectArtemis'>Github</a>
      </section>
    </div>
  );
};

export default Footer;
