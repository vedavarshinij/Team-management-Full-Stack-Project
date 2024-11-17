import React, { useState }  from 'react'
import EmployeeService from '../EmployeeServices/EmployeeService';
import { useNavigate } from 'react-router-dom';
import './EmployeeDetails.css';

const EmployeeDetails = () => {

    const [id,setId]=useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [gender,setGender] = useState("");
    const [deptno,setDeptno] = useState("");
    
    const navigate = useNavigate();
    const saveEmployee = (event) =>{
        event.preventDefault();
         const employee = {id, name, email, gender, deptno};
         console.log(employee)

         EmployeeService.saveEmp(employee)

         .then((response) => {
            console.log(response.data);
         })
         navigate("/view")
         .catch((error) => {
            console.log(error);
         })

    }

  return (
    <div className="employee-form-container">
      <h2 className="employee-form-title">Add Employee</h2>
      <form>
        <table border="2"  className="employee-form-table" >
            <tr>
                <td>Id</td> 
                <td><input type="text" name="id" value={id} onChange={(event) => setId(event.target.value)}  className="employee-form-input"/></td>
            </tr>
            <tr>
                <td>Name</td>
                <td><input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)}  className="employee-form-input"/></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)}  className="employee-form-input"/></td>
            </tr>
            <tr>
                <td>Gender</td>
                <td><input type="text" name="gender" value={gender} onChange={(event) => setGender(event.target.value)}  className="employee-form-input"/></td>
            </tr>
            <tr>
                <td>Deptno</td>
                <td><input type="text" name="deptno" value={deptno} onChange={(event) => setDeptno(event.target.value)}  className="employee-form-input"/></td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <button onClick={(event) => saveEmployee(event)} className="employee-form-button">Add Details</button>
                </td>
            </tr>
        </table>
      </form>
    </div>
  )
}
export default EmployeeDetails