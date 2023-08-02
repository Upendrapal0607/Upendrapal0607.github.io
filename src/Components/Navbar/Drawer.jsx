import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
 
import { HiDownload } from "react-icons/hi";
import { Link } from "react-scroll";
// import { Button } from 'react-scroll'
const NavbarDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
      {/* <FontAwesomeIcon icon={solid("bars")} /> */}
      <FontAwesomeIcon icon={faBars} />
      {/* <FontAwesomeIcon icon={faCar} /> */}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <div className="drawerbody">
             
              <div>
                <Link
                  to="home"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={onClose}
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
                  onClick={onClose}
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
                  onClick={onClose}
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
                  onClick={onClose}
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
                  onClick={onClose}
                >
                  Contact
                </Link>
              </div>

              <div>
                <Button
                  id="resume-button-1"
                  className="navbar-resume"
                  onClick={() => {
                    onClose();
                    openLink(
                      "https://drive.google.com/file/d/1UL5u7efunj8uxtYTD3D5RZ1VnTuOZFwg/view?usp=sharing"
                    );
                  }}
                >
                  <a
                    id="resume-link-1"
                    href="https://drive.google.com/u/0/uc?id=1UL5u7efunj8uxtYTD3D5RZ1VnTuOZFwg&export=download"
                  >
                    Resume <HiDownload />
                  </a>
                </Button>
              </div>

              {/* <a id="resume-link-1" href="https://drive.google.com/uc?id=1l482A6NQoXg88W5pzP1Iigl5CV-1SlsO&export=download"></a>
                        
                  </a>  */}
            </div>

            {/* <div>
                   
                     

                  </div> */}

            {/* <Input placeholder='Type here...' /> */}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            {/* <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavbarDrawer;
