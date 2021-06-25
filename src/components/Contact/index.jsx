import React, { useState } from 'react';
import { capitalizeFirstLetter, validateEmail } from '../../utils/helpers';

// Components.
import Button from '../Button';

const ContactForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessages, setErrorMessages] = useState({'email': '', 'name': '', 'message': ''});

  const handleInputOnChange = (event) => {
    if (event.target.name === 'email') {
      const emailValid = validateEmail(event.target.value);

      if (!emailValid) {
        setErrorMessages({ ...errorMessages, 'email': 'Your email is invalid.' });
      } else {
        setErrorMessages({ ...errorMessages, 'email': '' });
      }
    }

    if (event.target.name === 'name' || event.target.name === 'message') {
      if (!event.target.value.length) {
        setErrorMessages({ ...errorMessages, [event.target.name]: `${capitalizeFirstLetter(event.target.name)} is required.` });
      } else {
        setErrorMessages({ ...errorMessages, [event.target.name]: '' });
      }
    }

    if (!errorMessages[event.target.name]) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
    console.log(errorMessages[event.target.name]);
    console.log(formState);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formState.email || !formState.name || !formState.message) {
      console.log('Contact data is missing, Please fill complete the form'); 
    } else {
      console.log(formState);
    }
  };

  return (
    <section className="contact">
      <h1 className="portfolio__heading text-3xl pb-2 border-green-400 mb-4 border-b-2">Contact Me</h1>
      <p className="contact__description mb-4">Front-end form for demonstration only!</p>
      <form
        id="contact-form"
        className="w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <div className="input__container md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="name"
            >
              Name:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full p-2"
              type="text"
              name="name"
              defaultValue={name}
              onChange={handleInputOnChange}
              onBlur={handleInputOnChange}
            />
            {errorMessages.name && (
              <p className="error-text text-red-600 text-sm">{errorMessages.name}</p>
            )}
          </div>
        </div>
        <div className="input__container md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="email"
            >
              Email:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full p-2"
              type="email"
              name="email"
              defaultValue={email}
              onChange={handleInputOnChange}
              onBlur={handleInputOnChange}
            />
            {errorMessages.email && (
              <p className="error-text text-red-600 text-sm">{errorMessages.email}</p>
            )}
          </div>
        </div>
        <div className="input__container md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="message"
            >
              Message:
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className="w-full p-2"
              name="message"
              rows="5"
              defaultValue={message}
              onChange={handleInputOnChange}
              onBlur={handleInputOnChange}
            />
            {errorMessages.message && (
              <p className="error-text text-red-600 text-sm">{errorMessages.message}</p>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <Button type="submit" text="Submit" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
