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
      import star from '../picture/gwiazda.png';

const AppStyles = {
  maxWidth: "100vw",
  height: "100vh",
  display: "flex"
}
const Gradient = {
  position: "relative",
  width: "100%",
  height: "50px",
  background: "rgb(2,0,36)",
  background: "linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(4,4,3,0) 7%, rgba(251,191,0,1) 100%)",
}
const Project = {
  minHeight: "1100px",
  backgroundColor: "white"
}
const Footer = {
  minHeight: "500px",
  backgroundColor: "#FBBF00"
}
const starstyle = {
  width: "25%",
  height: "25%",
  margin: "0 auto",
  position: "relative",

}

function App() {

  return (
    <div style={AppStyles}>
        {<CubeAnimation/>}
        <div className='body'>
            <nav class="menu">
              <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/>
              <label class="menu-open-button" for="menu-open">
                <span class="hamburger hamburger-1"></span>
                <span class="hamburger hamburger-2"></span>
                <span class="hamburger hamburger-3"></span>
              </label>
              
              <a href="https://www.facebook.com/maciek.roznawski" target="_blank" class="menu-item"><ion-icon name="logo-facebook"></ion-icon></a>
              <a href="https://github.com/figarox" target="_blank" class="menu-item"><ion-icon name="logo-github"></ion-icon></a>
              <a href="https://www.linkedin.com/in/maciej-ro%C5%BCnawski-906390220/" target="_blank" class="menu-item"><ion-icon name="logo-linkedin"></ion-icon></a>

            </nav>

            <section>
              <div className='cubesection'></div>
                <div className='BoxSection'>
                  <div className='row'>
                    <div className='col'>
                    </div>
                    <div className='col'>    
                    </div>
                  </div>
              </div>
            </section>
            <img src={star} className='starstyle'></img>

            <section>
              <div className='cubesection'></div>
              <div className='BoxSection'>
              <h1>Kim jestem?
                    <div className='line-decoration'></div>
                  </h1>
                <div className="container">
                    <div className="row">
                      <div className="col">
                          <p>Cześć jestem <b>Maciej Rożnawski</b>. Ukończyłem Technikum Informatyczne w Słupsku. Zdałem egzamin zawodowy i uzyskałem świadectwo kwalifikacji.</p>
                          <p>Programowaniem interesuję się od 10 roku życia.</p>
                      </div>
                      <div className="col">
                          <img src={MyPhoto2} className='MyPhoto2'></img>
                      </div>
                    </div>
                  </div>  
              </div>
            </section>
            <img src={star} className='starstyle'></img>


            <section>
            <div className='cubesection'></div>
              <div className='BoxSection'>
                <div className='TechPicutre'>
                   <div style={Gradient}></div>
                        <h3 className='textcube'>Umiejętności
                          <div className='line-decoration'></div>
                        </h3>
                        <div className="row">
                          <div className="col">
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
                          <div className="col">
                            <div className='boxblackwin'>
                              <p className='blackwin' id="blackwin">0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor quo optio sunt error</p>
                            </div>
                          </div>
                        </div>
                      <div className='row'>
                          <div className="col">
                              <div>
                                <div className='CircleAnimation'>
                                    <button id='AnimationPause' class='play'></button>
                                </div>
                                <div className='CubeBar'>
                                  <div id='CubeBarLine'></div>
                                </div>
                            </div>
                        </div>
                      </div>
                </div>
              </div>
            </section>
            <img src={star} className='starstyle'></img>

            <section>
            <h3>Technologie
                  <div className='line-decoration'></div>
                </h3>
            <div className='row'>
              <div className='col'>

              </div>
            </div>
            </section>
            <img src={star} className='starstyle'></img>
            
            <section style={Project}>
                 <h3>Projekty
                  <div className='line-decoration'></div>
                </h3>
                <div className="container">
                  <div className="row">
                      <div className="col picture">
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
                      <div className="col picture">
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
                      <div className="col picture">
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
                        <div className="row">
                            <div className="col picture">
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
                            <div className="col picture">
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
