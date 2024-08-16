import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import ContactHeader from './Components/ContactHeader';
import ContactForm from './Components/ContactFor';
function App() {
  return (
    <>
      <Navbar />
      <ContactHeader />
      <ContactForm />
    </>
  );
}

export default App;
