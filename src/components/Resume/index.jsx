import React from 'react';
import resumePDF from '../../assets/resume/ibrahim-zerlin.pdf';

// Components.
import Button from '../Button';

const Resume = () => (
  <section className="resume">
    <h2 className="resume__heading text-2xl mb-4">Experience</h2>
    <p className="resume__description py-4">I have experience working with HTML / CSS / JavaScript / Web APIs / Server side APIs/ Node.js / Object Oriented Programing / Express.js / SQL / ORM / MVC / MongoDB / PWA / React / MERN.</p>
    
    <div className="resume__buttons flex space-x-4">
      <Button
        classNames="button__link"
        isLink={true}
        target={false}
        text="Download my CV (PDF)"
        link={resumePDF}
      />
      <Button
        classNames="button__link"
        isLink={true}
        target={true}
        text="LinkedIn Profile"
        link="https://www.linkedin.com/in/ibrahim-zerlin/"
      />
    </div>
  </section>
);

export default Resume;
