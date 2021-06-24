import React from 'react';

// Components.
import Button from '../Button';

const Project = ({ project }) => {
  const {
    name,
    desc,
    image,
    link,
    github,
  } = project;

  const importAll = (r) => {
    let images = {};
    // eslint-disable-next-line array-callback-return
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const allImages = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="project">
      <h2 className="project__name text-xl py-2">{name}</h2>
      <p className="project__desc pb-2">{desc}</p>
      <img className="project__image border-2 rounded border-green-400"src={allImages[`${image}`].default} alt={`${name} project screenshot`} />
      <Button 
        classNames="project__link button__link mr-2"
        isLink={true}
        newTab={true}
        text="View Live Project"
        link={link}
      />
      <Button 
        classNames="project__link button__link"
        isLink={true}
        newTab={true}
        text="GitHub Repository"
        link={github}
      />
    </div>
  );
};

export default Project;
