import React from 'react'
import './App.css'

//custom componenet
import ClassComponent from './class.jsx'
import { ToDoWithFunctionalComponent, CounterWithUseState } from './functional'
import { Automata } from './1dAutomata'
import Navbar from './Navbar'
import JokeSection from './JokeSection'
import ConwaysGameOfLife from './ConwaysGameOfLife'
function App() {

  return (
    <div id='mainBody'>
      <Navbar>
        <div className='firstPane'>
          <CounterWithUseState />
          <ClassComponent.CounterWithClass />
          <ToDoWithFunctionalComponent />
          <ClassComponent.ToDoWithClassComponent />
        </div>
        <div className='secondPane'>
          <Automata />
        </div>
        <div className='thirdPane'>
          <JokeSection />
        </div>
        <div className='fourthPane'>
          <ConwaysGameOfLife />
        </div>
      </Navbar>
    </div>
  );
}

export default App 
