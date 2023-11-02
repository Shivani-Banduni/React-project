import React from 'react';
import { useEffect } from 'react';

const Mock = () => {
    const [data,setdata]=React.useState([])
    const[filterd, setfiltered]=useState([])

async function getdata(){
    const res= await fetch('https://jsonplaceholder.typicode.com/todos')
    const dataa= await res.json()
    console.log(data)
    setdata(dataa)
    
}

const filteredata= data.filter((e)=>{
    return e.completed==true
})
setfiltered(filteredata)
console.log(filterd)

useEffect(()=>{
    getdata()

},[])
    return (
        <div>
            
        </div>
    );
}

export default Mock;
