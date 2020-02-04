import React from 'react';
import './App.css';
import arrowRight from "./img/arrow_right.svg"
import downloadCloud from "./img/download_cloud.svg"
import Code from "./img/code.svg"
import { 
  Header, 
  Container, 
  Profile, 
  ProfileImage, 
  ProfileImageDiv, 
  Main, 
  Dot, 
  ProfileText, 
  FontThick, 
  PText, 
  Skills, 
  SkillsTools, 
  SkillsSection,
  ToolsSection,
  STitle,
  ProjectsSection,
  ProjectsButton,
  ProjectButtonImg,
  ProfileDownloadSection,
  ProfileButton,
  ProfileButtonImg,
  AboutMe,
  AboutMeText,
  AboutMeTextHeader,
  AboutMeTextParagraph,
  SVGImageSection,
  SVGImage,
  WorkSection,
  WorkHeaderText,
  WorkExperience,
  WorkExpSection,
} from "./ui"

function App() {
  return (
    <div className="App">
      <Header>
        <div className="logo-box">
          <div className="icon">

            <a className ="icon-name">KORIEN</a>
            
          </div>
          <div className ="menu">
          <div className = "menu-box">
              <a className="menu-box-item">Hire Me</a>
              <a className="menu-box-item">Portfolio</a>
            </div>
          </div>
        </div>

        
      </Header>
      <Container>
      <Main>
        
          <Profile>
            
              <ProfileImageDiv>
                <ProfileImage alt="alt=profile-photo" src="https://res.cloudinary.com/dofiasjpi/image/upload/v1580586831/portfolio/headshot.jpg"/>    

              </ProfileImageDiv>
              <Dot/>
              <ProfileText><FontThick>Hi 👋,</FontThick><PText>I'm Kohwo Orien a front end engineer currently living in Warri, Nigeria.</PText>
              <ProfileDownloadSection>
                <ProfileButton>Résumé
                <ProfileButtonImg alt="arrow facing right direction" src={downloadCloud}/>

                </ProfileButton>

            </ProfileDownloadSection>
              </ProfileText>
            
          </Profile>

        

      </Main>
      <AboutMe>
        <AboutMeText>
          <AboutMeTextHeader>About Me</AboutMeTextHeader>
          <AboutMeTextParagraph>I build delightful user interfaces with a professsional and delicate touch. 
I'm a Javascript nerd that loves solving problems.
I write acticles about frontend development in medium and other blogs.</AboutMeTextParagraph>
        </AboutMeText>
        <SVGImageSection>
          <SVGImage src={Code} alt="illustration of a software developer"></SVGImage>

      </SVGImageSection>
      </AboutMe>

      
     <Skills>
        <SkillsTools>
          <SkillsSection>
            <STitle>Skills</STitle>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJs</li>
                <li>NodeJs</li>
              </ul>
          </SkillsSection>
          <ToolsSection>
          <STitle>Tools</STitle>
              <ul>
                <li>Git</li>
                <li>Heroku</li>
                <li>Gatsby</li>
                <li>Netlify</li>
              </ul>
          </ToolsSection>
        </SkillsTools>
        <ProjectsSection>
        <ProjectsButton>
          View Projects
          <ProjectButtonImg alt="arrow facing right direction" src={arrowRight}/>
        </ProjectsButton>
      </ProjectsSection>
      <WorkSection>
        <WorkHeaderText>
          Work Experience
        </WorkHeaderText>
        <WorkExperience>
            <WorkExpSection>
              <h2>Front-end Developer</h2>
              <h3>Freelancer</h3>
              <p>
                <em>
                  <time datetime="2017-01">January 2017
                  </time> -
                  <time> Present
                  </time>
                </em>
              </p>
            </WorkExpSection>

        </WorkExperience>
      </WorkSection>
     </Skills>
      
     </Container>
    </div>
  );
}

export default App;
