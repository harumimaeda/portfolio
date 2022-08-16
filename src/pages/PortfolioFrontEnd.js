import React, { useEffect } from 'react';
import Header from '../components/Header';

function PortfolioFrontEnd() {
  useEffect(() => {
    document.title = 'portfólio/front-end - harumimaeda';
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-xl">PortfolioFrontEnd</h1>
    </div>
  );
}
 
export default PortfolioFrontEnd;