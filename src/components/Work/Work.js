import React from 'react'
import {
    WorkSection,
    WorkHeaderText,
    WorkExperience,
    WorkExpSection
} from "../../ui"
export default function Work() {
    return (
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
    )
}
