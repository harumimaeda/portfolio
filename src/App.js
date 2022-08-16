import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home, About, Portfolio, Contact, NotFound, PortfolioDesign, PortfolioFrontEnd } from './pages/index';
// https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom

export default function App() {
  return (
    <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={ <About /> } />
          <Route exact path='/portfolio' element={ <Portfolio /> } />
          <Route exact path='/portfolio/design' element={ <PortfolioDesign /> } />
          <Route exact path='/portfolio/front-end' element={ <PortfolioFrontEnd /> } />
          <Route exact path='/contact' element={ <Contact /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
    </div>
  );
}


