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


function App() {
  return (
    
   
  <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/product/:id' element={<Productlist/>}></Route>
    </Routes>
  </>

     
 
   
  );
}

export default App;
