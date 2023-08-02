import "./projects.css";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
// import ProjectSet from "./ProjectSet";
// import data from "../../db.json";
import Flexiwheel from "../../Images/FlexiWheel.PNG"
import Anthropologie from "../../Images/Anthropologie.PNG"
import Beutiquee from "../../Images/Beutiquee.PNG"
import taxtim from "../../Images/taxtim.PNG"

function Projects() {
    const openLink = (url) => {
        window.open(url);
    };
    return (
        <div className="projects-projects" id="projects">
            <div class="text-divider-project"></div>
            <h1

                className="projects-heading">
                My Projects
            </h1>
            <div className="projects-container">
                {/* {data.projects.map((elm) => {
          return <ProjectSet key={elm.id} {...elm} />;
        })} */}

                {/* 1st project */}
                <div className="project-card">
                    <div

                        className="project-card-container">
                        <div className="project-img">
                            <img
                                src={Flexiwheel}
                                alt="Flexi Wheel"
                            />
                        </div>
                        <div className="project-card-text">
                            <h1 className="project-title">Flexi Wheel</h1>
                            <p className="project-description">
                            Flexi Wheels operates on a self-drive model, which means that customers
                             can rent a car and drive it themselves, rather than hiring a driver.
                              The company offers a variety of car models to choose from, and customers
                               can book cars through the Flexi Wheels website or mobile app.
                            </p>
                            <div className="project-tech-stack">
                                <div
                                    key={Date.now() + Math.random()}
                                    className="project-skills-card">
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        HTML
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        CSS
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        JavaScript
                                    </p>
                                </div>
                                {/* <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        React Js
                                    </p>
                                </div> */}
                                {/* <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://lh5.googleusercontent.com/fIY8_nCkUbVDqzQA_RNU_H7u6X3hKQB9hm89AoK_6R4s3nGcUqLiK5UEJaNBlOksqVI=w2400"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        Redux
                                    </p>
                                </div> */}
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

                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/136/136525.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        JSON
                                    </p>
                                </div>

                            </div>
                            <div className="project-card-btn">
                                <div
                                    onClick={() =>
                                        openLink(
                                            `https://github.com/PrashantSathawane/fearful-doll-6867`
                                        )
                                    }
                                    className="project-github-link">
                                    GitHub <FaGithub />
                                </div>
                                <div
                                    onClick={() =>
                                        openLink(
                                            `https://644dfad2252c9713f067d005--lovely-pasca-14e6b1.netlify.app/`
                                        )
                                    }
                                    className="project-deployed-link">
                                    Deploy <HiExternalLink />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd project */}
                <div className="project-card">
                    <div

                        className="project-card-container">
                        <div className="project-img">
                            <img
                                src={Anthropologie}
                                alt="Anthropologie"
                            />
                        </div>
                        <div className="project-card-text">
                            <h1 className="project-title">Anthropologie</h1>
                            <p className="project-description">
                            Athropologie.com is a uniquefull life style online 
                            shopping destination which deals with women (luxury) 
                            grossery and kids products like makeup product,accessories shoes, 
                            hats, hoodies,multiple type of cloth and shorts etc.
                            </p>
                            <div className="project-tech-stack">
                                <div
                                    key={Date.now() + Math.random()}
                                    className="project-skills-card">
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        HTML
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        CSS
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        JavaScript
                                    </p>
                                </div>
                               
                                <div
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
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        React Js
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/136/136525.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        JSON
                                    </p>
                                </div>

                            </div>
                            <div className="project-card-btn">
                                <div
                                    onClick={() =>
                                        openLink(
                                            `https://github.com/Upendrapal0607/-light-temper-9603/tree/main/rct-101-Individual-Project/anthropologie-website`
                                        )
                                    }
                                    className="project-github-link">
                                    GitHub <FaGithub />
                                </div>
                                <div
                                    onClick={() =>
                                        openLink(
                                            `https://gilded-biscuit-043a4e.netlify.app/`
                                        )
                                    }
                                    className="project-deployed-link">
                                    Deploy <HiExternalLink />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                 {/* 3rd project */}
                 <div className="project-card">
                    <div

                        className="project-card-container">
                        <div className="project-img">
                            <img
                                src={taxtim}
                                alt="Flexi Wheel"
                            />
                        </div>
                        <div className="project-card-text">
                            <h1 className="project-title">Taxtim</h1>
                            <p className="project-description">
                            TaxtTim is an online tool that assists non tax practitioners 
                            with their tax return s Their goal is to make it as easy as
                            possible with little to no effort but without the hefty practitioners'
                               cost. They have a lot of knowledge that can be accessed and help the average Joe.
                            </p>
                            <div className="project-tech-stack">
                                <div
                                    key={Date.now() + Math.random()}
                                    className="project-skills-card">
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        HTML
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        React Js
                                    </p>
                                </div>
                                <div
                                    key={Date.now() + Math.random()}
                                    className="project-skills-card">
                                    <img
                                        src="https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon-thumbnail.png"
                                        alt="TypeScript"
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        TypeScript
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        CSS
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        JavaScript
                                    </p>
                                </div>
                               
                                <div
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
                                </div>

                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/136/136525.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        JSON
                                    </p>
                                </div>

                            </div>
                            <div className="project-card-btn">
                                <div
                                    onClick={() =>
                                        openLink(
                                            `https://github.com/DeveshSuryawanshi/tart-clover-1298`
                                        )
                                    }
                                    className="project-github-link">
                                    GitHub <FaGithub />
                                </div>
                                <div
                                    onClick={() =>
                                        openLink(
                                            `https://willowy-clafoutis-b9dee5.netlify.app/`
                                        )
                                    }
                                    className="project-deployed-link">
                                    Deploy <HiExternalLink />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

{/* project-4 */}
                 <div className="project-card">
                    <div

                        className="project-card-container">
                        <div className="project-img">
                            <img
                                src={taxtim}
                                alt="Flexi Wheel"
                            />
                        </div>
                        <div className="project-card-text">
                            <h1 className="project-title">ALPHA FINANCE</h1>
                            <p className="project-description">
                            lets you see the balance, transactions and invoices for
                             your credit cards. This app simplifies your life. You 
                             can for instance: Get notifications of important events,
                              purchases or if you reached your spending limits.
                            </p>
                            <div className="project-tech-stack">
                                <div
                                    key={Date.now() + Math.random()}
                                    className="project-skills-card">
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        HTML
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        React Js
                                    </p>
                                </div>
                                <div
                                    key={Date.now() + Math.random()}
                                    className="project-skills-card">
                                    <img
                                        src="https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon-thumbnail.png"
                                        alt="TypeScript"
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        TypeScript
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        CSS
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        JavaScript
                                    </p>
                                </div>
                               
                                <div
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
                                </div>

                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/136/136525.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        JSON
                                    </p>
                                </div>

                            </div>
                            <div className="project-card-btn">
                                <div
                                    onClick={() =>
                                        openLink(
                                            `https://github.com/AhamadShaikh/gaping-spring-1880`
                                        )
                                    }
                                    className="project-github-link">
                                    GitHub <FaGithub />
                                </div>
                                <div
                                    onClick={() =>
                                        openLink(
                                            `https://648ff31438df292dda152224--animated-raindrop-fbd2bc.netlify.app/`
                                        )
                                    }
                                    className="project-deployed-link">
                                    Deploy <HiExternalLink />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4th project */}
                <div className="project-card">
                    <div

                        className="project-card-container">
                        <div className="project-img">
                            <img
                                src={Beutiquee}
                                alt="Beautique.com"
                            />
                        </div>
                        <div className="project-card-text">
                            <h1 className="project-title">Beautique.com</h1>
                            <p className="project-description">
                            Beautique.com is a online shopping website which deals with women and kids products
                             like makeup product,accessories shoes, hats, hoodies and shorts alot.
                            </p>
                            <div className="project-tech-stack">
                                <div
                                    key={Date.now() + Math.random()}
                                    className="project-skills-card">
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        HTML
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        CSS
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        JavaScript
                                    </p>
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
                                    className="project-github-link">
                                    GitHub <FaGithub />
                                </div>
                                <div
                                    onClick={() =>
                                        openLink(
                                            `https://timely-paprenjak-287908.netlify.app/`
                                        )
                                    }
                                    className="project-deployed-link">
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
