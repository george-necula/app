import React, { useState } from "react";
import Sketch from "react-p5";
import Draggable from 'react-draggable'

//redux stuff
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as automataAC from './redux/actions/automataAction'

const Menu = () => {

  const automata = useSelector((state) => state.automata)
  const dispach = useDispatch()
  const { restart, changeState, changeRule } = bindActionCreators(automataAC, dispach)

  return (
    <Draggable>
      <div className='automataMenu'>
        <p>Input rule: </p>
        <input type="text" placeholder="" onKeyDown={(e) => {
          if (e.key === 'Enter') {
            changeRule(parseInt(e.target.value))
            e.target.value = ''
          }
        }} style={{ width: '2rem' }} />
        <p style={{ gridColumn: 'span 2' }}>Currently showing rule {automata.rule}</p>
        <button onClick={() => changeState()}>{
          (!automata.playState) ? 'start' : 'stop'}</button>
        <button onClick={() => restart()}>Restart</button>
      </div>
    </Draggable>

  )
}


class Cell {
  constructor(alive) {
    this.alive = alive
  }

  rule_check(prevoius_cells, index, rule) {
    var situation = prevoius_cells[index - 1].alive * 4 + prevoius_cells[index].alive * 2 + prevoius_cells[index + 1].alive * 1 + 1
    return ('00000000' + rule.toString(2)).slice(-8)[8 - situation]
  }
}

var screen_width
var screen_height
var cell_width
var cell_count_x
var cell_count_y
var cell_list = []
var cell_new_list = []
var row_count

export const Automata = () => {


  const automata = useSelector((state) => state.automata)
  const dispach = useDispatch()
  const { restart, changeState, changeRule } = bindActionCreators(automataAC, dispach)

  var rule = automata.rule


  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    row_count = 0
    screen_width = window.innerWidth * 0.98
    screen_height = window.innerHeight * 0.99
    cell_width = 1
    cell_count_x = screen_width / cell_width
    cell_count_y = screen_height / cell_width
    p5.createCanvas(screen_width, screen_height).parent(canvasParentRef);
    for (let i = 0; i < cell_count_x; i++)
      cell_list.push(new Cell(0))

    cell_new_list = [...cell_list]
    cell_list[Math.floor(cell_count_x / 2)].alive = 1
    // p5.background(200);
  };



  const draw = (p5) => {

    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes

    if (automata.restart === true) {
      restart()

      // console.log('restart');
      screen_width = window.innerWidth * 0.98
      screen_height = window.innerHeight * 0.99
      cell_count_x = screen_width / cell_width
      cell_count_y = screen_height / cell_width
      row_count = 0
      rule = automata.rule
      for (let i = 0; i < cell_count_x; i++)
        cell_list[i] = new Cell(0)

      cell_new_list = [...cell_list]
      cell_list[Math.floor(cell_count_x / 2)].alive = 1

      p5.resizeCanvas(screen_width, screen_height)
      // p5.background(50);
    }

    if (automata.playState) {
      // console.log('something is happening')
      for (let i = 1; i < cell_count_x - 1; i++) {
        if (cell_list[i].alive === '1') {
          p5.rect(i * cell_width, row_count * cell_width, cell_width, cell_width, 4, 4, 4, 4)
        }
        cell_new_list[i].alive = cell_list[i].rule_check(cell_list, i, rule)
      }


      for (let i = 0; i < cell_count_x; i++)
        cell_list[i] = new Cell(cell_new_list[i].alive)

      for (let i = 0; i < cell_count_x; i++)
        cell_new_list[i].alive = 0

      if (row_count === 60) {
        // p5.noLoop()
        // p5.frameRate(0)

      }
      row_count++
    }
  };

  // const mp = (e) => {
  //   var decision = (e.mouseY > 0) && (e.mouseY < window.innerHeight)
  //   if (decision)
  //     console.log(e.mouseX, e.mouseY)
  // }

  return (
    <div className='Automata'>
      <Menu />
      <Sketch setup={setup} draw={draw} />
    </div>
  )

};