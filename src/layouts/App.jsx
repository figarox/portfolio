import React from 'react';
import MePicture from '../picture/portfolio-picutre.png';
import REACTPicture from '../icon/react.png';
import JSPicture from '../icon/js.png';
import PHPicture from '../icon/php.png';
import HTMLPicture from '../icon/html.png';
import CPicture from '../icon/c++.png';
import CSSPicture from '../icon/css.png';
import cubeanimtion from '../script/cubeanimation.js';

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
const Gradient = {
  width: "100%",
  height: "150px",
  background: "rgb(2,0,36)",
  background: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(4,4,3,1) 7%, rgba(251,191,0,1) 100%)",
  }
const AboutMe = {
  width: "100%",
  height: "500px",
  backgroundColor: "black",
}
const MyPhoto = {
  position: "relative",
  width: "40vw",
  left: "300px",
  top: "-150px"
}

function App() {
  return (
    <div style={AppStyles}>
        <div style={Body}>
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
            <section style={Gradient}></section>
            <section style={AboutMe}>
                <h3>Umiejętności
                  <div className='line-decoration'></div>
                </h3>
                <div class="container">
                  <div class="cube show-front">
                    <div class="front"><img src={REACTPicture} className='PictureCube'></img></div>
                    <div class="back"><img src={JSPicture} className='PictureCube'></img></div>
                    <div class="right"><img src={PHPicture} className='PictureCube'></img></div>
                    <div class="left"><img src={HTMLPicture} className='PictureCube'></img></div>
                    <div class="top"><img src={CPicture} className='PictureCube'></img></div>
                    <div class="bottom"><img src={CSSPicture} className='PictureCube'></img></div>
                  </div>
                </div>
                <div className='boxblackwin'>
                  <p className='blackwin' id="blackwin">0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor quo optio sunt error</p>
                </div>
            </section>
            <section>

            </section>
        </div>
    </div>
  );
  
}

export default App;
