// import { useState } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = () => {
    let navigate = useNavigate()
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [DOB, setDOB] = useState('');
    const [gender, setGender] = useState('');

    function updateData() {
        const user = {
            id,
            name,
            email,
            pass,
            DOB,
            gender,
        };
    localStorage.setItem('users', JSON.stringify(user));
    fetch('http://localhost:3002/users', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(user),
        })
        .then((res) => res.json())
        .then((info) => console.log(info));
    };
    return (
        <div className="form">
            <form className="register-form" onSubmit={updateData} >
                <h2>Register</h2>
                <label>ID</label>
                <input onChange={(event1) => setId(event1.target.value)} type="number" id="id" name="id" placeholder="Enter ID" ></input>
                <label>Full Name</label>
                <input onChange={(event1) => setName(event1.target.value)} type="name" id="name" name="name" placeholder="Full Name" ></input>
                <label for="email" >Enter the Email : </label>
                <input onChange={(event1) => setEmail(event1.target.value)} type='email' placeholder="Email" id="email" name="email" ></input>
                <label for="password" >Enter the Password : </label>
                <input onChange={(event1) => setPass(event1.target.value)} type='password' placeholder="********" id="password" name="password" ></input>
                <label>DOB</label>
                <input onChange={(event1) => setDOB(event1.target.value)} type="date" id="DOB" name="DOB" placeholder="Enter the DOB" ></input>
                <label>Gender</label>
                <input onChange={(event1) => setGender(event1.target.value)} type="name" id="gender" name="gender" placeholder="Enter the Gender" ></input>

                <button type="submit" >Register</button>
            </form>
            <button className="link-btn" onClick={() => { navigate("/") }} >Already have Account? Then Log in Here.</button>
        </div>
)
    }
export default Register