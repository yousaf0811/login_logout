import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Register = () => {
    let navigate = useNavigate()
    const [id, setId] = useState(0);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [DOB, setDOB] = useState(null);
    const [gender, setGender] = useState(null);
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
      const handleSubmit = () => {
        console.log(name);
        if(!name ) { alert('Fill the empty input fields');  return false}; 
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
      };

    return (
        <div className="form">
            <form className="register-form">
                <h2>Register</h2>
                <label>ID</label>
                <input onChange={(e) => handleInputChange(e)} type="number" id="id" name="id" placeholder="Enter ID" ></input>
                <label>Full Name</label>
                <input onChange={(e) => handleInputChange(e)} type="name" id="name" name="name" placeholder="Full Name" ></input>
                <label for="email" >Enter the Email : </label>
                <input onChange={(e) => handleInputChange(e)} type='email' placeholder="Email" id="email" name="email" ></input>
                <label for="password" >Enter the Password : </label>
                <input onChange={(e) => handleInputChange(e)} type='password' placeholder="********" id="password" name="password" ></input>
                <label>DOB</label>
                <input onChange={(e) => handleInputChange(e)} type="date" id="DOB" name="DOB" placeholder="Enter the DOB" ></input>
                <label>Gender</label>
                <input onChange={(e) => handleInputChange(e)} type="name" id="gender" name="gender" placeholder="Enter the Gender" ></input>
            </form>
            <button
                 onClick={() => handleSubmit()}   
                 >Register</button>
            <button className="link-btn" onClick={() => { navigate("/") }} >Already have Account? Then Log in Here.</button>
        </div>
)
    }
export default Register