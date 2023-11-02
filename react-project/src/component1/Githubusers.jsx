import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Githubusers = () => {
    const[query,setquery]=useState('')
    const[dataa,setdata]=useState([])
    const[status,setstatus]=useState(false)
    // const[data,setdata]=useState([])
//     useEffect(()=>{
// axios.get(`https://api.github.com/search/users?q=${data}`).then((r)=>console.log(r.data))
//     },[data])

//   


 


           
     let fetchdata;        
useEffect(()=>{
     fetchdata=async()=>{
        const res= await fetch(`https://api.github.com/search/users?q=${query}`)
        const data=await res.json()
        console.log(data,'data')
        setdata(data.items)
            } 
    fetchdata()
},[dataa])
   
const handleclick=()=>{
    fetchdata();
}
    
    return (
        <div>
            <input onChange={((e)=>setquery (e.target.value))}></input><button onClick={handleclick}>SEARCH</button>
           {dataa.map((e)=>{return <>
<h2>{e.login}</h2>

           </>})}
        </div>
    );
}

export default Githubusers;
