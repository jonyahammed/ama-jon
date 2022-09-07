import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

// in App.js
import { library } from '@fortawesome/fontawesome-svg-core'

import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'


library.add( faSquareCheck)



function App() {
  return (
    <div>
     <Header></Header>
     <Shop></Shop>
    </div>
  );
}

export default App;
