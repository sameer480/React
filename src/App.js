import React from 'react';
import './App.css';
import ButtonGroup from './Arrow';
import Greeting from './Greeting';
import Cardlist from './Cardlist';
const sampleItem=[
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
]
const sampleTodos = [
  { id: 1, task: 'Learn React', completed: false },
  { id: 2, task: 'Build a Todo App', completed: true },
  { id: 3, task: 'Practice JS', completed: false }
];
const App = () => {
  return (
    <div>
<Greeting name="John" />
      <h1>Welcome to the Counter App</h1>
      <ButtonGroup />
      <Cardlist items={sampleItem} />
      <Todolist items ={sampleTodos}/>
    </div>
  );
};




export default App;
