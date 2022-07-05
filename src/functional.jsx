import { React, useState, useEffect, useRef } from 'react'

//redux stuff
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskListAC from './redux/actions/taskListAction'
import * as counterAC from './redux/actions/counterAction'

function ToDoWithFunctionalComponent() {

  const [len, setLen] = useState(10)

  //redux
  const taskList = useSelector((state) => state.taskList)
  const dispach = useDispatch()
  const { addTask, removeTask, clearTasks } = bindActionCreators(taskListAC, dispach)

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  }



  // function deleteItem(key) {
  //   let temp = listlen
  //   console.log('removed: ', temp[key])
  //   delete temp[key]
  //   setList(temp)
  //   setCount(count + 1)
  // }

  function debug() {
    const debugValues = ['banana', 'kiwi', 'fruit salad with pineapple and mango']
    debugValues.map(fruit => addTask(generateKey(fruit), fruit))
  }



  function max(a, b) {
    return (a > b) ? a : b
  }

  function widthSet(e) {
    const textLen = e.target.value.length;
    console.log('test : ', max(10, textLen))
    return max(10, textLen / 2)
  }
  function addElementToList(e) {
    // console.log(e.target.value)
    setLen(widthSet(e))
    if (e.key === "Enter" && e.target.value) {
      const id = generateKey(e.target.value);
      const tempVal = e.target.value
      // const newVal = {id, tempVal}
      // setList(temp)
      addTask(id, tempVal)
      e.target.value = ''
    }
  }

  useEffect(() => {
    // debug()

  }, []);

  return (
    <div className='toDoWithFunctionalComponent'>
      <p>To do list with functional component</p>
      {/* <p>Tasks done: {count}</p> */}
      <input type='text' placeholder='input to do item'
        style={{ width: len + 'rem', marginBottom: '1rem' }}
        onKeyDown={(e) => addElementToList(e)}
        maxLength='40' />
      <button className='clearButton' onClick={() => clearTasks()}>clear list</button>
      <ul className='itemList'>
        {taskList.map((item) => (
          <div className='item'>
            <li className='itemValue' key={() => generateKey(item.task)}>{item.task}</li>
            <button className='itemButton' onClick={() => removeTask(item.id)}>Done</button>
          </div>))}
      </ul>
    </div>
  )
}


function CounterWithUseState() {
  // const [count, setCount] = useState(0)
  //redu
  const counter = useSelector((state) => state.counter)
  const dispach = useDispatch();
  const { increment, decrement } = bindActionCreators(counterAC, dispach)
  // console.log('counter: ', counter);
  return (
    <div className='CounterWithUseState'>
      <p>Counter made as functional  component:</p>
      <p>{counter}</p>
      <div className='buttons'>
        <button onClick={() => decrement()}>decrement 1</button>
        <button onClick={() => increment()}>increment 1</button>
      </div>
    </div>
  );
}

export { ToDoWithFunctionalComponent, CounterWithUseState }