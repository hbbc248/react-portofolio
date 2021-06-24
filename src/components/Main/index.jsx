import React from 'react';

// Components.
import About from '../About';




const Main = ({ selectedNavItem }) => (
  <div className="site-main flex-grow">
    {selectedNavItem === 'About' && (
      <About />
    )}
    
    
  </div>
);

export default Main;
