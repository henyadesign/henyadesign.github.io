import React from 'react';

import './App.scss';
import smoothscrollPolyfill from './utils/smoothScrollPolyfill';
import Header from './modules/common/header/Header';

smoothscrollPolyfill();

function App(): React.ReactElement {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
