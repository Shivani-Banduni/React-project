import React, { useState } from 'react';
import axios from 'axios'
const Home = () => {
    const [data, setdata]=useState([])
    axios.get('https://jsonplaceholder.typicode.com/users').then((r)=>console.log(r.data))
    console.log("home")

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};




export default Home;
