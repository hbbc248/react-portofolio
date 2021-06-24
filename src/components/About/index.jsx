import React from 'react';
import photo from "../../assets/images/ibrahim.jpg";

const About = () => (
  <section id="about">
    <header className="about-header grid grid-cols-12 grid-rows-1 gap-x-1 pb-4 items-center">
      <div className="header__text col-span-9">
        <h1 className="text-2xl mb-2">Ibrahim Zerlin</h1>
        <h2 className="text-xl">Full Stack Web Developer / Experienced Team Manager</h2>
      </div>
      <div className="header__image col-span-3">
        <img className="rounded-full" src={photo} alt="Close up of Ibrahim Zerlin" />
      </div>
    </header>
    <p className="mb-4">
      What was once a hobby is now my career, and I am currently a full-Stack web developer graduated from the University of Texas coding bootcamp. With experience in HTML / CSS / JavaScript / Web APIs / Server side APIs/ Node.js / Object Oriented Programing / Express.js / SQL / ORM / MVC / MongoDB / PWA / React / MERN.
    </p>
    <p className="mb-2">
      I am an Electronic Engineer with 21 years of experience in the Oil Field industry in multiple positions and roles. Proactive, willing to accept any kind of challenges. I have a very high sense of commitment. I am used to manage groups of 150+ people and overseeing 10M-50M annual budget. I am willing to relocate nationally or internationally.
    </p>
  </section>
);

export default About;
