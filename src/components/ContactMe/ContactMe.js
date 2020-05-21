import React from 'react'
import LinkedIn from "../../img/linkedin.svg";
import Twitter from "../../img/twitter.svg";
import Github from "../../img/github.svg";
import Person from "../../img/person_avartar.svg";
import Send from "../../img/send.svg"
import {
  FormContainer,
  ContactSection,
  FooterHeaderText,
  FooterText,
  FormSection,
  FormSectionParagraph,
  FormImage,
  ContactForm,
  ContactDiv,
  FormInputField,
  NameLabel,
  Input,
  FormTextArea,
  FormButton,
  FormButtonImage,
  SocialMediaSection,
  SocialMediaImg
} from "../../ui"


export default function ContactMe() {
  return (
    <FormContainer>
      <ContactSection id="contactme">
        <FooterHeaderText>Wanna Build Something</FooterHeaderText>
        <FooterText>Exciting?</FooterText>
        <FormSection>
          <FormSectionParagraph>Please fill the form and I will reply ASAP</FormSectionParagraph>
          <ContactDiv>
            <FormImage src={Person} alt="Illustration of an individual" />
            <ContactForm action="https://formspree.io/xeqgldqk" method="POST" name="Contact Me">
              <FormInputField>
                <NameLabel>Name</NameLabel>
                <Input type="text" name="name" id="name" size="25" required="required" />
              </FormInputField>

              <FormInputField>
                <NameLabel>Email</NameLabel>
                <Input type="email" name="email" id="email" size="25" required="required" />
              </FormInputField>

              <FormTextArea name="message" id="message" cols="30" rows="10" placeholder="Type message here..." required="required"></FormTextArea>
              <FormButton type="submit">
                Submit
                <FormButtonImage src={Send} alt="sending icon" id="send-icon" />

              </FormButton>

            </ContactForm>

          </ContactDiv>
        </FormSection>
      </ContactSection>
      <SocialMediaSection>
        <a href="https://twitter.com/kels_orien"><SocialMediaImg src={Twitter}></SocialMediaImg></a>
        <a href="https://github.com/kels-orien"><SocialMediaImg src={Github}></SocialMediaImg></a>
        <a href="https://ng.linkedin.com/in/oghenekohwo-orien-45718326"><SocialMediaImg src={LinkedIn}></SocialMediaImg></a>
      </SocialMediaSection>
    </FormContainer>
  )
}
