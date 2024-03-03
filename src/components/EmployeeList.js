import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';

const EmployeeList = () => {
    const[employees,setEmployee]=useState([])

    const navigate=useNavigate();
    useEffect(()=>
    {
       getAllEmployees()
    },[])
    const getAllEmployees=()=>
    {
        EmployeeService.getAllEmployees().then((response)=>{
            setEmployee(response.data)
            console.log(response.data)
           }).catch(error=>{
               console.log(error)
           });
    }
    const deleteEmployee=(id)=>
    {
         EmployeeService.deleteEmployee(id).then(response=>
            {
               getAllEmployees()
            }).catch(error=>
                {
                    console.log(error);
                })
    }

  return (
    <div className='Container'>
        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-bordered table-stripped'>
            <thead>
                <th>Employee id</th>
                <th>Employee name</th>
                <th>Employee salary</th>
                <th>Actions</th>
                
            </thead>
            <tbody>
              {employees.map(emp =>
               <tr key ={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.sal}</td>
                <td><Link className="btn btn-info" to={`/employees/${emp.id}`}>Update</Link>
                <button className='btn btn-danger' style={{marginLeft:10}} onClick={()=>{deleteEmployee(emp.id)}}>Delete</button>
                </td>
              
                </tr>)
             }
            </tbody>


        </table>
      
    </div>
  )
}

export default EmployeeList
