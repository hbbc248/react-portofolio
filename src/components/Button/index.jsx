import React from 'react';

const Button = ({ isLink, classNames, newTab, link, text, onClick, type = "button" }) => {
  const classes = `${classNames} inline-block bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-2 my-2 border border-green-400 rounded hover:border-transparent`;
  const target = newTab !== false ? 'blank' : '';

  if (isLink) {
    return (
      <a
        className={classes}
        href={link}
        target={target}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
