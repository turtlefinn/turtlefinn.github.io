import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import Typical from "react-typical";
import { Label, Segment } from "semantic-ui-react";

class Header extends Component {
    render() {
      const config = {
        num: [1, 2],
        rps: 1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-50, 50],
        alpha: [0.6, 0],
        scale: [0.1, 0.5],
        body: "/padlock.png", // Icon made by https://www.flaticon.com/authors/surang
        position: "all",
        color: ["#000000"],
        cross: "dead",
        random: 10,
      };
  
      return (
        <header id="home">
          <ParticlesBg type="custom" config={config} bg={true} />
          {/*<ParticlesBg type="custom" config={config} bg={true} />*/}
  
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
              Hide navigation
            </a>
  
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
  
              <li>
                <a className="smoothscroll" href="#about">
                  Summary
                </a>
              </li>
  
              <li>
                <a className="smoothscroll" href="#resume">
                  Work Experience
                </a>
              </li>
  
              <li>
                <a className="smoothscroll" href="#education">
                  Education
                </a>
              </li>
  
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Projects
                </a>
              </li>
  
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
  
          <div className="row banner">
            <div className="banner-text">
              <Fade bottom>
                <h1 className="responsive-headline" style={{ color: "#3CB371" }}>
                  <Typical
                    steps={[
                      "Aastha",
                      2000,
                      "Eng",
                      2000,
                      "OSS Contributor",
                      2000,
                    ]}
                    loop={Infinity}
                    wrapper="p"
                  />
                </h1>
              </Fade>
              <hr
                style={{
                  maxWidth: "100px",
                  borderWidth: "3px",
                  borderColor: "#F05F40",
                }}
              />
              <Segment inverted color={"black"}>
                <Label
                  color={"teal"}
                  size={"massive"}
                  style={{ marginRight: "2rem" }}
                >
                  C
                </Label>
                <Label
                  color={"green"}
                  size={"massive"}
                  style={{ marginRight: "2rem" }}
                >
                  C++
                </Label>
                <Label
                  color={"blue"}
                  size={"massive"}
                  style={{ marginRight: "2rem" }}
                >
                  Python
                </Label>
                <Label
                  color={"orange"}
                  size={"massive"}
                  style={{ marginRight: "2rem" }}
                >
                  Go
                </Label>
                <Label
                  color={"violet"}
                  size={"massive"}
                  style={{ marginRight: "2rem" }}
                >
                  Java
                </Label>
                <Label color={"grey"} size={"massive"}>
                  JavaScript
                </Label>
              </Segment>
            </div>
          </div>
  
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      );
    }
  }
  
  export default Header;