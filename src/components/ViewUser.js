import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { FloatButton } from 'antd';
//import {UpdateUser} from "react";
import { Button, Flex } from 'antd';
let ViewUser = () => {
    const [formData, setFormData] = useState([]);
    console.log(formData)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/getAllEmp');
            setFormData(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const navigate = useNavigate();
    const updateEmp = ()=>{
            navigate("/update");
            // navigate(`/update/${id}`)
    }
    const handleCard=(item)=>{
        console.log("item: "+item)
        navigate(`/view`,{state: item})
    }
    const deleteEmp = async (id) => {
        try {
          //console.log();
         await axios.delete(`http://localhost:8080/deleteById/${id}`);
         window.location.reload();
         alert("deleted");
        } catch (error) {
          console.error(error);
        }
      };
    return (
        <>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Action</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map(item => (
                       
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.department}</td>
                            <td>{item.age}</td>
                            <td>{item.salary}</td>
                            {/* </tr><a >className='btn-btn-info mb-2' onClick={()=>updateEmp()}>update</Link></a> */}
                            {/*<td><button onClick={()=>navigate(`/update/${item.id}`)}>Update</button></td>*/}
                            <td><button type="button" class="btn btn-outline-success" onClick={()=>navigate(`/update/${item.id}`)} >Update</button></td>
                            {/*<td><button onClick={()=>navigate(`/deleteById/${item.id}`)}>Delete</button></td>*/}
                            {/*<td><button onClick={() => {deleteEmp(item.id)}}>Delete</button></td> */}
                            <td><button type="button" class="btn btn-outline-danger" onClick={() => {deleteEmp(item.id)}}>Delete</button></td>
                            {/*<td><button onClick={() => handleCard(item)}>View More</button></td>*/}
                            <td><button type="button" class="btn btn-outline-info" onClick={() => handleCard(item)}>View More</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/*<Button type="dashed" onClick={()=>navigate('/addEmp')}>Add</Button> */}
            <button type="button" class="btn btn-outline-warning" onClick={()=>navigate('/addEmp')}>Add</button>
        </> 
    );
}

export default ViewUser;
 