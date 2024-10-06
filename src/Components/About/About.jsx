import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/1.png'
const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} />
      </div>
      <div className='about-sections'>
        <div className='about-left'>
                  <img src={profile_img} />

        </div>

        <div className="about-right">
            <div className="about-para">
                <p>Versatile professional with over two years and two months of experience in IT Industry
and currently serving as Web Developer. Excellence in designing and developing static
websites using HTML CSS JAVASCRIPT.Accomplished academic foundation with Master of Computer Applications (MCA) from
Indira Gandhi National Open University (IGNOU) and Bachelor of Science in Computer
Science (BSc - Cs) from BS Abdur Rahman. Articulate communicator with outstanding,
analytical abilities, problem-solving, decision-making and interpersonal skills.</p>
                
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width:"70%" }}/></div>
                <div className="about-skill"><p>React JS</p> <hr style={{ width:"70%" }}/></div>
                <div className="about-skill"><p>JavaScript</p> <hr style={{ width:"80%" }}/></div>
                <div className="about-skill"><p>Next JS</p> <hr style={{ width:"60%" }}/></div>
                <div className="about-skill"><p>PHP Laravel</p> <hr style={{ width:"90%" }}/></div>


            </div>
        </div>

      </div>
      <div className="about-achivements">
        <div className="about-achivement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className='about-achivement'>
            <h1>20+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className='about-achivement'>
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}


export default About
