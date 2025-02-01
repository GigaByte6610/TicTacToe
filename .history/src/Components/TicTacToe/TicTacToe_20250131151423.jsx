import React, { useState } from 'react'
import './TicTacToe.css'
 
import cross from '../Assets/cross.png';
import circle from '../Assets/circle.png';


const TicTacToe = () => {
    let [count,setCount]=useState(0);
    let[lock,setLock]=useState(false);
    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    const toggle = (e,num)=>{
        if(lock){
            return 0;
    }
    let newData = [...data];
    if(count%2===0){
        e.target.innerHtml=`<img src="${cross}" />`;
        newData[num]="X";
        setCount(++count);

    }
    else{
        e.target.innerHtml=`<img src="${circle}" />`;
        newData[num]="0";
        setCount(++count);
    }
    setData(newData);
    checkWin();
}
const checkWin=()=>{
    if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
        won(data);
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
        won(data);
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
        won(data);
    }
    else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
        won(data);
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
        won(data);
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
        won(data);}

    else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
        won(data);
    }

    else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
        won(data);
    }
    else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
        won(data);
    }
    

}
const won=(winner)=>{
    setLock(true);
}

  return (
    
    <div className='container'>
        <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
        < div className='board'>
        <div className="row1">
         <div className="boxes" onClick={(e) => toggle(e, 0)}>{data[0] && <img src={data[0] === "X" ? cross : circle} alt={data[0]} />}</div>
          <div className="boxes" onClick={(e) => toggle(e, 1)}>{data[1] && <img src={data[1] === "X" ? cross : circle} alt={data[1]} />}</div>
          <div className="boxes" onClick={(e) => toggle(e, 2)}>{data[2] && <img src={data[2] === "X" ? cross : circle} alt={data[2]} />}</div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => toggle(e, 3)}>{data[3] && <img src={data[3] === "X" ? cross : circle} alt={data[3]} />}</div>
          <div className="boxes" onClick={(e) => toggle(e, 4)}>{data[4] && <img src={data[4] === "X" ? cross : circle} alt={data[4]} />}</div>
          <div className="boxes" onClick={(e) => toggle(e, 5)}>{data[5] && <img src={data[5] === "X" ? cross : circle} alt={data[5]} />}</div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => toggle(e, 6)}>{data[6] && <img src={data[6] === "X" ? cross : circle} alt={data[6]} />}</div>
          <div className="boxes" onClick={(e) => toggle(e, 7)}>{data[7] && <img src={data[7] === "X" ? cross : circle} alt={data[7]} />}</div>
          <div className="boxes" onClick={(e) => toggle(e, 8)}>{data[8] && <img src={data[8] === "X" ? cross : circle} alt={data[8]} />}</div>
        </div>
        </div>
    
        <button className='reset'>Reset</button>
        
                          
           


    </div>
  )
}

export default TicTacToe;