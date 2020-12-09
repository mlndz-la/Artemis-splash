import React from 'react';
import GUIOne from '../images/gui-1.png';
import GUITwo from '../images/gui-2.png';
import GUIThree from '../images/gui-3.png';
import '../styles/demo.css';

const Demo = () => {
  return (
    <div className="demo-container">
      <img
        src={GUIOne}
        alt="screenshot of artemis"
        className="screenshot one"
      />
      <h2 className="screenshot-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        dignissimos nam fugit. Fugit nobis qui quia, nesciunt nam delectus
        ratione veniam magnam esse dolor, suscipit id recusandae eveniet, rem
        accusamus
      </h2>
      <img
        src={GUITwo}
        alt="screenshot of artemis"
        className="screenshot two"
      />
      <h2 className="screenshot-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        dignissimos nam fugit. Fugit nobis qui quia, nesciunt nam delectus
        ratione veniam magnam esse dolor, suscipit id recusandae eveniet, rem
        accusamus
      </h2>
      <img
        src={GUIThree}
        alt="screenshot of artemis"
        className="screenshot three"
      />
      <h2 className="screenshot-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        dignissimos nam fugit. Fugit nobis qui quia, nesciunt nam delectus
        ratione veniam magnam esse dolor, suscipit id recusandae eveniet, rem
        accusamus
      </h2>
    </div>
  );
};

export default Demo;
