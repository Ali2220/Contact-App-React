import React, { useState } from 'react';
import Btn from './Btn';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const ContactForm = () => {
  const [name, setname] = useState('Ali Sarwar');
  const [email, setemail] = useState('ali@gmail.com ');
  const [text, setText] = useState('Hello World');

  const onSubmit = (e) => {
    e.preventDefault();

    const enteredName = e.target[0].value;
    const enteredEmail = e.target[1].value;
    const enteredText = e.target[2].value;

    // Set state
    setname(enteredName);
    setemail(enteredEmail);
    setText(enteredText);

    // Save data to localStorage
    localStorage.setItem('name', enteredName);
    localStorage.setItem('email', enteredEmail);
    localStorage.setItem('text', enteredText);

    alert('Your Data is stored in Local Storage...');

    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
  };

  return (
    <>
      <section className="flex flex-col lg:flex-row max-w-5xl mx-auto p-4">
        <div className="lg:w-1/2 w-full">
          <div className="flex flex-col space-y-3 lg:space-y-0 lg:space-x-3 lg:flex-row mb-4 ml-20">
            <Btn
              text="VIA SUPPORT CHAT"
              icon={<MdMessage className="inline mr-2" />}
            />
            <Btn
              text="VIA CALL"
              icon={<FaPhoneAlt className="inline mr-2" />}
            />
          </div>
          <Btn
            text="VIA EMAIL FORM"
            icon={<MdMessage className="inline mr-2" />}
            className="bg-white text-black rounded-md border border-black mt-3 lg:mt-0 w-full lg:w-[315px] font-semibold ml-[90px]" // Custom styles for the third button
          />

          <form
            onSubmit={onSubmit}
            action=""
            className="mt-5 grid justify-center items-center"
          >
            <div className="flex flex-col w-full lg:w-72 relative">
              <label
                htmlFor="Name"
                className="absolute top-[-14px] left-[10px] bg-white pl-2 pr-2 font-semibold"
              >
                Name
              </label>
              <input
                className="border border-black h-9 px-2 rounded-md"
                type="text"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col w-full lg:w-72 relative mt-4">
              <label
                htmlFor="E-mail"
                className="absolute top-[-14px] left-[10px] bg-white pl-2 pr-2 font-semibold"
              >
                E-mail
              </label>
              <input
                className="border border-black h-9 px-2 rounded-md"
                type="email"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col w-full lg:w-72 relative mt-4">
              <label
                htmlFor="text"
                className="absolute top-[-14px] left-[10px] bg-white pl-2 pr-2 font-semibold"
              >
                Text
              </label>
              <textarea className="border border-black h-9 p-2 rounded-md" />
            </div>
            <div className="flex justify-end w-full lg:w-72">
              <Btn text="SUBMIT" className="mt-2 w-full lg:w-48" />
            </div>
          </form>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:flex lg:justify-center lg:items-center">
          <img
            className="w-full lg:w-3/4 object-contain"
            src="src/assets/pic.svg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default ContactForm;
