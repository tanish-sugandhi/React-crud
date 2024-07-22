import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

let UpdateUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Initialize form data state with empty strings
    const [formData, setFormData] = useState({
        id: '',
        department: '',
        age: '',
        name: '',
        salary: ''
    });

    useEffect(() => {
        fetchData(id);
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/getEmpById/${id}`);
            // Set the form data with the fetched data
            setFormData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const update = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.put(`http://localhost:8080/update/${id}`, formData);
            console.log('value successfully updated', response.data);
            alert('updated successfully');
            navigate(`/getAllEmp`);
            setFormData({
                name: '',
                department: '',
                age: '',
                salary: ''
            });
        } catch (error) {
            console.error('update failed', error);
        }
    }

    return (
        <>
            <div className="container">
                <h2 className='text-center'>Update-Employee</h2>
            </div>
            <form onSubmit={update}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    {/* Set value attribute with formData */}
                    <input type="text" class="form-control" id="exampleInputEmail1" required value={formData.name} name="name" onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Department</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" required value={formData.department} name="department" onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Age</label>
                    <input type="number" class="form-control" id="exampleInputEmail1" required value={formData.age} name="age" onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Salary</label>
                    <input type="number" class="form-control" id="exampleInputEmail1" required value={formData.salary} name="salary" onChange={handleChange} />
                </div>
                <div class="form-check"></div>
                <button type='submit' class="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default UpdateUser;
