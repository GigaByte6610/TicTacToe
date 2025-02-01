import React from 'react'
import './TicTacToe.css'
import  './Components/Assets/circle.png'
import './Components/Assets/cross.png'
const TicTacToe = () => {
  return (
    <div className='container'>
        <h1 class name='title'>Tic Tac Toe Game In <span>React</span></h1>
        <div className='board'></div>
        <button className='reset'>Reset</button>
        
                          
           


    </div>
  )
}

export default TicTacToe