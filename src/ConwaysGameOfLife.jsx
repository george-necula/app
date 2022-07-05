import React, { useState } from "react";
import Sketch from "react-p5";
import Draggable from 'react-draggable'

//redux stuff
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameOfLifeAC from './redux/actions/gameOfLifeAction'
import { isMobile } from "react-device-detect";

const Menu = () => {

  const control = useSelector((state) => state.gameOfLife)
  const dispach = useDispatch()
  const { clear, play } = bindActionCreators(gameOfLifeAC, dispach)

  return (
    <Draggable disabled={isMobile}>
      <div className='gameOfLifeMenu'>
        <p style={{ gridColumn: 'span 2' }}>Conway's Game Of Life</p>
        <button onClick={() => play()}>{
          (!control.play) ? 'start' : 'stop'}</button>
        <button onClick={() => clear()}>Restart</button>
      </div>
    </Draggable>

  )
}


let screenWidth
let screenHeight
let cellSize
let cellCountX
let cellCountY
let cells
let justRedraw = false
function test(cell, neighbours) {
  if (cell === 1 && (neighbours < 2 || neighbours > 3))
    return 0
  if (cell === 0 && (neighbours === 3))
    return 1
  return cell
}

const ConwaysGameOfLife = () => {

  const control = useSelector((state) => state.gameOfLife)
  const dispach = useDispatch()
  const { clear, play } = bindActionCreators(gameOfLifeAC, dispach)


  const setup = (p5, canvasParentRef) => {
    screenWidth = window.innerWidth * 0.99  //width of canvas
    screenHeight = window.innerHeight * 0.99  //width of canvas
    cellSize = 20       //number of pixels per cell


    cellCountX = screenWidth / cellSize
    cellCountY = screenHeight / cellSize

    cells = []
    for (let i = 0; i < cellCountX; i++) {
      let temp = []
      for (let j = 0; j < cellCountY; j++) {
        temp.push([0, 0])
      }
      cells.push(temp)

    }
    // console.log(cells)
    p5.createCanvas(screenWidth, screenHeight).parent(canvasParentRef)
    //   //toad
    //   cells[4][10][0] = 1
    //   cells[5][10][0] = 1
    //   cells[6][10][0] = 1

    //   cells[3][11][0] = 1
    //   cells[4][11][0] = 1
    //   cells[5][11][0] = 1

    //glider
    // cells[10][11][0] = 1
    // cells[11][12][0] = 1
    // cells[12][10][0] = 1
    // cells[12][11][0] = 1
    // cells[12][12][0] = 1


    cells[4][10][0] = 1
    cells[5][10][0] = 1
    cells[6][10][0] = 1

    // print(cells)

    p5.frameRate(5)

  }



  const draw = (p5) => {
    // noLoop()
    // p5.background(20);
    if (control.clear) {
      if (control.play) {
        play()
      }
      clear()
      for (let i = 0; i < cellCountX; i++) {
        for (let j = 0; j < cellCountY; j++) {
          cells[i][j] = [0, 0]
        }

      }
    }


    if (control.play) {
      p5.fill(255)
      p5.clear()
      // print(cells)
      for (let i = 1; i < cellCountX - 1; i++) {
        for (let j = 1; j < cellCountY - 1; j++) {
          let neighbours = cells[i - 1][j - 1][0] + cells[i - 1][j][0] + cells[i - 1][j + 1][0] + cells[i][j - 1][0] + cells[i][j + 1][0] + cells[i + 1][j - 1][0] + cells[i + 1][j][0] + cells[i + 1][j + 1][0]
          cells[i][j][1] = test(cells[i][j][0], neighbours)
        }
      }

      for (let i = 1; i < cellCountX - 1; i++) {
        for (let j = 1; j < cellCountY - 1; j++) {
          cells[i][j][0] = cells[i][j][1]

          if (cells[i][j][0] === 1)
            p5.rect(i * cellSize, j * cellSize, cellSize, cellSize)
        }
      }
    }
    // console.log(frameRate())

    if (justRedraw === true) {
      p5.clear()
      justRedraw = false
      for (let i = 1; i < cellCountX - 1; i++) {
        for (let j = 1; j < cellCountY - 1; j++) {
          if (cells[i][j][0] === 1)
            p5.rect(i * cellSize, j * cellSize, cellSize, cellSize)
        }
      }
    }

  }


  const mp = (e) => {
    var decision = (e.mouseY > 0)

    let x = Math.floor(e.mouseX / cellSize)
    let y = Math.floor(e.mouseY / cellSize)
    if (decision && control.play === false) {
      console.log(x, y)
      justRedraw = true
      cells[x][y][0] = (cells[x][y][0] == 0) ? 1 : 0;
    }
  }

  return (
    <div className="ConwaysGameOfLife">
      <Menu />
      <Sketch setup={setup} draw={draw} mousePressed={mp} />
    </div>
  )
}

export default ConwaysGameOfLife