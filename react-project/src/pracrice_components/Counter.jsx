import React from 'react';
import { useState } from 'react';
import './counter.css'
const Counter = () => {
const [count,setcount]= useState(0)
    return (
        <div className='main'>
            <h1>Counter:{count}</h1>
            <div className='btns'>
            <button onClick={()=>setcount(count+1)}>ADD</button>
            <button onClick={()=>setcount(count-1)}>SUBTRACT</button>
            </div>


        </div>
    );
}

export default Counter;
