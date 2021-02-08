import React from 'react';

import './App.scss';
import smoothscrollPolyfill from './utils/smoothScrollPolyfill';
import Header from './modules/header/Header';
import Presentation from './modules/presentation/Presentation';
import GraphicDesign from './modules/portfolio/GraphicDesign';
// import UxUiDesign from './modules/portfolio/UxUiDesign';

smoothscrollPolyfill();

function App(): React.ReactElement {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <section className="portfolio">
        <GraphicDesign />
        {/* <UxUiDesign /> */}
      </section>
    </div>
  );
}

export default App;
