import React from 'react';

import './App.scss';
import smoothscrollPolyfill from './utils/smoothScrollPolyfill';
import Header from './modules/common/header/Header';
import UxUiDesign from './modules/common/portfolio/UxUiDesign';

smoothscrollPolyfill();

function App(): React.ReactElement {
  return (
    <div className="App">
      <Header />
      <section className="portfolio">
        <UxUiDesign />
      </section>
    </div>
  );
}

export default App;
