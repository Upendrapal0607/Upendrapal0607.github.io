import { Flex, VStack, Image, Box, Heading, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import style from "./Home.module.css"

export default function Home({ colorMode }) {

    const [isSmallScreen] = useMediaQuery('(min-width: 680px)')
    const [isMediumScreen] = useMediaQuery('(min-width: 1180px)')

    return (
      <div id="home" className={style.home}>
        <div
          id={style.home}
          style={{ color:  "white" }}
          // EBC7E8
        >
          <div className={style.img_txt_wrapper}
            
          >
            {/* <img
              id={style.myImg}
              src="code.gif"
              alt="logo"
            /> */}
            <div id={style.myDetailsDiv}>
              <h1 id={style.myName}>
                <span>
                  Hey,
                  {/* "width: 10%; display: inline; margin-top: 10px;" */}
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
          <div className={style.quote} style={{ marginTop: "20px",fontFamily: 'Bree Serif, serif' }}>
            <p>Web development is not just about creating pretty websites. It's about understanding the needs of users, solving problems, and creating an exceptional online experience.</p>
            {/* <img  
              src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=light"
              alt=""
            /> */}
          </div>
        </div>

        <div className={style.randonimage}>
          <img src="https://raw.githubusercontent.com/MicaelliMedeiros/micaellimedeiros/master/image/computer-illustration.png" alt="" />
         {/* <img id="Homepage_myImg__BA-sT" src="https://raw.githubusercontent.com/MicaelliMedeiros/micaellimedeiros/master/image/computer-illustration.png" alt="logo"> */}
        </div>
      </div>
    );
}
