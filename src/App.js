import React from 'react';
import './App.css';
import ButtonGroup from './Arrow';
import Greeting from './Greeting';

const App = () => {
  return (
    <div>
<Greeting name="John" />
      <h1>Welcome to the Counter App</h1>
      <ButtonGroup />
    </div>
  );
};




export default App;
