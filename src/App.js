import './App.css';

import { Routes, Route, BrowserRouter } from "react-router-dom"

import Register from './components/register';

import Login from './components/login';

import Home from './components/home';

import Details from './components/details';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/> } /> 
            <Route path="/register" element={<Register/> } /> 
            
            <Route path="/home" element={<Home/> } />
            <Route path="/details" element={<Details/> } />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;