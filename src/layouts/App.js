import React from 'react';

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
  height: "100vh",
  backgroundColor: "#f7e87c"
}
const AboutMe = {
  width: "100%",
  height: "50vh",

}

function App() {
  return (
    <div style={AppStyles}>
        <div style={Body}>
            <div style={FirstWin}></div>
            <section style={AboutMe}>

            </section>
        </div>
    </div>
  );
}

export default App;
