import React from 'react';
import './About.css'; 

import aboutBg from '../../assets/about.png'; 
import fit1 from '../../assets/fitness1 (1).png';
import fit2 from '../../assets/fitness1 (2).png';
import fit3 from '../../assets/fitness1 (3).png';

function About() {
  return (
    
    <div className="about-section" id='About' >
      <div className="content" style={{ backgroundImage: `url(${aboutBg})` }}>
        <h1>About Us</h1>
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum nunc, et eleifend neque sagittis et. Donec dignissim quam eu aliquam fermentum. Suspendisse potenti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde. Vel nesciunt numquam odit, tempore omnis optio inventore perspiciatis deserunt soluta! At voluptate assumenda reiciendis vitae labore vel nostrum ducimus.
        Obcaecati laborum placeat laboriosam! Odio dolor reprehenderit soluta quod sit dolore amet libero, suscipit consequatur alias voluptatem accusamus quasi nihil numquam quos vitae vel aperiam. Qui est veritatis ea quos.
        Necessitatibus assumenda placeat, voluptate consequuntur dignissimos quis enim temporibus, quibusdam provident id tempora possimus adipisci maiores hic voluptates libero quas labore? Deserunt doloremque consequatur ea veniam illo reprehenderit facere libero.
        Ea temporibus esse nisi quis labore fugit inventore sapiente doloreprehenderit sapiente iste ratione. Ipsam voluptate ipsum nihil!
        Autem in repellendus iusto dolor maxime odio quae tenetur ullam sequi ratione repudiandae recusandae aut pariatur suscipit, incidunt harum tempora velit blanditiis, impedit animi laboriosam, facilis ipsum sit fuga. Vitae?
        Dolore quo, quod itaque quis ipsa porro, eius velit saepe molestiae assumenda enim! Possimus sit at vel dignissimos, atque ipsam, quod nisi odit doloribus facilis aliquam numquam eaque magni necessitatibus. Cras commodo ante mauris, at vulputate risus mattis a. Suspendisse potenti. Donec suscipit neque a facilisis varius. Nulla id ipsum mauris. Donec tempor finibus metus.</p>
        <button className="get-started-btn">Get Started</button>
        <div className="thumbnails">
        <img src={fit1} alt="Thumbnail 1" />
        <img src={fit2} alt="Thumbnail 2" />
        <img src={fit3} alt="Thumbnail 3" />
      </div>
      </div>
     
    </div>
  );
}

export default About;
