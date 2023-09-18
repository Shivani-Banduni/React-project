import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Productlist = (idd) => {
    const [paramdata, setParamData]=useState([])
    const {id}=useParams()
    console.log(id,'id')

  
async function getdata(){
    try{
        const r= await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const dataa= await (r.data) 
setParamData([...paramdata,dataa])
console.log(paramdata,"data")
    }
    catch(err){
        console.log(err)
    }
}
     
   useEffect(()=>{
getdata()

   },[])

    return (
        <div>
        {paramdata.map((e,id)=>{ 
            return(
            <div key={id}>{e.title}</div>
     
            )
            })}
        {/* {paramdata.map((e)=>{})} */}
        </div>
    );
}

export default Productlist;
