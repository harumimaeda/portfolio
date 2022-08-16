import React, { useEffect } from 'react';
import Header from '../components/Header';

function Portfolio() {
  useEffect(() => {
    document.title = 'portfólio - harumimaeda';
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-xl">Portfolio</h1>
    </div>
  );
}
 
export default Portfolio;