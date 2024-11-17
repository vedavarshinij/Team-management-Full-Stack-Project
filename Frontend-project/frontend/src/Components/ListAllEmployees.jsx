import React, { useState,useEffect } from 'react'
import EmployeeService from '../EmployeeServices/EmployeeService';
import { Link } from 'react-router-dom';
import './ListAllEmployee.css'

const ListAllEmployees = () => {
    const [employees,setEmployee] = useState([]);

        useEffect(()=>{
            getAllEmployeeDetails();
            
        },[])

        const getAllEmployeeDetails = () =>{
            EmployeeService.getAllEmp()
            .then((response) =>{
                setEmployee(response.data);
                console.log(response.data);
            })
            .catch((error) => console.log(error));
        };

        const deleteRecord = (employeeId) =>{
            EmployeeService.deleteOneRecord(employeeId)
            .then((response) =>{
                console.log(response.data);
                getAllEmployeeDetails();
            })
            .catch((error) =>{
                console.log(error);
            })
        }
    
  return (
    <div className="list-form-container">
        <h3 className='employee-form-title'>List Employee Details</h3>
      <table border="2" className="employee-list-table">
        <thead>
            <tr>
            <th className="employee-list-table">Employee Id</th>
            <th className="employee-list-table">Employee Name</th>
            <th className="employee-list-table">Employee Email</th>
            <th className="employee-list-table">Employee Gender</th>
            <th className="employee-list-table">Employee Deptno</th>
            <th className="employee-list-table">Update</th>
            <th className="employee-list-table">Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                employees.map((employee) =>(
                    <tr key={employee.id}>
                        <td className="employee-list-label">{employee.id}</td>
                        <td className="employee-list-label">{employee.name}</td>
                        <td className="employee-list-label">{employee.email}</td>
                        <td className="employee-list-label">{employee.gender}</td>
                        <td className="employee-list-label">{employee.deptno}</td>
                        <td className="employee-list-lable">
                            <Link to={`/edit-employee/${employee.id}`} className="employee-list-table">Update</Link>
                        </td>
                        <td className="employee-list-lable">
                            <button onClick={()=>{deleteRecord(employee.id)}} className="employee-list-table">Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListAllEmployees;
