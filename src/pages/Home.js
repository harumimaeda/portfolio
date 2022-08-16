import React, { useEffect } from 'react';
import Header from '../components/Header';

function Home() {
  useEffect(() => {
    document.title = 'harumimaeda';
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-xl">Home</h1>
    </div>
    );
  }
 
export default Home;