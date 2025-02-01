import React, { useState } from 'react'
import './TicTacToe.css'
//  import  cross from './Components/Assets/circle.png'
//  import circle from './Components/Assets/cross.png'
let data =["","","","","","","","",""]

const TicTacToe = () => {
    let [count,setCount]=useState(0);
    let[lock,setLock]=useState(false);
    const toggle=(w,num)=>{
        if(lock){
            return 0;
    }
    if(count%2===0){
        e.target.innerHtml=`<img src="${cross}" />`;
        data[num]="X";
        setCount(++count);

    }
    else{
        e.target.innerHtml=`<img src="${circle}" />`;
        data[num]="O";
        setCount(++count);
    }
  return (
    
    <div className='container'>
        <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
        <div className='board'>
            <div className="row1">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>
            <div className="row2">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>
            <div className="row3">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>
        </div>
        <button className='reset'>Reset</button>
        
                          
           


    </div>
  )
}}

export default TicTacToe;