import React, { useState } from 'react';
import './Members.css';
import trainer1 from '../../assets/trainer1.png';
// import anthony from './assets/anthony.jpg';
// import jhon from './assets/jhon.jpg';
// import ezekiel from './assets/ezekiel.jpg';

const Members = () => {
  const [members, setMembers] = useState([
    { name: 'Derek', image: trainer1, stars: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Anthony', image: trainer1, stars: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Jhon', image: trainer1, stars: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Ezekiel', image: trainer1, stars: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ]);

  const addMember = (newMember) => {
    setMembers([...members, newMember]);
  };

  return (
    <div className="members-section" id='SuccessStory'>
      <div className="header">
        <h1>Member’s Success <br /> Story</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Vestibulum faucibus interdum nunc, at eleifend neque sagittis et.</p>
      </div>
      <div className="members-container">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <img src={member.image} alt={member.name} className="member-image" />
            <h3>{member.name}</h3>
            <div className="stars">
              {Array.from({ length: member.stars }, (_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
            <p>{member.text}</p>
          </div>
        ))}
      </div>
      {/* <button onClick={() => addMember({ name: 'New Member', image: '/assets/new.jpg', stars: 5, text: 'New member text' })}>
        Add Member
      </button> */}
    </div>
  );
}

export default Members;

