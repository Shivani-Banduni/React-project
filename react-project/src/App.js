import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Productlist from './components/Productlist';
import Timer from './Timer';
import Timer1 from './component1/Timer1';
import Parent from './Parent';
import Childtoparent from './Childtoparent';
import Api from './Api';
import Thinkify from './component1/Thinkify';
import Githubusers from './component1/Githubusers';
import Mock from './component1/Mock';
import Counter from './pracrice_components/Counter';
import Temperature from './pracrice_components/Temperature';


function App() {
  return (
    
   
  <>
    {/* <Navbar/> */}
    {/* <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/product/:id' element={<Productlist/>}></Route>
    </Routes> */}


    {/* <Timer/> */}

    {/* <Timer1/> */}

    {/* <Parent/> */}

    {/* <Childtoparent/> */}


    {/* <Api/> */}


    {/* <Thinkify/> */}

{/* <Githubusers/> */}

{/* <Mock/> */}


{/* <Counter/> */}
<Temperature/>
  </>

     
 
   
  );
}

export default App;
