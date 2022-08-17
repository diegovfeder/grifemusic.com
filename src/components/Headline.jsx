import React from 'react';

const Headline = ({ children }) => {
  return (
    <h1
      style={{
        display: 'flex',
        flex: 1,
        fontFamily: 'Montserrat',
        margin: '0.4em 1em',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}
    >
      {children}
    </h1>
  );
};

export default Headline;
