import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Api.css';

const Api = () => {
  const [data, setData] = useState([]);
  const [search, setSearchData] = useState();
  const [show,setShow] =useState("")
  const[status,setstatus]=useState(false)
  const[page,setpage]=useState(1)
  const[pagedata,setpagedata]=useState([])


  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`).then((r) => setData(r.data.results));
  }, []);

  const handlechange = (e) => {
    setSearchData(e.target.value);
  };

  const handleclick = () => {
    
    const newData = data.filter((el) => el.name === search);
   
    setShow(newData)
   
    setstatus(true)

    if(newData==''){
        alert('No result found')
        
    }
    console.log('show',show)
  };


  const handlenext=()=>{
   for(var i=0;i<10;i++){
    setpagedata(pagedata.push (data[i]))
   }
   
   console.log(pagedata)
  }

  return (
    <>
   <div className='Main'>
   <input className='inp' type='text' placeholder='Enter here' onChange={handlechange} /><br/><br/>
      <button onClick={handleclick}>Click</button>
      <button>Back</button>
      <button  onClick={handlenext}>Next</button>
      
   </div>
      
     {status ? <div>{show.map((e)=>{return <div key={e.name}><h2 className='h'>{e.name}</h2></div>})}</div> :  
     <div className='mainn'>
        {data.map((e) => (
          <div className='main' key={e.name}>
            <h1>{e.name}</h1>
           <div> <img src={e.url}/></div>
          </div>
        ))}

        {/* {data.slice(0,10).map((e) => (
          <div className='main' key={e.name}>
            <h1>{e.name}</h1>
           <div> <img src={e.url}/></div>
          </div>
        ))} */}
      </div> 
     
     }
      
    </>
  );
};

export default Api;
