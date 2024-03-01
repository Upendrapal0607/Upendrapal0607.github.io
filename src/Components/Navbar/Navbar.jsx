import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { HiDownload } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import NavbarDrawer from "./Drawer";

function Navbar() {
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div id="nav-menu" className="navbar">
      <div className="wrapper">
        <div className="wrapperLeft">
          <Link to="home" smooth={true} offset={-100} duration={500}>
            <h2 className="my-name">UPENDRA PAL</h2>
          </Link>
        </div>
        <div className="wrapperRight">
          <div>
            <Link
              to="home"
              smooth={true}
              offset={-100}
              duration={500}
              className="nav-link home"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="about"
              smooth={true}
              offset={-79}
              duration={500}
              className="nav-link about"
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="skills"
              smooth={true}
              offset={-79}
              duration={500}
              className="nav-link skills"
            >
              Skills
            </Link>
          </div>
          <div>
            <Link
              to="projects"
              smooth={true}
              offset={-79}
              duration={500}
              className="nav-link projects"
            >
              Projects
            </Link>
          </div>
          <div>
            <Link
              to="contact"
              smooth={true}
              offset={-79}
              duration={500}
              className="nav-link contact"
            >
              Contact
            </Link>
          </div>
          <div>
            <a
              href="https://drive.google.com/u/0/uc?id=1UL5u7efunj8uxtYTD3D5RZ1VnTuOZFwg&export=download"
              className="nav-link resume"
              id="resume-link-1"
            >
              <div
                onClick={() =>
                  openLink(
                    "https://drive.google.com/file/d/1UL5u7efunj8uxtYTD3D5RZ1VnTuOZFwg/view?usp=sharing"
                  )
                }
                className="navbar-resume"
                id="resume-button-1"
              >
                Resume <HiDownload />
              </div>
            </a>
          </div>
        </div>
        <div className="responce">
          <NavbarDrawer />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
