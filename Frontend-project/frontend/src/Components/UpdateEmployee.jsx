import React ,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../EmployeeServices/EmployeeService';


const UpdateEmployee = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [gender,setGender] = useState("");
    const [deptno,setDeptno] = useState("");
    
    const {id} = useParams();

    const navigate = useNavigate();
    const updateEmp = (event) =>{
      event.preventDefault();
        const employee ={name, email, gender, deptno};
        EmployeeService.updateEmployee(employee,id)
        .then((response) =>{
            console.log(response.data)
         })
         navigate('/view')
        .catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() => {
      EmployeeService.getOneRecord(id)
      .then((response) =>{
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
        setDeptno(response.data.deptno);
      })
      .catch((error) =>{
        console.log(error)
      })

    },[id])
  return (
    <div className='employee-form-container'>
      <h3 className='employee-form-title'>Update Employee</h3>
      <form>
        <table border="2"  className="employee-form-table">
          <tbody>
            <tr>
                 <td>Employee Name</td>
                 <td><input type="text" value={name} onChange={(event) => setName(event.target.value)} name="name"  className="employee-form-input"/></td>
            </tr>
            <tr>
                 <td>Employee Email</td>
                 <td><input type="text" value={email} onChange={(event) => setEmail(event.target.value)} name="email"  className="employee-form-input"/></td>
            </tr>
            <tr>
                <td>Employee Gender</td>
                <td><input type="text" value={gender} onChange={(event) => setGender(event.target.value)} name="gender"  className="employee-form-input"/></td>
            </tr>
            <tr>
                <td>Employee Deptno</td>
                <td><input type="text" value={deptno} onChange={(event) => setDeptno(event.target.value)} name="deptno"  className="employee-form-input"/></td>
            </tr>
            <tr>
                <td colSpan={2}><button onClick={(event) => { updateEmp (event)}} className="employee-form-button">Update</button></td>
            </tr>
            </tbody>
        </table>
      </form>
    </div>
  )
}

export default UpdateEmployee;