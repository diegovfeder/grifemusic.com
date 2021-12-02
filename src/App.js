import React from "react";
import constants from './constants'
import StyledButton from './styled/StyledButton'
import { Grid } from "@material-ui/core/";
import ButtonGridComponent from './components/ButtonGridComponent'
import Headline from "./components/Headline";
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
          height: "100%",
          background:` linear-gradient(rgba(250,0,0,0.5),transparent)`,
          backgroundColor: 'rgb(162,76,48)', 
          // backgroundImage: `url(${backgroundImageUrl})`,
        }
      }
    >
      <div className="App-content">
        <header className="App-header">
          <Grid direction="row">
            <Headline>{constants.latestRelease}</Headline>
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
