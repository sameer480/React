import React from 'react';
import './App.css';
import ButtonGroup from './Arrow';
import Greeting from './Greeting';
const sampleItem=[
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
]
const App = () => {
  return (
    <div>
<Greeting name="John" />
      <h1>Welcome to the Counter App</h1>
      <ButtonGroup />
      <Cardlist items={sampleItem} />
    </div>
  );
};




export default App;
