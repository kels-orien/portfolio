import styled from "styled-components";
import {device, deviceMax} from "./device"


export const Header = styled.header`
    height: 4.4rem;
    z-index: 1100;
    background-color: rgb(255, 255, 255);
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    white-space: nowrap;
    box-shadow: rgba(199, 150, 116, 0.07) 0px 2px 0px 0px;
    display: block;

    .logo-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 48px;
        padding: 0rem 1rem;
        -webkit-box-align: center;
        align-items: center;

        .icon {
            align-content: flex-start;
            -webkit-box-align: center;
            align-items: center;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            -webkit-box-pack: start;
            justify-content: flex-start;
            text-transform: capitalize;
            padding-top: 0rem;
            padding-right: 0rem;
            padding-bottom: 0rem;
            padding-left: 0rem;
            margin-top: 0rem;
            margin-right: 0rem;
            margin-bottom: 0rem;
            margin-left: 0rem;
            transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

            .icon-name {
                display: block;
                position: relative;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-weight: 700 !important;
                font-size: 1rem !important;
                line-height: 1.5 !important;
                margin: 0px;
                overflow: hidden;
                transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
            }

        }
        .menu {
            display: flex;
            flex-direction: row;
            -webkit-box-align: stretch;
            align-items: stretch;
            padding: 0rem 1rem;
            justify-content: flex-end;
            -webkit-justify-content: flex-end;
            -webkit-box-pack: end;
            display: webkit-flex;

            .menu-box {
                display: flex;
                padding: 0.5rem;
                margin: 0rem 0.5rem;
    
                .menu-box-item {
                    cursor: pointer;
                    display: inline-block;
                    max-width: 100%;
                    text-overflow: ellipsis;
                    vertical-align: bottom;
                    font-weight: 700 !important;
                    font-size: 0.809023rem !important;
                    line-height: 1.5 !important;
                    padding: 0.5rem;
                    margin: 0rem 0.5rem;
                    overflow: hidden;
                    text-decoration: none;
                    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
                }
            } 

        }

        
    }
`

export const Main = styled.main`
    margin-top: 1rem;
    margin-top: 8rem;
`

export const Container = styled.div`
    margin-right: 5vw;
    margin-left: 5vw;

    ${device.laptop`
        margin-right: 5vw;
        margin-left: 5vw;`
    }
    ${device.laptopL`
        width: 1300px;
        max-width: 1300px;
        margin: auto;`
    }
`

export const Profile = styled.section`
    display: flex;

    ${deviceMax.mobileL`
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;`
        }
`


export const ProfileImage = styled.img`
    width: 350px;
    box-shadow: 22px 22px 0 #EFEEEE;
    ${device.laptop`
        width: 450px;`
        }

        ${deviceMax.mobileL`
             width: 250px;`
        }
`


export const Dot =  styled.div`
    height: 500px;
    width: 700px;
    right: 0;
    position: absolute;
    z-index: -9;
    margin-bottom: 15px;
    background-image: url(https://res.cloudinary.com/dofiasjpi/image/upload/v1580743806/portfolio/plus1.png);
    background-repeat: repeat;

    ${device.laptop`
        right: 4vw;`
    }
`


export const ProfileText = styled.div`
    height: auto;
    text-align: right;
    margin-top: auto;
    margin-right: 30px;
    margin-left: auto;
    margin-bottom: 10px;
    padding-left: 1.2rem;


    ${device.laptop`
        padding-left: 2rem;
        margin-bottom: 4rem;`
    }

    ${deviceMax.mobileL`
    margin-top: 2.3rem;
    margin-right: 5vw;`
    }
`

export const ProfileImageDiv = styled.div`
    margin-right: 10px;
`

export const FontThick = styled.h1`
    font-size: 2rem;
    color:rgb(76, 76, 76);
`

export const PText =  styled.p`
    padding-left: 1.2rem;
    margin-top: .5rem;
    font-size: 2rem
`
export const ProfileDownloadSection =  styled.div`
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin-left: auto;
    -webkit-transition: -webkit-transform .2s;
    transition: -webkit-transform .2s;
    transition: transform .2s;
    transition: transform .2s,-webkit-transform .2s;
    -webkit-transition-delay: .01s;
    transition-delay: .01s;
    margin-top: 2rem;

    ${deviceMax.mobileL`
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    ;`
    }    

    &:hover {
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px);
      }

    
`
export const ProfileButton = styled.a`
    padding: .7rem 1rem;
    margin-top: 10px;
    border-radius: 25px;
    border: none;
    background: rgb(5, 45, 73);
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    -webkit-box-shadow: 0 9px 20px 0 rgba(52,52,52,.27);
    box-shadow: 0 9px 20px 0 rgba(52,52,52,.27);
    text-decoration: none;
    -webkit-transition: -webkit-box-shadow .2s;
    transition: -webkit-box-shadow .2s;
    transition: box-shadow .2s;
    transition: box-shadow .2s,-webkit-box-shadow .2s;
    -webkit-transition-delay: .01;
    transition-delay: .01;
`

export const ProfileButtonImg =  styled.img`
    margin-left: 10px;
    vertical-align: middle;
  `

export const AboutMe = styled.section`
    margin-left: 5%;
    margin-right: 5%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 7rem;
`
export const AboutMeText =  styled.div`
    display: block
`

export const AboutMeTextHeader = styled.h1`
    font-size: 3rem;
`

export const AboutMeTextParagraph = styled.p`
    text-align: left;
    font-size: 1.4rem;
}
`
export const SVGImageSection= styled.section`

    ${device.tablet`
    margin-top: auto;
    padding-left: 3rem;
    ;`
    }
    ${device.laptop`
        margin-top: auto;
    ;`
}
`

export const SVGImage = styled.img`
    width: 200px;

    ${device.tablet`
        width: 200px;
    ;`
    }
    ${device.laptop`
        width: 250px;
    ;`
}
`
export const STitle = styled.h1`
        margin-bottom: 1rem;
        font-size: 1.4rem;
`
export const Skills = styled.section`
    padding-bottom: 1rem;
    background-image: url(https://res.cloudinary.com/dofiasjpi/image/upload/v1580743806/portfolio/plus1.png);
    background-repeat: repeat;
    margin-top: 7rem;
`

export const SkillsTools= styled.div`
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-top: 3rem;   

    ${device.laptop`
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-pack: distribute;
        justify-content: space-around;`
    }
    `

export const SkillsSection = styled.div`
    background: #eeeeee;
    width: 250px;
    height: 250px;
    border-radius: 3rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 3.5rem;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    line-height: 1.2rem;
    box-shadow: 0 20px 50px hsla(0,0%,69.4%,.7);
`

export const ToolsSection = styled.div`
    background: rgb(5, 45, 73);
    color:  white;
    width: 250px;
    height: 250px;
    border-radius: 3rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 3.5rem;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    line-height: 1.2rem;
    box-shadow: 0 20px 50px hsla(0,0%,69.4%,.7);
`

export const ProjectsSection = styled.section`
    margin-top: 3rem;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
`


export const ProjectsButton =  styled.a`
    background: rgb(5, 45, 73);
    color:  white;
    display: inline-block;
    padding: .6rem .75rem;
    text-decoration: none;
    -webkit-box-shadow: 0 20px 50px hsla(0,0%,69.4%,.7);
    box-shadow: 0 20px 50px hsla(0,0%,69.4%,.7);
    border-radius: 3rem;
    -webkit-transition: -webkit-transform .2s;
    transition: -webkit-transform .2s;
    transition: transform .2s;
    transition: transform .2s,-webkit-transform .2s;
    -webkit-transition-delay: .01s;
    transition-delay: .01s;
`
  export const ProjectButtonImg =  styled.img`
     vertical-align: middle;
     padding-left: .2rem;
  `

  export const WorkSection =  styled.section`
     padding-bottom: 1rem;
     margin-top: 7rem;

     
    ${device.tablet`
        padding-right: 5%;
        padding-left: 5%;`
    }
  `

  export const WorkHeaderText = styled.h1`
    font-size: 3rem;
  `
  export const WorkExperience = styled.div`
    display: block;
  `
  export const WorkExpSection = styled.section`
    background: #fff;
    padding: 2rem 1em;
    margin-bottom: 3rem;
    border-radius: 2rem;
    -webkit-box-shadow: 0 20px 50px hsla(0,0%,87.8%,.7);
    box-shadow: 0 20px 50px hsla(0,0%,87.8%,.7);
    border: none;
    line-height:2rem;
    margin-top: 3rem;
  `
export const Footer = styled.footer`
    padding-bottom: 6rem;
    padding-top: 3rem;
    background: rgb(5, 45, 73);
    
`

export const ContactSection = styled.section`
    color: #eeeeee;
    margin-right: 5vw;
    margin-left: 5vw;
`

export const FooterHeaderText = styled.h1`
    font-size: 2rem;

`
export const FooterText = styled.h1`
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 3rem;
    font-family: Signika,sans-serif;

`
export const FormSection = styled.section`
    
        ${device.tablet`
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            ms-flex-pack: justify;
            justify-content: space-between;`
        }
`
export const FormSectionParagraph = styled.p`


    ${device.tablet`
        font-size: 2rem;
        text-align: left;
        -ms-flex-preferred-size: 40%;
        flex-basis: 40%;
        -ms-flex-item-align: center;
        align-self: center;
    `  }
`

export const FormImage = styled.img`
    vertical-align: middle;
    width: 120px;
    margin-bottom: 1rem;
`

export const FormContainer  = styled.div`
    padding-bottom: 6rem;
    padding-top: 3rem;
    margin-top: 7rem;

    ${device.mobileL`
        padding-top: 2rem;
        margin-top: 4.5rem;
    `  }
`
export const ContactDiv = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    ${device.tablet`
        flex-basis: 45%;
    `  }
`

export const ContactForm = styled.form`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    ${device.tablet`
        flex-basis: 45%;
    `  }
`

export const FormDiv =  styled.div`
    margin-bottom: 1rem;
`

export const FormInputField = styled.div`
    height: 35px;
    max-height: 35px;
    overflow: hidden;
    border-top-left-radius: 7px;
    margin-bottom: 1rem;
    border-bottom-left-radius: 7px;`
    


export const NameLabel = styled.label`
    color: #000000;
    background: #eeeeee;
    height: 100%;
    padding: 1rem .6rem;;    
`

export const Input = styled.input`
    border: none;
    padding: .4rem;
    font-size: .9rem;
    height: 100%;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    color: black;
`

export const FormButtonImage =  styled.img`
    width: auto;
    vertical-align: middle;
    margin: 0;
    margin-left: .3rem;
`

export const FormTextArea = styled.textarea`
    resize: none;
    border-radius: 7px;
    padding: .7rem;
    color: black;
`

export const FormButton  = styled.button`
    margin-top: 1rem;
    border: none;
    cursor: pointer;
    background: #eeeeee;
    color: #000000;
    font-size: 1.2rem;
    padding: .65rem .9rem;
    border-radius: 3rem;
`

export const SocialMediaSection = styled.div`
    width: 300px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;

    ${device.mobileL`
        margin-top: 2rem;
        margin-left: auto;
        margin-right: auto;
    `  }
` 

export const SocialMediaImg = styled.img`
    width: 40px;
    border-radius: 50%;
    -webkit-box-shadow: 0 20px 50px rgba(0,0,0,.425);
    box-shadow: 0 20px 50px rgba(0,0,0,.425);
`