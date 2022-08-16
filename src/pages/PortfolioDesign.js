import React, { useEffect } from 'react';
import Header from '../components/Header';

function PortfolioDesign() {
  useEffect(() => {
    document.title = 'portfólio/design - harumimaeda';
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-xl">PortfolioDesign</h1>
    </div>
  );
}
 
export default PortfolioDesign;