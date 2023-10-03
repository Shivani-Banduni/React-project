import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Api.css';

const Api = () => {
  const [data, setData] = useState([]);
  const [search, setSearchData] = useState();
  const [show,setShow] =useState("")
  const[status,setstatus]=useState(false)

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((r) => setData(r.data.results));
  }, []);

  const handlechange = (e) => {
    setSearchData(e.target.value);
  };

  const handleclick = () => {
    const newData = data.filter((el) => el.name === search);
    setShow(newData)
    setstatus(true)
    console.log('show',show)
  };

  return (
    <>
      <input type='text' placeholder='Enter here' onChange={handlechange} />
      <button onClick={handleclick}>Click</button>
      
     {status ? <div>{show.map((e)=>{return <h2>{e.name}</h2>})}</div> :  
     <div className='main'>
        {data.map((e) => (
          <div key={e.name}>
            <div>{e.name}</div>
           <div> <img src={e.url} alt={e.name} /></div>
          </div>
        ))}
      </div> 
     
     }
      
    </>
  );
};

export default Api;
