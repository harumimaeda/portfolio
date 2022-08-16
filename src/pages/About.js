import React, { useEffect } from 'react';
import Header from '../components/Header';

function About() {
  useEffect(() => {
    document.title = 'sobre mim - harumimaeda';
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-xl">About</h1>
    </div>
  );
}
 
export default About;
