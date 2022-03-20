import React from 'react'
import "../styles/aboutme.scss";
import profImage from '../assets/me.jpg';

function Aboutme() {
  const skills = ['Python', "Flask Framework", "Java", "JavaScripts", "React"]

  return (
      <div className='divContent'>
        <div className='divContent__left'>
          <div id="about" className='divContent__title'>About Me</div>
          <div className="divContent__text">
            Hi! I'm Mindy and I enjoy exploring and learning new things. <br/>
            My interest in computer sprouted from my very first encounter with a computer worm.
            The feelings of anxiousness, later on turned into determination to equip myself with relevant knowledge.<br/><br/>

            Currently I'm working as a Security Analyst at Avanade. <br/>
            I spent most of my time thinking of ways to automate tasks to make life easier.
            This led me to discovering my profound interest in spending my day typing away on IDE. 
            Hence, I'm currently looking for a position in software engineering to further fuel this little interest of mine.<br/>

            <br/>

          Here are some technologies I have been working with recently. <br/>        
          <ul className="techList">
              {skills && skills.map((skill, i) => <li key={i}>◮ {skill}</li>)}
          </ul>
        </div>

        </div>
        <div className="divContent__right">
          <img className="displayPhoto" src={profImage}/>
        </div>
    </div>
    
  )
}

export default Aboutme