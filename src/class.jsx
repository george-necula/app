import React from 'react'


class ToDoWithClassComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {toDos : []}
  }
  
  addElementToList(e){
    // console.log(e.target.value)
    if (e.key === "Enter" && e.target.value) {
      this.setState({toDos: [...this.state.toDos, e.target.value]} )
      console.log('added : ', e.target.value )
      e.target.value = ''
    }
  }
  
  deleteItem(item){
    let temp = this.state.toDos
    temp.splice (temp.indexOf(item), 1)
    this.setState({toDos: temp})
    console.log('removed: ', item)
  }

  render(){
    return(
      <div className='ToDoWithClassComponent'>
        <p>To do list with class component</p>
        <button onClick={() => {
          console.log('toDos: ',this.state.toDos)
          this.setState({toDos: []});}}>clear list</button>
        <input placeholder='input to do here' type='text'
        onKeyDown={(e) => this.addElementToList(e)} />
        <ul>
          {this.state.toDos.map((item) => (
            <li className='toDoClassItem' key={item}>{item}            

            <button className='toDoClassDone' onClick={() => this.deleteItem(item)}>Done</button>
            </li>
          ))}
        </ul>

      </div>
    )
  }
}

class CounterWithClass extends React.Component {
  constructor(props){
    super(props)
    this.state = {count: 0}

  }

  render() {
    return (
      <div className='CounterWithClass'>
        <p>Counter made as class component:</p><br />
        <p>{this.state.count}</p>
        <button onClick={ () => this.setState({count : this.state.count - 1})}>decrement 1</button>
        <button onClick={ () => this.setState({count : this.state.count + 1})}>increment 1</button>
      </div>
    ) 
    }
}

export {ToDoWithClassComponent,CounterWithClass}