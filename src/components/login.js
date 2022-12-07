import React, { useEffect } from "react";

import { useState } from "react";

import {useNavigate} from "react-router-dom" 
const Login = ()=>{
    const [database, setDatabase] = useState([]);
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/home");
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = document.forms[0];
        const userData = database.find((user) => user.email === email.value);
        if (userData) {
          if (userData.password === password.value) {
            alert("Invalid password");
          } else {
            localStorage.setItem("name", JSON.stringify(userData.name));
            localStorage.setItem("id", JSON.stringify(userData.id));
            handleClick();
          }
        } else {
          alert("email not found");
        }
        console.log(password, email);
        if (!email.value || !password.value) {
          alert("Fill the empty input fields");
          return false;
        }
      };



    useEffect(() => {
        let localData = localStorage.getItem("name");
        console.log("Data :: ", localData);
        fetch("http://localhost:3003/users")
          .then((resp) => resp.json())
          .then((info) => setDatabase(info));
      }, []);
    // let navigate = useNavigate() 
    return(
        <>
        <div className="form">
        <form className="login-form" onSubmit={handleSubmit} >
            <h2>Login</h2>
            <label for="email" >Enter the Email : </label>
            <input type='email' placeholder="Email" id="email" name="email" ></input>
            <label for="password" >Enter the Password : </label>
            <input type='password' placeholder="********" id="password" name="password" ></input>
            <button type="submit" >Log In</button>
        </form>
        <button className="link-btn" onClick ={()=>{ navigate("/register")}} >Don't have any Account? Reguister?</button>
        </div>
        </>
    )
}
export default Login