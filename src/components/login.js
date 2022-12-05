
import {useNavigate} from "react-router-dom" 

const Login = ()=>{
    let navigate = useNavigate() 
    // const [email,setEmail] = useState('');
    // const [pass,setPass] = useState('');
    return(
        <>
        <div className="form">
        <form className="login-form">
            <h2>Login</h2>
            <label for="email" >Enter the Email : </label>
            <input type='email' placeholder="Email" id="email" name="email" ></input>
            <label for="password" >Enter the Password : </label>
            <input type='password' placeholder="********" id="password" name="password" ></input>
            <button type="submit" onClick ={()=>{ navigate("/home")}} >Log In</button>
        </form>
        <button className="link-btn" onClick ={()=>{ navigate("/register")}} >Don't have any Account? Reguister?</button>
        </div>
        </>
    )
}
export default Login