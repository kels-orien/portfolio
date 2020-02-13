import React from 'react'
import {Header} from"../../ui"
import { Link } from "react-scroll";

export default function Top() {
    return (
        <Header >
        <div className="logo-box">
          <div className="icon">

            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className ="icon-name">KORIEN</Link>
            
          </div>
          <div className ="menu">
          <div className = "menu-box">
              <Link activeClass="active"
                to="contactme"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} className="menu-box-item">Contact Me</Link>
              <Link activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} className="menu-box-item">Portfolio
                </Link>
              <Link activeClass="active"
                to="aboutme"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} className="menu-box-item">About Me</Link>
            </div>
          </div>
        </div>

      </Header>
    )
}
