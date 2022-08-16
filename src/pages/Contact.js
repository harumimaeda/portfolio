import React, { useEffect } from 'react';
import Header from '../components/Header';

function Contact() {
  useEffect(() => {
    document.title = 'entre em contato! - harumimaeda';
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-xl">Contact me</h1>
    </div>
  );
}
 
export default Contact;