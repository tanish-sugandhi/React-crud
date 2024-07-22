import React from "react";
import { useState } from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
let CreateUserForm = () => {
    let [formData, setFormData] = useState({
               name:'',
               department:'',
                age:'',
                salary:''
    });

    let handleAge = (e) => {setFormData({...formData, age: e.target.value})}
    let handleDepartment = (e) => {setFormData({...formData, department: e.target.value})}
    let handleName = (e) => {setFormData({...formData, name: e.target.value})}
    let handleSalary = (e) => {setFormData({...formData, salary: e.target.value})}

    const navigate=useNavigate();
    const add = async (e) => {
        
        e.preventDefault();
        console.log("welcome to add event", formData);
        try {
            const response = await axios.post('http://localhost:8080/addEmp', formData);
            //console.log('user added', response.data);
            navigate(`/getAllEmp`);
           alert("Data Added SuccessFully");
            setFormData({
                name:'',
                department:'',
                age:'',
                salary:''

            });
        } catch (error) {
            console.error(error);
        }
    }
    // const handleAdd = ()=>{
    //     navigate(`/getAllEmp`);
    //     alert("Data Added SuccessFully");
    // }
    return (
        <>
            <br></br>
      <br></br>
    
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            {
              //title()
            }
            <div className='card-body'>
              <form onSubmit={add}>
                <div className='form-group mb-2'>
                  <label className='form-label'>Name</label>
                  <input type="text" placeholder="Enter name" name="name" className='form-control'
                    onChange={handleName} required="true"
                  />

                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>Department</label>
                  <input type="text" placeholder="Enter Department" name="Department" className='form-control' onChange={handleDepartment} 
                  required="true"
                  />
                

                </div>
                <div className='form-group mb-2'>
                  <label className='form-label'>Age</label>
                  <input type="number" placeholder="Enter Age" name="Age" className='form-control'
                    value={formData.age} onChange={handleAge} required="true"
                  />

                </div>
                <div className='form-group mb-2'>
                  <label className='form-label'>Salary</label>
                  <input
                    type="number"
                     placeholder="Enter Salary"
                    name="Salary"
                    className='form-control  required'
                    onChange={handleSalary} required={true}
                  >
                  </input>

                </div>

                <button className='btn btn-success' type='submit'   >Submit </button>

                <Link to="/getAllEmp" className='btn btn-danger' style={{ marginLeft: "15px" }}  >Cancel</Link>

              </form>

            </div>

          </div>

        </div>
      </div>

        </>
    );
}

export default CreateUserForm;
