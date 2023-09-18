import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {
    const [data, setdata]=useState([])
    async function getdata(){
        try{
            const r= await axios.get('https://jsonplaceholder.typicode.com/posts')
            const dataa= await (r.data)
            setdata(dataa)
            // console.log(data,"data")

        }catch(err){
            console.log(err)
        }
    
        
}
     
   useEffect(()=>{
getdata()
   },[])
    console.log('product')
    return (
        <div suppressHydrationWarning>
            
<div class="relative overflow-x-auto shadow-md sm:rounded-lg " >
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-500">
                    ID
                </th>
                <th scope="col" class="px-40 py-3">
                    Name
                </th>
                
            </tr>
        </thead>
        <tbody suppressContentEditableWarning>
        <> {data.map((e,id)=>{return <>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                </th>
              <Link to={`/product/${id}` }> 
              <td  class="px-10 py-4">
                    {e.title}
                </td>
              </Link>
                
            </tr>     
        </>})} </>    
            
        </tbody>
    </table>
</div>
        </div>
    );
}

export default Product;
