import React from 'react'
import './styles/App.css'

//custom componenet
import ClassComponent from './class.jsx'
import {ToDoWithFunctionalComponent, CounterWithUseState} from './functional'



function App() {

  return (
    <div id='mainBody'>
      <CounterWithUseState />
      <ClassComponent.CounterWithClass />
      <ToDoWithFunctionalComponent />
      <ClassComponent.ToDoWithClassComponent />
    </div>
  );
}

export default App 
