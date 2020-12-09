import React from 'react';
import Artemis from '../images/artemis-logo.svg';
import '../styles/title.css';

const Title = () => {
  return (
    <div className="title-container">
      <img className="artemis-logo" src={Artemis} alt="website logo" />
      <div className="title_text">
        <h1 className="title_header">Artemis</h1>
        <p className="title_subtext">
          A performance analytics tool to test your APIs and visualize their
          metrics!
        </p>
      </div>
    </div>
  );
};
export default Title;
