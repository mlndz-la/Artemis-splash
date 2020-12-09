import React from 'react';
import Artemis from '../images/artemis-logo.svg';
import '../styles/title.css';

const Title = () => {
  return (
    <div className='title-container'>
      <img className='artemis-logo' src={Artemis} alt='website logo' />
      <h1>Artemis</h1>
    </div>
  );
};
export default Title;
