import React from "react";
import {Gradient} from 'react-gradient'
import constants from './constants'
import logo from "./images/logo-lettering.png";
// import desktopImage from "./images/bgs/grain-desktop-1-resize.png";
// import mobileImage from "./images/bgs/grain-mobile-resize.png";
import StyledButton from './styled/StyledButton'

// Material UI
import { Grid } from "@material-ui/core/";

// Util
// import YouTube from "react-youtube";

// Custom Components
import ButtonGridComponent from './components/ButtonGridComponent'
// import CustomModalComponent from "./components/CustomModalComponent";
import Spotify from './components/Spotify'

import "./App.css";

const gradients = [
  ['#bd19d6', '#ea7d10'],
  ['#ff2121', '#25c668'],
];

// ------------
// Main - App:
// ------------
export default function App() {
  // const [modal, toggleModal] = React.useState(false);
  
  // Passing as props to CustomModalComponent
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  
  // Select background image 
  // const backgroundImageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

  // Component Event Handlers
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };
  
  const handleDownloadButtonClick = e => {
    e.preventDefault();
    window.open(constants.DOWNLOAD_LINK, "_blank");
  };

  React.useEffect(() => {
    // setTimeout(() => {
    //   toggleModal(true);
    // }, 2200);

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  React.useEffect(() => {

  }, [])


  // YouTube Component events
  // Options for the video size
  // TODO: Separate Video logic in a VideoComponent
  // const opts =
  //   windowWidth >= 650
  //     ? {
  //         height: "360",
  //         width: "640"
  //       }
  //     : {
  //         height: "180",
  //         width: "320"
  //       };

  // Video onReady handler
  // const _onReady = event => {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // };




  // ---------------------
  // Returns our App
  // ---------------------
  return (
    <div
      className="App"
      style={
        {
          // backgroundImage: `url(${backgroundImageUrl})`,
          background:` linear-gradient(rgba(250,0,0,0.5),transparent)`,
          height: "100%",
          backgroundColor: 'rgb(162,76,48)', 
        }
      }
    >
      <Gradient
            gradients={ gradients } // required
            property="background"
            duration={ 3000 }
            angle="45deg"
        />
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
            <h3>{constants.latestRelease}</h3>
          </Grid>
          
          <Spotify/>

          {/* Video, or Instagram Video */}
          {/* TODO: */}

          {/** Youtube Video */}
          {/* <YouTube videoId="SLV0sCkcKOg" opts={opts} onReady={_onReady} /> */}

          {/* Download link to beatportButton  */}
          <StyledButton onClick={handleDownloadButtonClick}>
            BUY IT NOW!
          </StyledButton>

          {/** Modal */}
          {/* {modal ? <CustomModalComponent props={{windowWidth, modal}} windowWidth={windowWidth}/> : null} */}
          {/* TODO: Return this as a full component */}
          {/* As it says */}
          <ButtonGridComponent/>

        </header>
        {/* Not using a body... */}
      </div>
    </div>
  );
}
