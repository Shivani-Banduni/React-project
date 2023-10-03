import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Parent = () => {
    const arr=['shivani','raveena']
    return (
        <div>
            <Child data={arr}/>
        </div>
    );
}

export default Parent;

export const Child=({data})=>{
    const[dataa,setdata]=useState([])
     console.log(data)
   

useEffect(()=>{
    setdata(data)
    
},[])
console.log('data',dataa)
    return (
<>

{dataa.map((e)=>{return <h2>{e}</h2>})}
</>

    )
}
