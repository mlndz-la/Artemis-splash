import React from 'react';
import erick from '../images/erick.png';
import greg from '../images/greg.png';
// import taylor from '../images/taylor.png';
import scott from '../images/scott.png';
import stella from '../images/stella.png';
import '../styles/team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Erick Melendez',
      filePath: erick,
    },
    {
      name: 'Greg',
      filePath: greg,
    },
    {
      name: 'Scott Burman',
      filePath: scott,
    },
    // {
    //   name: 'Taylor Morgan',
    //   filePath: taylor,
    // },
    {
      name: 'Stella Liao',
      filePath: stella,
    },
  ];

  return (
    <>
      <div className='team-container' >
        <h2 className="team-container__intro">
          Meet the Team!
        </h2>
        <div className="team-members-container"
        >
          {teamMembers.map((person) => TeamMember(person))}
        </div>
      </div>
    </>
  );
};

const TeamMember = ({name, filePath}) => {
  return (
    <div className="team-member">
      <img loading='lazy' className="team-member__img" src={filePath}alt=""/>
      <h4 className="team-member__name">{name}</h4>
      {/* flexbox - row, add links github, linkdin, etc */}
      <div></div>
    </div>
  );
};

export default Team;
