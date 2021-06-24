import React, { useState } from 'react';

// Components.
import Project from '../Project';

const Portfolio = () => {
  
  const [projects] = useState([
    {
      'name': 'National Park Finder',
      'desc': 'HTML / CSS / JavaScript / APIs',
      'image': 'National-park-finder.png',
      'link': 'https://sam-walters93.github.io/hike-finder/',
      'github': 'https://github.com/hbbc248/National-Parks-Finder',
    },
    {
      'name': 'Call Me Maybe',
      'desc': 'Node / Express / MySQL / MVC',
      'image': 'call-me-maybe.png',
      'link': 'https://call-me-maybe-gp2.herokuapp.com/',
      'github': 'https://github.com/hbbc248/project_2',
    },
  ]);

  return (
    <section className="portfolio">
      <h1 className="portfolio__heading text-3xl pb-2 border-green-400 mb-4 border-b-2">Projects Portfolio</h1>
      <div className="portfolio__projects grid grid-cols-2 gap-8">
        {projects && projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
