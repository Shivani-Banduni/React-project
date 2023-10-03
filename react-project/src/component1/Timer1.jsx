import React, { useEffect, useState } from 'react';
import './Timer1.css'
const Timer1 = () => {
    const[active,setactive]=useState(false)
    const[hour,sethour]=useState(0)
    const[min,setmin]=useState(0)
    const[sec,setsec]=useState(0)

useEffect(()=>{
   let id= setInterval(() => {
    if(active==true && sec<=59){
        setsec(sec+1)
    }else if(sec>59){
        setmin(min+1);
        setsec(0)
        console.log(hour)
    }
    else if(min>59){
        sethour(hour+1)
        setmin(0)

    }
    }, 1000);
    return (()=>clearInterval(id))
})
function handlestart(){
    setactive(true)
}
function handlepause(){
setactive(false)
console.log(active)
}
function handlerestart(){
    setactive(true);
    sethour(0)
    setmin(0)
    setsec(0)
}

    return (
        <div className='main_div'>
            <div className='main_div1'>
            <b className='text'>Stopwatch</b><br></br>
            <b className='text'>{hour}Hour :{min}min :{sec}sec</b>
            </div>
            <div className='main'>

                <button className='btn' onClick={handlestart}>Start</button>
                <button className='btn' onClick={handlepause}>Pause</button>
                <button  className='btn' onClick={handlerestart}>Restart</button>


            </div>
        </div>
    );
}

export default Timer1;
