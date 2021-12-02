import React from "react";
import constants from './constants'
import StyledButton from './styled/StyledButton'
import { Grid } from "@material-ui/core/";
import ButtonGridComponent from './components/ButtonGridComponent'
import Spotify from './components/Spotify'
import "./App.css";

export default function App() {
  const [_, setWindowWidth] = React.useState(window.innerWidth);
  
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };
  
  const handleDownloadButtonClick = e => {
    e.preventDefault();
    window.open(constants.DOWNLOAD_LINK, "_blank");
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
      <div className="App-content">
        <header className="App-header">
          <Grid direction="row">
            <h2>{constants.latestRelease}</h2>
          </Grid>
          <Spotify/>
          <StyledButton onClick={handleDownloadButtonClick}>
            BUY IT NOW!
          </StyledButton>
          <ButtonGridComponent/>
        </header>
        {/* Not using a body... */}
      </div>
    </div>
  );
}
