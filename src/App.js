import React from 'react';
import { Grid } from '@material-ui/core';
import constants from './constants';
import ButtonGridComponent from './components/ButtonGridComponent';
import Headline from './components/Headline';
import Spotify from './components/Spotify';
import StyledButton from './styled/StyledButton';
import './App.css';

export default function App() {
  const handleDownloadButtonClick = (e) => {
    e.preventDefault();
    window.open(constants.LINK_DOWNLOAD, '_blank');
  };

  return (
    <main
      className="App"
      style={{
        height: '100%',
        background: `linear-gradient(${constants.COLOR_PRIMARY}),transparent)`,
        backgroundColor: `${constants.COLOR_SECONDARY}`,
      }}
    >
      <header className="App-header">
        <Grid container direction="row">
          <Headline>{constants.TEXT_TITLE}</Headline>
        </Grid>
      </header>
      <div className="App-body">
        <Spotify spotifyUri={constants.LINK_SPOTIFY} />
        <StyledButton onClick={handleDownloadButtonClick}>
          {constants.TEXT_ACTION_BUTTON}
        </StyledButton>
        <ButtonGridComponent />
      </div>
    </main>
  );
}
