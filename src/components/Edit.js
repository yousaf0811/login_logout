import React, { useEffect } from "react";

import { useState } from "react";

import axios from "axios";


import {useNavigate, Link} from "react-router-dom";

function Edit (){

    let navigate = useNavigate()
    const [id, setId] = useState(0);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [DOB, setDOB] = useState(null);
    const [gender, setGender] = useState(null);
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState([]);

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setPass(localStorage.getItem('pass'));
        setDOB(localStorage.getItem('DOB'));
        setGender(localStorage.getItem('gender'));
        // const loadpost = async () => {
        //     setLoading(true);
        //     const responce = await axios.get("http://localhost:3003/users")
        //     setPost(responce.data);
        //     setLoading(false);
        // }
        // loadpost();
    }, []);


    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if(id === "id"){
            setId(value);
        }
        if (id === "name") {
          setName(value);
        }
        if (id === "email") {
            setEmail(value);
          }
        if (id === "password") {
          setPass(value);
        }
        if(id === "DOB"){
            setDOB(value);
        }
        if(id === "gender"){
            setGender(value);
        }
      };




    
    const handleClick = () => {
        navigate('/home')};

    const handleSubmit = (e)=>{
        e.preventDefault();
        // let a = post[index];
        // a.name= name;
        // a.email = email;
        // a.pass = pass;
        // a.DOB = DOB;
        // a.gender = gender;
        const user = {
            id,
            name,
            email,
            pass,
            DOB,
            gender,
        }


        localStorage.setItem('name', JSON.stringify(user.name));
        fetch('http://localhost:3003/users',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
        }).then(resp => resp.json()).then(info => handleClick() );
    }
    var index = post.map(function(e){
        return e.id
    }).indexOf(id);

    return(

        <div className="form">
            <form className="register-form">
                <h2>Register</h2>
                <label>ID</label>
                <input type="number" onChange={(e) => handleInputChange(e)} id="id" name="id" placeholder="Enter ID" value={id} ></input>
                <label>Full Name</label>
                <input type="name" onChange={(e) => handleInputChange(e)} id="name" name="name" placeholder="Full Name" value={name} ></input>
                <label for="email" >Enter the Email : </label>
                <input type='email' onChange={(e) => handleInputChange(e)} placeholder="Email" id="email" name="email" value={email} ></input>
                <label for="password" >Enter the Password : </label>
                <input type='password' onChange={(e) => handleInputChange(e)} placeholder="********" id="password" name="password" value={pass} ></input>
                <label>DOB</label>
                <input type="date" onChange={(e) => handleInputChange(e)} id="DOB" name="DOB" placeholder="Enter the DOB" value={DOB} ></input>
                <label>Gender</label>
                <input type="name" onChange={(e) => handleInputChange(e)} id="gender" name="gender" placeholder="Enter the Gender" value={gender} ></input>
            </form>
            <button
                 onClick={() => handleSubmit()}   
                 >Update User Data</button>
        </div>

    )
}
export default Edit