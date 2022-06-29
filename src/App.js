import React from 'react'
import {ToDoWithClassComponent,CounterWithClass} from './class.jsx'
import {ToDoWithFunctionalComponent, CounterWithUseState} from './functional'
import './styles/App.css'


function App() {
  return (
    <div id='mainBody'>
      <CounterWithUseState />
      <CounterWithClass />
      <ToDoWithFunctionalComponent />
      <ToDoWithClassComponent />
    </div>
  );
}

export default App;
