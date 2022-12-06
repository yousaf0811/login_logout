import './App.css';

import { Routes, Route, BrowserRouter } from "react-router-dom"

import Register from './components/register';

import Login from './components/login';

import Home from './components/home';

import Details from './components/details';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/> } /> 
            <Route path="/register" element={<Register/> } />    
            <Route path="/home" element={<Auth><Home/></Auth>} />
            <Route path="/details" element={<Auth><Details/></Auth> } />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;