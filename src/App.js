// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { particlesOptions } from "./particalsConfig";
import {  useColorMode } from "@chakra-ui/react";


import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/projects/Projects";
// import Static from "./Components/Static/Static";
import GitHub from "./Components/Github/Github";

// import Footer from "./Components/Footer/Footer";
import Contact from "./Components/contact/Contact";
import BackToTop from "./Components/Home/BacktoTop";
import Footer from "./Components/Footer/Footer";

function App() {
  //    const particlesInit = (engine) => {
  //   loadFull(engine);
  // };
 
  const { colorMode, toggleColorMode } = useColorMode(false);

  return (
      <div
          className="App" style={{backgroundColor:"black"}}>
         {/* style={{
          backgroundColor: colorMode === "light" ? "#FAFAFA" : "#121212",
          }} */}
          
           
     {/* <Particles init={particlesInit} options={particlesOptions} /> */}
          <Navbar colorMode={colorMode} />
          <Home colorMode={colorMode} />
          <About colorMode={colorMode} />
          <Skills colorMode={colorMode} />
          <Project colorMode={colorMode} />
          {/* <Static colorMode={colorMode} /> */}
          <GitHub colorMode={colorMode} />
          <Contact colorMode={colorMode} />
          <Footer colorMode={colorMode} />
          <BackToTop />
          {/* <Footer colorMode={colorMode} /> */}
      </div>
  );
}

export default App;

