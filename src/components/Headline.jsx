import React from 'react';


const Headline = ({children}) => {
  return( 
    <h1 style={{"fontFamily": "Montserrat"}}>
      {children}
    </h1>
    ); 
}

export default Headline;
