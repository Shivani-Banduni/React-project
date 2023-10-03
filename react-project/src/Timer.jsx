import React, { useEffect, useState } from 'react';

import './/Timer.css'
const Timer = () => {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(() => {
        let interval;
    
        if (isActive) {
          interval = setInterval(() => {
            if (sec < 59) {
              setSec(sec + 1);
            } else if (min < 59) {
              setMin(min + 1);
              setSec(0);
            } else {
              setTime(time + 1);
              setMin(0);
              setSec(0);
            }
          }, 100);
           console.log("time",time,"min",min, 'sec',sec)
        } else {
          clearInterval(interval);
        }
    
        return () => {
          clearInterval(interval);
        };
      }, [isActive, sec, min, time]);
     
        function handleStart(){
            var interval=null
            setIsActive(true)
        }

 
    const handlePauseResume = () => {
        // setIsPaused(true);
        setIsActive(false)

        console.log(isPaused)
    };
 
    const handleReset = () => {
        setIsActive(false);
        setTime(0);
        setMin(0)
    };
    return (
        <div className='div1'>
       
            <div className='div2'>
            <p>{time}:{min}:{sec}</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePauseResume}>Pause</button>
            <button onClick={handleReset}>Reset</button>
            
            
            </div>
        </div>
    );
}

export default Timer;
