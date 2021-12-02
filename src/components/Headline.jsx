import React from 'react';


const Headline = ({children}) => {
  return( 
    <h1 style={{"fontFamily": "Montserrat", margin: "0.4em 1em"}}>
      {children}
    </h1>
    ); 
}

export default Headline;
