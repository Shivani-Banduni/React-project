import React from 'react';
import './counter.css'
const Temperature = () => {
    const [temp,settemp]=React.useState(0)
    const[colr,setflag]=React.useState('red')

const handleclick=()=>{
settemp(temp+1)
setflag('green')
}

const handleclickminus=()=>{
settemp(temp-1)
setflag('red')
}

 


    return (
        <>    
            <div  style={{background:colr}} className='temp-1' >
<div className='temp-2'>Temperature : {temp}&#176;C</div><br/>
<div className='temp-3'>
    <div><button onClick={handleclick}>INCREMENT</button></div>
    <div><button onClick={handleclickminus}> DECREMENT</button></div>
</div>

</div>
</>

    );
}

export default Temperature;
