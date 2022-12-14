
import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState([]);
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear();
        window.location.reload();
    }

    const handleEdit = (id, name, email, pass, DOB, gender) =>{
        localStorage.getItem('id',id);
        localStorage.getItem('name',name);
        localStorage.getItem('email',email);
        localStorage.getItem('pass',pass);
        localStorage.getItem('DOB',DOB);
        localStorage.getItem('gender',gender);
        navigate('/edit')

}

useEffect(() => {
    const loadpost = async () => {
        setLoading(true);
        const responce = await axios.get("http://localhost:3003/users")
        setPost(responce.data);
        setLoading(false);
    }
    loadpost();
}, []);

const handleDelete = (id) => {
    var index = post.map(function (e) {
        return e.id
    }).indexOf(id);
    post.splice(index, 1);
    navigate("/home")
}
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
                    {post.map(items => (
                        <tr key={items.id} >
                            <td>{items.id}</td>
                            <td>{items.name}</td>
                            <td><button onClick={() => { navigate("/details") }} >View</button></td>
                            <td><button onClick={() => handleDelete(items.id)} >Delete</button></td>
                            <td><button onClick={() => handleEdit(items.id, items.name, items.email, items.pass, items.DOB, items.gender)} >Edit</button></td>
                        </tr>))}
                </tbody>
            </table>
            <button onClick={handleLogOut} >Logout</button>
        </div>
    </div>
)
}
export default Home