import React from 'react';

const curYear = new Date().getFullYear();

const Footer = () => (
  <>
    <footer className="site-footer border-t-2 border-solid border-gray-500 py-2 mt-2">
      <div className="mx-auto container pt-2 lg:pt-2 flex flex-col items-center justify-center">
        <div className="text-black flex flex-col md:items-center f-f-l pt-3">
          <div className="md:flex items-center mt-2 md:mt-2 mb-2 text-base text-color f-f-l">
            <a className="footer-item md:mr-6 pb-4 md:py-0 cursor-pointer" href="https://github.com/hbbc248/" target="blank">GitHub Page</a>
            <a className="footer-item cursor-pointer" href="mailto: ibrahimzerlin@hotmail.com">Email Contact</a>
          </div>
          <div className="text-sm text-color mb-10 f-f-l">
            <p> Ibrahim Zerlin © 2021. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </>


);

export default Footer;
