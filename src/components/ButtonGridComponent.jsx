import React from 'react'
import styled from "styled-components";

// ICONS
import { Icon } from "@iconify/react";
import instagramIcon from "@iconify/icons-simple-icons/instagram";
import facebookIcon from "@iconify/icons-simple-icons/facebook";
import beatportIcon from "@iconify/icons-simple-icons/beatport";
import soundcloudIcon from "@iconify/icons-simple-icons/soundcloud";
import spotifyIcon from "@iconify/icons-simple-icons/spotify";


//TODO: imports
//import Grid 
import { Grid } from "@material-ui/core/";
// import { CircularProgress } from "@material-ui/core";


// EVENT HANDLERS 
const handleInstagramClick = e => {
  e.preventDefault();
  window.open("https://www.instagram.com/grifemusic/");
};
const handleFacebookClick = e => {
  e.preventDefault();
  window.open("https://www.facebook.com/grifemusic/");
};
const handleBeatportClick = e => {
  e.preventDefault();
  window.open("https://www.beatport.com/artist/grife/465785");
};
const handleSoundcloudClick = e => {
  e.preventDefault();
  window.open("https://soundcloud.com/grifemusic");
};
const handleSpotifyClick = e => {
  e.preventDefault();
  window.open("https://open.spotify.com/artist/0peVkBhumiuUyxMqc9EGUR");
};


export default function ButtonGridComponent() {
  
  // Styled Components
  const StyledIcon = styled.div`
    :hover {
      cursor: pointer;
    }
  `;

  return(  <Grid
    container
    direction="row"
    justify="space-evenly"
    alignItems="center"
    style={{ margin: 32, bottom: "20%" }}
  >
    <Grid item>
      <StyledIcon>
        <Icon
          onClick={handleInstagramClick}
          height={24}
          icon={instagramIcon}
        />
      </StyledIcon>
    </Grid>
    <Grid item>
      <StyledIcon>
        <Icon
          onClick={handleFacebookClick}
          height={24}
          icon={facebookIcon}
        />
      </StyledIcon>
    </Grid>
    <Grid item>
      <StyledIcon>
        <Icon
          onClick={handleBeatportClick}
          height={28}
          icon={beatportIcon}
        />
      </StyledIcon>
    </Grid>
    <Grid item>
      <StyledIcon>
        <Icon
          onClick={handleSoundcloudClick}
          height={38}
          icon={soundcloudIcon}
        />
      </StyledIcon>
    </Grid>
    <Grid item>
      <StyledIcon>
        <Icon
          onClick={handleSpotifyClick}
          height={24}
          icon={spotifyIcon}
        />
      </StyledIcon>
    </Grid>
  </Grid>)
}
                  