import "./projects.css";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import Flexiwheel from "../../Images/FlexiWheel.PNG";
import Anthropologie from "../../Images/Anthropologie.PNG";
import Beutiquee from "../../Images/Beutiquee.PNG";
import taxtim from "../../Images/taxtim.PNG";
import alphaFinance from "../../Images/alphaFinance.png";
import alphaFinance2 from "../../Images/alphaFinance2.png";
import myyoutube from "../../Images/my-youtube.png";

function Projects() {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className="projects-projects" id="projects">
      <div class="text-divider-project"></div>
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-container">
        {/* 1st project */}
        <div className="project-card">
          <div className="project-card-container">
            <div className="project-img">
              <img src={Flexiwheel} alt="Flexi Wheel" />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">Flexi Wheel</h1>
              <p className="project-description">
                Flexi Wheels operates on a self-drive model, which means that
                customers can rent a car and drive it themselves, rather than
                hiring a driver. The company offers a variety of car models to
                choose from, and customers can book cars through the Flexi
                Wheels website or mobile app.
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">HTML</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">CSS</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">JavaScript</p>
                </div>

                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/136/136525.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">JSON</p>
                </div>
              </div>
              <div className="project-card-btn">
                <div
                  onClick={() =>
                    openLink(
                      `https://github.com/PrashantSathawane/fearful-doll-6867`
                    )
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() =>
                    openLink(
                      `https://644dfad2252c9713f067d005--lovely-pasca-14e6b1.netlify.app/`
                    )
                  }
                  className="project-deployed-link"
                >
                  Deploy <HiExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2st project */}
        <div className="project-card">
          <div className="project-card-container">
            <div className="project-img">
              <img src={myyoutube} alt="Flexi Wheel" />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">MY-YOUTUBE</h1>
              <p className="project-description">
                This project is clone of yotube user can listen use it same as
                yotube.com and also can be used to search youtube videos.
              </p>
              <div className="project-tech-stack">
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">CSS</p>
                </div>

                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">React Js</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://lh5.googleusercontent.com/fIY8_nCkUbVDqzQA_RNU_H7u6X3hKQB9hm89AoK_6R4s3nGcUqLiK5UEJaNBlOksqVI=w2400"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">Redux</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://img.icons8.com/color/256/chakra-ui.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">Chakra UI</p>
                </div>
              </div>
              <div className="project-card-btn">
                <div
                  onClick={() =>
                    openLink(`https://github.com/Upendrapal0607/you-tub-clone`)
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() =>
                    openLink(
                      `https://65e199efdd7015a03c9cef3f--legendary-snickerdoodle-fbda47.netlify.app/`
                    )
                  }
                  className="project-deployed-link"
                >
                  Deploy <HiExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3nd project */}
        <div className="project-card">
          <div className="project-card-container">
            <div className="project-img">
              <img src={Anthropologie} alt="dream-park" />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">DREAM PARK</h1>
              <p className="project-description">
                dream-park is a uniquefull life style online shopping
                destination which deals with women (luxury) grossery and kids
                products like makeup product,accessories shoes, hats,
                hoodies,multiple type of cloth and shorts etc.
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">HTML</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">CSS</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">JavaScript</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">Node.js</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">express.js</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://newrelic.com/sites/default/files/styles/800w/public/2021-10/mongo_logo.jpg?itok=Z1PabBZB"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">mongoDB</p>
                </div>

                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://img.icons8.com/color/256/chakra-ui.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">Chakra UI</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">React Js</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/136/136525.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">JSON</p>
                </div>
              </div>
              <div className="project-card-btn">
                <div
                  onClick={() =>
                    openLink(
                      `https://github.com/Upendrapal0607/ecommerce-app-8386`
                    )
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() =>
                    openLink(
                      `https://655733e471ab247d5af23b83--ubiquitous-starlight-db9333.netlify.app/`
                    )
                  }
                  className="project-deployed-link"
                >
                  Deploy <HiExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4rd project */}
        <div className="project-card">
          <div className="project-card-container">
            <div className="project-img">
              <img src={taxtim} alt="Flexi Wheel" />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">Taxtim</h1>
              <p className="project-description">
                TaxtTim is an online tool that assists non tax practitioners
                with their tax return s Their goal is to make it as easy as
                possible with little to no effort but without the hefty
                practitioners' cost. They have a lot of knowledge that can be
                accessed and help the average Joe.
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">HTML</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">React Js</p>
                </div>
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon-thumbnail.png"
                    alt="TypeScript"
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">TypeScript</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">CSS</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">JavaScript</p>
                </div>

                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://img.icons8.com/color/256/chakra-ui.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">Chakra UI</p>
                </div>

                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/136/136525.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">JSON</p>
                </div>
              </div>
              <div className="project-card-btn">
                <div
                  onClick={() =>
                    openLink(
                      `https://github.com/DeveshSuryawanshi/tart-clover-1298`
                    )
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() =>
                    openLink(`https://willowy-clafoutis-b9dee5.netlify.app/`)
                  }
                  className="project-deployed-link"
                >
                  Deploy <HiExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* project-5 */}
        <div className="project-card">
          <div className="project-card-container">
            <div className="project-img">
              <img src={alphaFinance} alt="alphaFinance" />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">Charity Hero</h1>
              <p className="project-description">
                This project is based on a website where we can donate to a
                charity and also make a charity request by making an account for
                this website.
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">HTML</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">React Js</p>
                </div>
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon-thumbnail.png"
                    alt="TypeScript"
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">TypeScript</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">Node.js</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">express.js</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://newrelic.com/sites/default/files/styles/800w/public/2021-10/mongo_logo.jpg?itok=Z1PabBZB"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">mongoDB</p>
                </div>

                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">CSS</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">JavaScript</p>
                </div>

                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://img.icons8.com/color/256/chakra-ui.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">Chakra UI</p>
                </div>

                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/136/136525.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">JSON</p>
                </div>
              </div>
              <div className="project-card-btn">
                <div
                  onClick={() =>
                    openLink(`https://github.com/neo1710/CharityHero`)
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() => openLink(`https://charityhero.vercel.app/`)}
                  className="project-deployed-link"
                >
                  Deploy <HiExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6th project */}
        <div className="project-card">
          <div className="project-card-container">
            <div className="project-img">
              <img src={Beutiquee} alt="Beautique.com" />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">Beautique.com</h1>
              <p className="project-description">
                Beautique.com is a online shopping website which deals with
                women and kids products like makeup product,accessories shoes,
                hats, hoodies and shorts alot.
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">HTML</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">CSS</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">JavaScript</p>
                </div>

                {/* <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://img.icons8.com/color/256/chakra-ui.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        Chakra UI
                                    </p>
                                </div> */}
              </div>
              <div className="project-card-btn">
                <div
                  onClick={() =>
                    openLink(
                      `https://github.com/Upendrapal0607/satisfying-scale-7625`
                    )
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() =>
                    openLink(`https://timely-paprenjak-287908.netlify.app/`)
                  }
                  className="project-deployed-link"
                >
                  Deploy <HiExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 7th project */}
        <div className="project-card">
          <div className="project-card-container">
            <div className="project-img">
              <img src={alphaFinance2} alt="alphafinance" />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">ALPHA FINANCE</h1>
              <p className="project-description">
                lets you see the balance, transactions and invoices for your
                credit cards. This app simplifies your life. You can for
                instance: Get notifications of important events, purchases or if
                you reached your spending limits.
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">HTML</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">CSS</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">JavaScript</p>
                </div>

                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://img.icons8.com/color/256/chakra-ui.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">Chakra UI</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">React Js</p>
                </div>
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon-thumbnail.png"
                    alt="TypeScript"
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">TypeScript</p>
                </div>

                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">Node.js</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">express.js</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://newrelic.com/sites/default/files/styles/800w/public/2021-10/mongo_logo.jpg?itok=Z1PabBZB"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">mongoDB</p>
                </div>
              </div>
              <div className="project-card-btn">
                <div
                  onClick={() =>
                    openLink(
                      `https://github.com/Upendrapal0607/gaping-spring-1880`
                    )
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() =>
                    openLink(
                      `https://65e1a08e232d678fccd2ca7c--dynamic-cajeta-5ebb86.netlify.app/`
                    )
                  }
                  className="project-deployed-link"
                >
                  Deploy <HiExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
