import React from 'react';
import { MdMessage } from 'react-icons/md';

const Btn = (props) => {
  const Icons = props.icon;
  return (
    <>
      <button
        className={`bg-slate-950 text-white px-3 py-3 rounded-md text-center mx-2 cursor-pointer ${props.className}`}
      >
        {Icons}
        {props.text}
      </button>
    </>
  );
};

export default Btn;
