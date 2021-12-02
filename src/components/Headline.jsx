import React from 'react';


const Headline = ({children, size}) => {
  console.log({size});
    if (size === 'medium') {
      return( 
        <h2 style={{"fontFamily": "Montserrat", margin: "0.4em 1em" }}>
          {children}
        </h2>
      );
    } else {
      return( 
        <h1 style={{"fontFamily": "Montserrat", margin: "0.4em 1em", "size": size}}>
          {children}
        </h1>
        ); 
    }
}

export default Headline;
