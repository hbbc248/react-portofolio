import React from 'react';

// Components.
import About from '../About';
import Portfolio from '../Portfolio';

import ContactForm from '../Contact';




const Main = ({ selectedNavItem }) => (
  <div className="site-main flex-grow">
    {selectedNavItem === 'About' && (
      <About />
    )}
    {selectedNavItem === 'Portfolio' && (
      <Portfolio />
    )}

    {selectedNavItem === 'Contact' && (
      <ContactForm />
    )}


  </div>
);

export default Main;
