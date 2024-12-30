const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about-me.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a Full stack Developer with over 2 years of
                  experience.{" "}
                </h3>
                <p>
                  {`I'm`} a aslo Freelancer Front-end Developer with over 1 years of
                  experience. {`I'm`} from mumbai. I code and create web
                  elements for amazing people around the world. I like work with
                  new people. New people new Experiences.
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">9-10</span>
                      <div className="media-body">
                        Projects <br />
                        Completed.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">2</span>
                      <div className="media-body">
                        Project <br />
                        Deployed.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
            <li>
                <span>10th SSC</span>
                <h6>Above 90%</h6>
                <p>Mumbai Maharashtra</p>
              </li>
              <li>
                <span>12th SHC</span>
                <h6>above 90%</h6>
                <p>Mithibai Collage vile parle</p>
              </li>
              <li>
                <span>B-tech</span>
                <h6>IT Engineering</h6>
                <p>2023-2027</p>
                <p>Vppcoe & VA</p>
              </li>
              <li>
                <span>web-development</span>
                <h6>Full stack </h6>
                <p>Online</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} a full stack Developer . I code and create web elements for amazing people
                around the world. I like work with new people. New people new
                Experiences.
              </p>
              <div className="skill-lt">
                <h6>Java</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "96%" }}>
                    <span data-toggle="tooltip" title="96%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>JavaScript</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>React</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "98%" }}>
                    <span data-toggle="tooltip" title="98%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Mysql</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "97%" }}>
                    <span data-toggle="tooltip" title="98%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Wordpress</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "97%" }}>
                    <span data-toggle="tooltip" title="98%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>C++</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }}>
                    <span data-toggle="tooltip" title="98%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/img_1.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>Event Calander</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                  I have developed an event calendar application where users can add events to ensure they don't forget important dates. 
                  
                  The project is built entirely with React, leveraging its full functionality, and styled with TailwindCSS for a 
                  clean and modern interface.
                   I focused on creating an intuitive UI/UX, complemented by smooth animations for an engaging user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/img_2_of_netflix_clone.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>Clone of Netflix</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                  I have developed a Netflix clone only the frontend-part,
                   utilizing React and its frameworks for seamless functionality. The project replicates Netflix’s 
                   UI/UX, including features like responsive design and content browsing.
                   This demonstrates my skills in React and the ability to build dynamic, visually appealing interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/Tiffine_service.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end & Back-end  Development</h6>
                  <label>Online Tiffin Service</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                  I have developed a fully functional online tiffin service website,
                   implementing both the frontend and backend. The platform enables users to browse menus,
                   place orders, and manage subscriptions seamlessly, showcasing my expertise in full-stack development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;


// import React, { useEffect } from 'react';

// const About = () => {
//   const skills = [
//     { name: "Java", level: 50 },
//     { name: "JavaScript", level: 92 },
//     { name: "React", level: 98 },
//     { name: "MySQL", level: 97 },
//     { name: "WordPress", level: 97 },
//     { name: "C++", level: 90 }
//   ];

//   useEffect(() => {
//     // Animate skill bars on scroll
//     const skillBars = document.querySelectorAll('.skill-bar-fill');
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate');
//         }
//       });
//     });

//     skillBars.forEach(bar => observer.observe(bar));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="about" className="about-section">
//       <div className="container">
//         {/* Profile Section */}
//         <div className="profile-grid">
//           <div className="profile-image">
//             <div className="image-container">
//               <img src="/api/placeholder/600/600" alt="Profile" />
//               <div className="image-overlay">
//                 <h3>Full Stack Developer</h3>
//                 <p>Mumbai, India</p>
//               </div>
//             </div>
//           </div>

//           <div className="profile-content">
//             <h2 className="gradient-text">About Me</h2>
//             <p className="profile-description">
//               I'm a Full Stack Developer with over 2 years of experience, specializing in creating exceptional web experiences. 
//               Based in Mumbai, I collaborate with amazing people worldwide, bringing innovative ideas to life.
//             </p>
            
//             <div className="stats-grid">
//               <div className="stat-card">
//                 <span className="stat-number">9-10</span>
//                 <p className="stat-label">Projects Completed</p>
//               </div>
//               <div className="stat-card">
//                 <span className="stat-number">2</span>
//                 <p className="stat-label">Projects Deployed</p>
//               </div>
//             </div>

//             <div className="button-group">
//               <button className="btn btn-primary">
//                 Contact Me
//                 <span className="btn-icon">→</span>
//               </button>
//               <button className="btn btn-secondary">
//                 Portfolio
//                 <span className="btn-icon">→</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Skills Section */}
//         <div className="skills-section">
//           <h2 className="section-title">My Skills</h2>
//           <div className="skills-grid">
//             {skills.map((skill, index) => (
//               <div key={skill.name} className="skill-card">
//                 <div className="skill-header">
//                   <h6 className="skill-name">{skill.name}</h6>
//                   <span className="skill-percentage">{skill.level}%</span>
//                 </div>
//                 <div className="skill-bar">
//                   <div 
//                     className="skill-bar-fill"
//                     style={{'--skill-level': `${skill.level}%`}}
//                     data-delay={index * 0.1}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;