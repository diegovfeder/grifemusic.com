import React from 'react';

// TODO: Make Width Responsve?

const Spotify = ({containerWidth}) => {
  
  if (containerWidth < 600) {
    return (
      <figure>
       <iframe src="https://open.spotify.com/embed/track/2bCuCShqydPD6Ot5e6cwqS" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </figure>
    )
  } else if (containerWidth < 800) {
    return( 
      <figure>
        <iframe src="https://open.spotify.com/embed/track/2bCuCShqydPD6Ot5e6cwqS" width="500" height="600" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </figure>
    ); 
  } else {
    return( 
      <figure>
        <iframe src="https://open.spotify.com/embed/track/2bCuCShqydPD6Ot5e6cwqS" width="800" height="600" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </figure>
    ); 
  }
}

export default Spotify;
