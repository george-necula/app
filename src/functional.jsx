import {React,  useState } from 'react'

function ToDoWithFunctionalComponent(){
  const [list, setList] = useState({});
  const [count, setCount] = useState(0);
  
  const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
  }

  function addElementToList(e){
    // console.log(e.target.value)
    if (e.key === "Enter" && e.target.value) {
      const id = generateKey(e.target.value);
      const tempVal = e.target.value
      // const newVal = {id, tempVal}
    // setList(temp)
      setList(list => ({...list, [id]: tempVal}))

      console.log(id, list)
      e.target.value = ''
    }
  }

  function deleteItem(key){
    let temp = list
    console.log('removed: ', temp[key])
    delete temp[key]
    setList(temp)
    setCount(count + 1)
  }

  return(
    <div className='toDoWithFunctionalComponent'>
      <p>To do list with functional component</p>
      <p>Tasks done: {count}</p>
      <button onClick={() => setList({})}>clear list</button>
      <input type='text' placeholder='input to do item' 
      onKeyDown={(e) => addElementToList(e)}/>
      <ul>
        {Object.entries(list).map(([key,item]) => (
        <li key={key}>{item}
        <button onClick={() => deleteItem(key)}>Done</button></li>))}
      </ul>
    </div>
  )
}


function CounterWithUseState(){
  const [count, setCount] = useState(0)
  return (
    <div className='CounterWithUseState'>
      <p>Counter made as functional  component:</p><br />
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>decrement 1</button>
      <button onClick={() => setCount(count + 1)}>increment 1</button>
    </div>
  );
}

export {ToDoWithFunctionalComponent, CounterWithUseState}