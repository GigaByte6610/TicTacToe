import React, { useState } from 'react'
import './TicTacToe.css'
 import  cross from './src/Components/Assets/circle.png'
  import circle from './src/Components/Assets/cross.png'
let data =["","","","","","","","",""]

const TicTacToe = () => {
    let [count,setCount]=useState(0);
    let[lock,setLock]=useState(false);
    const toggle=(e,num)=>{
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
                <div className="boxes " onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className="row2">
                <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className="row3">
                <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        <button className='reset'>Reset</button>
        
                          
           


    </div>
  )
}}

export default TicTacToe;