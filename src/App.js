import React from 'react'
import './styles/App.css'

//custom componenet
import ClassComponent from './class.jsx'
import { ToDoWithFunctionalComponent, CounterWithUseState } from './functional'
import { Automata } from './1dAutomata'


function App() {

  return (
    <div id='mainBody'>
      <div className='firstPane'>
        <CounterWithUseState />
        <ClassComponent.CounterWithClass />
        <ToDoWithFunctionalComponent />
        <ClassComponent.ToDoWithClassComponent />
      </div>
      <Automata />
    </div>
  );
}

export default App 
