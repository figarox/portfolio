import React from 'react';
  import MePicture from '../picture/portfolio-picutre.png';
  import REACTPicture from '../icon/react.png';
  import JSPicture from '../icon/js.png';
  import PHPicture from '../icon/php.png';
  import HTMLPicture from '../icon/html.png';
  import CPicture from '../icon/c++.png';
  import CSSPicture from '../icon/css.png';
  import GitHub from '../icon/GitHub.png';
  import LinkedIn from '../icon/linkedin.png';
  import MyPhoto2 from '../picture/ja.png';
  import 'bootstrap/dist/css/bootstrap.min.css';
    import cubeanimtion from '../script/cubeanimation.js';
    import animation from '../script/animation.js';

const AppStyles = {
  maxWidth: "100vw",
  height: "100%",
  display: "flex"
}
const Body = {
  width: "100vw",
  height: "auto",
  margin: "50px 20vw 80px 20vw",
  boxShadow: "0px 0px 34px -18px rgba(0, 0, 0, 1)",
  backgroundColor: "#ffffff",
}
const FirstWin = {
  width: "100%",
  height: "95vh",
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
  height: "55vh",
  backgroundColor: "white"
}
const Project = {
  width: "100%",
  height: "75vh",
  backgroundColor: "white"
}

function App() {
  return (
    <div style={AppStyles}>
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

                <h3>Umiejętności
                  <div className='line-decoration'></div>
                </h3>
                <div class="row">
                   <div class="col">
                      <div className="containerCube js--wp">
                        <div className="cube show-front">
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
            </section>

            <section style={AboutMe}>
              <div class="container">
                  <div class="row">
                    <div class="col">
                        <p>Nazywam się <b>Maciej Rożnawski</b>. Ukończyłem Technikum Informatyczne w Słupsku. Zdałem egzamin zawodowy i uzyskałem świadectwo kwalifikacji.</p>
                        <p>Programowaniem interesuję się od 10 roku życia.</p>
                    </div>
                    <div class="col">
                        <img src={MyPhoto2} className='MyPhoto2'></img>
                    </div>
                  </div>
                </div>      
            </section>

            <section style={Project}>
                 <h3>Projekty
                  <div className='line-decoration'></div>
                </h3>
            </section>
        </div>
    </div>
  );
  
}

export default App;
