import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="px-10">
        <div className="logo">
          <img src="src/assets/logo.png" alt="" />
        </div>
        <ul className="font-bold">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
