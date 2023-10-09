import axios from 'axios';
import './Thinkify.css'
import React, { useEffect, useState } from 'react';

const Thinkify = () => {
    const[data,setData]=useState([])
    const[search,setSearchData]=useState('')

   
async function getdata(){
    // axios.get(`https://pokeapi.co/api/v2/pokemon?q=${search}&limit=151`).then((r)=>setData (r.data.results))
    // console.log(data,"data")
    axios.get(`https://api.github.com/search/users?q=${search}`).then((r)=>setData (r.data))

}
   
useEffect(()=>{
    getdata()
},[search])

function handleclick(){
    getdata()
    console.log(data)
}

   
    return (
        <> 
        <input placeholder='Search' onChange={((e)=>setSearchData(e.target.value))}></input><button onClick={handleclick}>SEARCH</button>
              <div className='main'>
            {data.map((e)=>{return <div className='main1' key={e.name}>
                <h2>{e.name}</h2>
            </div>})}
        </div>
        </>
 
    );
}

export default Thinkify;
