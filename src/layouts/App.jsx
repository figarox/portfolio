import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
  import MePicture from '../picture/portfolio-picutre.png';
  import REACTPicture from '../icon/react.png';
  import JSPicture from '../icon/js.png';
  import PHPicture from '../icon/php.png';
  import HTMLPicture from '../icon/html.png';
  import CPicture from '../icon/c++.png';
  import CSSPicture from '../icon/css.png';
  import BootStrapPicture from '../icon/bootstrap.png';
  import GitHub from '../icon/GitHub.png';
  import LinkedIn from '../icon/linkedin.png';
  import MyPhoto2 from '../picture/ja.png';
   import 'bootstrap/dist/css/bootstrap.min.css';
    import ProjectDiva from '../project-picture/projekt1.png';
    import ProjectRenRom from '../project-picture/projekt2.png';
    import ProjectMysticwar from '../project-picture/projekt3.png';
    import ProjectTerminalDoctor from '../project-picture/projekt4.png';
    import ProjectPortfolio from '../project-picture/projekt5.png';
      import CubeAnimation from '../script/cubeanimation.jsx';

const AppStyles = {
  maxWidth: "100vw",
  height: "100%",
  display: "flex"
}
const Body = {
  width: "100vw",
  height: "auto",
  margin: "50px 12vw 80px 12vw",
  boxShadow: "0px 0px 34px -18px rgba(0, 0, 0, 1)",
  backgroundColor: "#ffffff",
}
const FirstWin = {
  width: "100%",
  height: "950px",
  backgroundColor: "white"
}
const MyPhoto = {
  position: "relative",
  width: "40vw",
  left: "300px",
  top: "-150px"
}
const Gradient = {
  position: "relative",
  width: "100%",
  height: "50px",
  background: "rgb(2,0,36)",
  background: "linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(4,4,3,0) 7%, rgba(251,191,0,1) 100%)",
}
const AboutMe = {
  width: "100%",
  minHeight: "55vh",
  backgroundColor: "white"
}
const Project = {
  width: "100%",
  minHeight: "1100px",
  backgroundColor: "white"
}
const Footer = {
  width: "100%",
  minHeight: "500px",
  backgroundColor: "#FBBF00"
}

function App() {

  return (
    <div style={AppStyles}>
      {<CubeAnimation />}

        <div style={Body}>
          <div className='BoxSocial'>
              <a href='https://github.com/figarox' target="_blank"><div className='GitHubStyle'><img src={GitHub} className='SocialPicture'></img></div></a>
                <a href='https://www.linkedin.com/in/maciej-ro%C5%BCnawski-906390220/' target="_blank"><div className='LinkedinStyle'><img src={LinkedIn} className='SocialPicture'></img></div></a>
          </div>
            <section style={FirstWin}>
              <div className="line1">
                <div className="line2"></div>
                  <div className="line3"></div>
              </div>
                  <div className="line4">
                    <div className="line6"></div>
                    <div className="line5"></div>
                    <div className="line7"></div>
                    <div className="line8"></div>
                    <div className="line9"></div>
                    <div className="line10"></div>
                    <img src={MePicture} style={MyPhoto}></img>

                  </div>
            </section>

            <section className='Technologies'>
            <div style={Gradient}></div>

                <h3 className='textcube'>Umiejętności
                  <div className='line-decoration'></div>
                </h3>
                <div class="row">
                   <div class="col">
                      <div className="containerCube">
                        <div className="cube">
                          <div className="front"><img src={REACTPicture} className='PictureCube'></img></div>
                          <div className="back"><img src={JSPicture} className='PictureCube'></img></div>
                          <div className="right"><img src={PHPicture} className='PictureCube'></img></div>
                          <div className="left"><img src={HTMLPicture} className='PictureCube'></img></div>
                          <div className="top"><img src={CPicture} className='PictureCube'></img></div>
                          <div className="bottom"><img src={CSSPicture} className='PictureCube'></img></div>
                        </div>
                      </div>
                   </div>
                  <div class="col">
                    <div className='boxblackwin'>
                      <p className='blackwin' id="blackwin">0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor quo optio sunt error</p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                    <div class="col">
                      <button id='AnimationPause'></button>
                      <div className='CubeBar'>
                        <div id='CubeBarLine'></div>
                      </div>
                  </div>
                </div>
            </section>

            <section style={AboutMe}>
                <h1>Kim jestem?
                  <div className='line-decoration'></div>
                </h1>
              <div class="container">
                  <div class="row">
                    <div class="col">
                        <p>Cześć jestem <b>Maciej Rożnawski</b>. Ukończyłem Technikum Informatyczne w Słupsku. Zdałem egzamin zawodowy i uzyskałem świadectwo kwalifikacji.</p>
                        <p>Programowaniem interesuję się od 10 roku życia.</p>
                    </div>
                    <div class="col">
                        <img src={MyPhoto2} className='MyPhoto2'></img>
                    </div>
                  </div>
                </div>      
            </section>

            <section>
            <h3>Technologie
                  <div className='line-decoration'></div>
                </h3>

            </section>

            <section style={Project}>
                 <h3>Projekty
                  <div className='line-decoration'></div>
                </h3>
                <div class="container">
                  <div class="row">
                      <div class="col picture">
                        <div className='BoxProject'>
                           <img src={ProjectDiva} className='WinProjectPicture'></img>
                            <div className='BoxProjectText'>
                                <h4>DivaSłupsk</h4>
                                <div className='line-decoration'></div>
                                <h5>Komercyjny</h5>
                                <p>Salon zabiegów kosmetycznych w Słupsku</p>
                            </div>
                            <button className='BLButtonLive'>Live</button>
                            <button className='BLButtonCode'>Kod</button>
                            <div className='BoxLanguages'>
                              <div className='BoxLanguagesCSS'><img src={CSSPicture} className='BoxLanguagesIcon'></img></div>
                              <div className='BoxLanguagesHTML'><img src={HTMLPicture} className='BoxLanguagesIcon'></img></div>
                              <div className='BoxLanguagesBT'><img src={BootStrapPicture} className='BoxLanguagesIcon'></img></div>
                            </div>
                        </div>
                      </div>
                      <div class="col picture">
                        <div className='BoxProject2'>
                           <img src={ProjectRenRom} className='WinProjectPicture'></img>
                            <div className='BoxProjectText'>
                                <h4>RenRom</h4>
                                <div className='line-decoration'></div>
                                <h5>Komercyjny</h5>
                                <p>Strona rehabilitacji domowej w Wejherowie</p>
                            </div>
                            <button className='BLButtonLive'>Live</button>
                            <button className='BLButtonCode'>Kod</button>
                            <div className='BoxLanguages'>
                              <div className='BoxLanguagesPHP'><img src={PHPicture} className='BoxLanguagesIcon'></img></div>
                              <div className='BoxLanguagesCSS'><img src={CSSPicture} className='BoxLanguagesIcon'></img></div>
                              <div className='BoxLanguagesHTML'><img src={HTMLPicture} className='BoxLanguagesIcon'></img></div>
                              <div className='BoxLanguagesBT'><img src={BootStrapPicture} className='BoxLanguagesIcon'></img></div>
                            </div>
                        </div>
                      </div>
                      <div class="col picture">
                        <div className='BoxProject'>
                           <img src={ProjectMysticwar} className='WinProjectPicture'></img>
                            <div className='BoxProjectText'>
                                <h4>Mysticwar</h4>
                                <div className='line-decoration'></div>
                                <h5> Moja Gra</h5>
                                <p>Moja pierwsza gra Web, która jest w trakcie pracy, tworzą tę gre dwie osoby.Gra jest głównie tworzona w jęzuku PHP i JavaScript</p>
                            </div>
                            <button className='BLButtonLive'>Live</button>
                            <button className='BLButtonCode'>Kod</button>
                            <div className='BoxLanguages'>
                              <div className='BoxLanguagesJS'><img src={JSPicture} className='BoxLanguagesIcon'></img></div>
                              <div className='BoxLanguagesPHP'><img src={PHPicture} className='BoxLanguagesIcon'></img></div>
                              <div className='BoxLanguagesCSS'><img src={CSSPicture} className='BoxLanguagesIcon'></img></div>
                              <div className='BoxLanguagesHTML'><img src={HTMLPicture} className='BoxLanguagesIcon'></img></div>
                            </div>
                        </div>
                      </div>
                  </div>
                        <div class="row">
                            <div class="col picture">
                              <div className='BoxProject3'>
                                <img src={ProjectTerminalDoctor} className='WinProjectPicture'></img>
                                  <div className='BoxProjectText'>
                                      <h4>Terminal Doctor</h4>
                                      <div className='line-decoration'></div>
                                      <p>dasdasdasd</p>
                                  </div>
                                  <button className='BLButtonLive'>Live</button>
                                   <button className='BLButtonCode'>Kod</button>
                                  <div className='BoxLanguages'>
                                    <div className='BoxLanguagesReact'><img src={REACTPicture} className='BoxLanguagesIcon'></img></div>
                                    <div className='BoxLanguagesJS'><img src={JSPicture} className='BoxLanguagesIcon'></img></div>
                                    <div className='BoxLanguagesCSS'><img src={CSSPicture} className='BoxLanguagesIcon'></img></div>
                                    <div className='BoxLanguagesHTML'><img src={HTMLPicture} className='BoxLanguagesIcon'></img></div>
                                    <div className='BoxLanguagesBT'><img src={BootStrapPicture} className='BoxLanguagesIcon'></img></div>
                                  </div>
                              </div>
                            </div>
                            <div class="col picture">
                              <div className='BoxProject'>
                                <img src={ProjectPortfolio} className='WinProjectPicture'></img>
                                  <div className='BoxProjectText'>
                                      <h4>Portfolio</h4>
                                      <div className='line-decoration'></div>
                                      <p>dasdasdasd</p>
                                  </div>
                                  <button className='BLButtonLive'>Live</button>
                                   <button className='BLButtonCode'>Kod</button>
                                  <div className='BoxLanguages'>
                                    <div className='BoxLanguagesReact'><img src={REACTPicture} className='BoxLanguagesIcon'></img></div>
                                    <div className='BoxLanguagesJS'><img src={JSPicture} className='BoxLanguagesIcon'></img></div>
                                    <div className='BoxLanguagesCSS'><img src={CSSPicture} className='BoxLanguagesIcon'></img></div>
                                    <div className='BoxLanguagesHTML'><img src={HTMLPicture} className='BoxLanguagesIcon'></img></div>
                                    <div className='BoxLanguagesBT'><img src={BootStrapPicture} className='BoxLanguagesIcon'></img></div>
                                  </div>
                              </div>
                            </div>
                        </div>
                </div>
            </section>

            <section style={Footer}></section>
        </div>
    </div>
  );
  
};

export default App;
