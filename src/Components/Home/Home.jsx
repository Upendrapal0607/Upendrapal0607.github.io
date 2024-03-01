import {
  Flex,
  VStack,
  Image,
  Box,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import style from "./Home.module.css";

export default function Home({ colorMode }) {
  const [isSmallScreen] = useMediaQuery("(min-width: 680px)");
  const [isMediumScreen] = useMediaQuery("(min-width: 1180px)");

  return (
    <div id="home" className={style.home}>
      <div
        id={style.home}
        style={{ color: "white" }}
        // EBC7E8
      >
        <div className={style.img_txt_wrapper}>
          <div id={style.myDetailsDiv}>
            <h1 id={style.myName}>
              <span>
                Hey,
                <img
                  className={style.spanImage}
                  src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
                  alt=""
                />
              </span>
              <br /> I am Upendra Pal
            </h1>
            <h3 id={style.title}>Full Stack Web Developer</h3>
          </div>
        </div>
        <div
          className={style.quote}
          style={{ marginTop: "20px", fontFamily: "Bree Serif, serif" }}
        >
          <p>
            Web development is not just about creating pretty websites. It's
            about understanding the needs of users, solving problems, and
            creating an exceptional online experience.
          </p>
        </div>
      </div>

      <div className={style.randonimage}>
        <img
          src="https://raw.githubusercontent.com/MicaelliMedeiros/micaellimedeiros/master/image/computer-illustration.png"
          alt=""
        />
      </div>
    </div>
  );
}
