import React from 'react'
import arrowRight from "./img/arrow_right.svg"
import Work from "../Work"
export const Skill = () => {
    return (
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
      <Work/>
     </Skills>
    )
}
