import React from 'react'
import {AboutMe, AboutMeText,AboutMeTextHeader, AboutMeTextParagraph, SVGImageSection, SVGImage} from "../../ui";
import AboutText from "./AboutText"
import Code from "../../img/code.svg"
export default function About() {
    return (
        <AboutMe id="aboutme">
        <AboutMeText>
          <AboutMeTextHeader>About Me</AboutMeTextHeader>
          <AboutMeTextParagraph>{AboutText}</AboutMeTextParagraph>
        </AboutMeText>
        <SVGImageSection>
          <SVGImage src={Code} alt="illustration of a software developer"></SVGImage>

      </SVGImageSection>
      </AboutMe>
    )
}
