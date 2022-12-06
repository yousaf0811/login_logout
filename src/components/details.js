
import {useNavigate} from "react-router-dom" 
import React, { useEffect, useState } from "react";
import axios from "axios";




const Details = ()=>{

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
    return(
        <div>
        <h1>Details Page</h1>
        <div className="tb">
        <table class="table table-striped table-dark">
        <tbody>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Gender</th>
                </tr>
                {post.map(items=>(
                                <tr key={items.id} > 
                                <td>{items.id} :</td>                                    
                                <td> {items.name} </td>
                                <td> {items.email} </td>
                                <td>  ({items.DOB})  </td>
                                <td>{items.gender}</td>
                            </tr>))} 
            </tbody>
        </table>
        </div>
    </div>
    )
}
export default Details