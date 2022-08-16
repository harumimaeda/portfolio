import React, { useEffect } from 'react';
import Header from '../components/Header';

function NotFound() {
  useEffect(() => {
    document.title = 'página não encontrada! :( - harumimaeda';
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-xl">NotFound</h1>
    </div>
  );
}
 
export default NotFound;