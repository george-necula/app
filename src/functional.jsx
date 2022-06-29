import { React } from 'react'

//redux stuff
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskListAC from './redux/actions/taskListAction'
import * as counterAC from './redux/actions/counterAction'

function ToDoWithFunctionalComponent() {
  // const [list, setList] = useState({});
  // const [count, setCount] = useState(0);

  const taskList = useSelector((state) => state.taskList)
  const dispach = useDispatch()
  const { addTask, removeTask , clearTasks} = bindActionCreators(taskListAC, dispach)


  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  }

  function addElementToList(e) {
    // console.log(e.target.value)
    if (e.key === "Enter" && e.target.value) {
      const id = generateKey(e.target.value);
      const tempVal = e.target.value
      // const newVal = {id, tempVal}
      // setList(temp)
      addTask(id, tempVal)
      e.target.value = ''
    }
  }

  // function deleteItem(key) {
  //   let temp = list
  //   console.log('removed: ', temp[key])
  //   delete temp[key]
  //   setList(temp)
  //   setCount(count + 1)
  // }

  return (
    <div className='toDoWithFunctionalComponent'>
      <p>To do list with functional component</p>
      {/* <p>Tasks done: {count}</p> */}
      <button onClick={() => clearTasks()}>clear list</button>
      <input type='text' placeholder='input to do item'
        onKeyDown={(e) => addElementToList(e)} />
      <ul>
        {taskList.map((item) => (
          <li key={item.id}>{item.task}
            <button onClick={() => removeTask(item.id)}>Done</button></li>))}
      </ul>
    </div>
  )
}


function CounterWithUseState() {
  // const [count, setCount] = useState(0)
  //redux
  const counter = useSelector((state) => state.counter)
  const dispach = useDispatch();
  const { increment, decrement } = bindActionCreators(counterAC, dispach)
  // console.log('counter: ', counter);
  return (
    <div className='CounterWithUseState'>
      <p>Counter made as functional  component:</p>
      <p>{counter}</p>
      <div className='buttons'>
        <button onClick={() =>  decrement() }>decrement 1</button>
        <button onClick={() =>  increment() }>increment 1</button>
      </div>
    </div>
  );
}

export { ToDoWithFunctionalComponent, CounterWithUseState }