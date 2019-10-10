import React from 'react';

export const Header = () => (
  <div
    style={{
      position: 'fixed',
      width: '100%',
      fontSize: '1rem',
      textAlign: 'right',
      zIndex: 1,
      paddingRight: 10,
      color: '#888',
    }}
  >
    <p>12 Oct 2019</p>
  </div>
);

export const Footer = () => (
  <div
    style={{
      position: 'fixed',
      bottom: 0,
      fontSize: '1rem',
      zIndex: 1,
      paddingLeft: 10,
      color: '#888',
    }}
  >
    <p>@aravindballa</p>
  </div>
);
