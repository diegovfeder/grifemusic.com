import React from "react";
import styled from "styled-components";

import "./App.css";

import logo from "./images/logo-lettering.png";

// Material UI
import { Grid } from "@material-ui/core/";

import desktopImage from "./images/bgs/grain-desktop-1-resize.png";
import mobileImage from "./images/bgs/grain-mobile-resize.png";

// Util
import YouTube from "react-youtube";

// Custom Components
import ButtonGridComponent from './components/ButtonGridComponent'
import CustomModalComponent from "./components/CustomModalComponent";

// ------------
// Main - App:
// ------------
export default function App() {
  const [modal, toggleModal] = React.useState(false);
  
  // Passing as props to CustomModalComponent
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  
  // Select background image 
  const backgroundImageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

  // Component Event Handlers
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const handleDownloadButtonClick = e => {
    e.preventDefault();
    window.open("https://www.beatport.com/release/all-will-be-lost/2849367");
  };

  // Toggle modal after t = 2200ms
  React.useEffect(() => {
    setTimeout(() => {
      toggleModal(true);
    }, 2200);

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  React.useEffect(() => {

  }, [])


  // YouTube Component events
  // Options for the video size
  //TODO: Separate Video logic in a VideoComponent
  const opts =
    windowWidth >= 650
      ? {
          height: "360",
          width: "640"
        }
      : {
          height: "180",
          width: "320"
        };

  // Video onReady handler
  const _onReady = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };


  // CSS STYLES
  // Using Styled Components
  const StyledButton = styled.button`
    -moz-box-flex: 0;
    background-color: #7d0017;
    border: 1px solid #8c1b05;
    border-image: none 100% 1 0 stretch;
    border-radius: 0 2px 2px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    flex: 0 1 auto;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2;
    margin: 0.5rem 1rem 0.5rem 1rem;
    padding: 1rem 2rem 0.8rem;
    position: relative;
    text-align: center;
    text-decoration: none currentcolor solid;
    text-decoration-thickness: auto;
    text-transform: uppercase;
    touch-action: manipulation;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    :hover {
      background-color: #600011;
      border-color: #5b1203;
      z-index: 2;
    }
  `;

  // ---------------------
  // Returns our App
  // ---------------------
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${backgroundImageUrl})`, height: "100%" }}
    >
      <div className="App-content">
        <header className="App-header">
          {/* Responsive Logo Image */}
          <img
            src={logo}
            style={{
              marginTop: 50,
              width: windowWidth >= 650 ? "25%" : "50%",
              height: windowWidth >= 650 ? "25%" : "50%"
            }}
            alt="logo"
          />

          {/* Headline TextView */}
          <Grid direction="row">
            <h1>LAST RELEASE: ALL WILL BE LOST</h1>
          </Grid>

          {/** Youtube Video */}
          <YouTube videoId="SLV0sCkcKOg" opts={opts} onReady={_onReady} />

          {/* Download link to beatportButton  */}
          <StyledButton onClick={handleDownloadButtonClick}>
            DOWNLOAD NOW!
          </StyledButton>

          {/** Modal */}
          {modal ? <CustomModalComponent props={{windowWidth, modal}} windowWidth={windowWidth}/> : null}
          {/* TODO: Return this as a full component */}
          {/* As it says */}
          <ButtonGridComponent/>

        </header>
        {/* Not using a body... */}
      </div>
    </div>
  );
}
