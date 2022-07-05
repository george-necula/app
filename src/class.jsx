import React from 'react'
import { connect } from 'react-redux/'


const mapStateToPropsTask = (state) => {
  const taskList = state.taskList;
  return {
    taskList
  };
}

const mapDispatchToPropsTask = (dispatch) => ({
  addTask: (item) => dispatch({ type: 'ADD_TASK', payload: item }),
  removeTask: (item) => dispatch({ type: 'REMOVE_TASK', payload: item }),
  clearTasks: () => dispatch({ type: 'CLEAR_TASKS' })
})

class ToDoWithClassComponent extends React.Component {
  // constructor(props){
  //   super(props)
  //   // this.state = {toDos : []}
  // }

  generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  }

  addElementToList(e) {
    // console.log(e.target.value)
    if (e.key === "Enter" && e.target.value) {
      this.props.addTask({ id: this.generateKey(e.target.value), task: e.target.value })
      // console.log('added : ', e.target.value )
      e.target.value = ''
    }
  }

  deleteItem(item) {
    // let temp = this.state.toDos
    // temp.splice (temp.indexOf(item), 1)
    // this.setState({toDos: temp})
    // console.log('removed: ', item)
  }



  render() {
    return (
      <div className='toDoWithFunctionalComponent'>
        <p>To do list with class component</p>
        <input placeholder='input to do here' type='text'
          onKeyDown={(e) => this.addElementToList(e)} style={{ marginBottom: '1rem' }} />
        <button className='clearButton' onClick={() => { this.props.clearTasks(); }}>clear list</button>
        <ul className='itemList'>
          {this.props.taskList.map((item) => (
            <div className='item'>
              <li className='itemValue' key={() => this.generateKey(item.task)}>{item.task} </li>
              <button className='itemButton' onClick={() => this.props.removeTask(item)}>Done</button>
            </div>
          ))}
        </ul>

      </div>
    )
  }
}

const mapStateToPropsCounter = (state) => {
  const counter = state.counter;
  return {
    counter
  };
}

const mapDispatchToPropsCounter = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
})

class CounterWithClass extends React.Component {
  // constructor(props) {
  //   super(props)
  //   // this.state = { count: 0 }

  // }

  render() {
    let counter = this.props.counter;
    return (
      <div className='CounterWithClass'>
        <p>Counter made as class component:</p>
        <p>{counter}</p>
        <div className='buttons'>
          <button onClick={() => this.props.decrement()}>decrement 1</button>
          <button onClick={() => this.props.increment()}>increment 1</button>
        </div>
      </div>
    )
  }
}





// export  connect(mapStateToPropsCounter, mapDispatchToPropsCounter)(CounterWithClass)
export default {
  ToDoWithClassComponent: connect(mapStateToPropsTask, mapDispatchToPropsTask)(ToDoWithClassComponent),
  CounterWithClass: connect(mapStateToPropsCounter, mapDispatchToPropsCounter)(CounterWithClass)
}
