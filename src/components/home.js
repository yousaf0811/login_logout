
import {useNavigate} from "react-router-dom" 
import React, { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadpost = async () => {
            setLoading(true);
            const responce = await axios.get("http://localhost:3003/users")
            setPost(responce.data);
            setLoading(false);
        }
        loadpost();
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            
            <div className="tb">
            <table class="table table-striped table-dark">
            <tbody>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Action</th>
                        <th scope="col">Action</th>
                        <th scope="col">Action</th>
                    </tr>
                    {post.map(items=>(
                                    <tr key={items.id} > 
                                    <td>{items.id}</td>                                    
                                    <td>{items.name}</td>
                                    <td><button onClick ={()=>{ navigate("/details")}} >View</button></td>
                                    <td><button>Delete</button></td>
                                    <td><button>Edit</button></td>
                                </tr>))} 
                </tbody>
            </table>
            </div>
        </div>
    )
}
export default Home