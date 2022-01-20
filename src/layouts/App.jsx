import React from 'react';
import MePicture from '../picture/portfolio-picutre.png';

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
const AboutMe = {
  width: "100%",
  height: "50vh",
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
            <section style={AboutMe}>

            </section>
        </div>
    </div>
  );
}

export default App;
