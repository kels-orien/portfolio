import React from 'react';
import './App.css';
import About from "./components/About"
import ContactMe from "./components/ContactMe"
import Top from "./components/Top"
import downloadCloud from "./img/download_cloud.svg"
import { 
  Container, 
  Profile, 
  ProfileImage, 
  ProfileImageDiv, 
  Main, 
  Dot, 
  ProfileText, 
  FontThick, 
  PText, 
  ProfileDownloadSection,
  ProfileButton,
  ProfileButtonImg,
  Footer,
} from "./ui"



function App() {
  return (
    <div className="App">
      <Top/>
        <Container id="home">
          <Main>
            <Profile id="aboutme">   
              <ProfileImageDiv>
                <ProfileImage alt="alt=profile-photo" src="https://res.cloudinary.com/dofiasjpi/image/upload/v1580586831/portfolio/headshot.jpg"/>    
              </ProfileImageDiv>
              <Dot/>
              <ProfileText><FontThick>Hi <span role="img" aria-label="hello emoji">👋,</span></FontThick><PText>I'm Kohwo Orien a front end engineer currently living in Warri, Nigeria.</PText>
              <ProfileDownloadSection>
                  <ProfileButton href="https://docs.google.com/document/d/196UyPfl3TSczR_RdK0ifuUFuxcNGw05-a1itgcYliuo/edit?usp=sharing">Résumé
                    <ProfileButtonImg alt="arrow facing right direction" src={downloadCloud}/>
                  </ProfileButton>
            </ProfileDownloadSection>
            </ProfileText>
          </Profile>
        </Main>
        <About/>
     </Container>
     <Footer>
        <ContactMe/>
     </Footer>
    </div>
  );
}

export default App;
