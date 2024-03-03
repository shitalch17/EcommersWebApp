import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate,useParams} from 'react-router-dom';
const CreateEmployee = () => {
    const [id, setId] = useState();
    const [name, setName] = useState('');
    const [sal, setSal] = useState('');
    const navigate=useNavigate();
    const {id1}=useParams();

    useEffect(()=>
    {
        EmployeeService.getEmployeeByid(id1).then(response=>
            {
                setId(response.data.id);
                setName(response.data.name);
                setSal(response.data.sal);
            }).catch(error=>
                {
                    console.log(error)
                })
    },[])
    const title=()=>
    {
        if(id1)
        {
            return <h2>Update Employee</h2>
        }
        else{
            return <h2>Add Employee</h2>
        }
    }
    const saveorUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = { id, name, sal };
        if(id1)
        {
            EmployeeService.updateEmployee(employee,id1).then(response=>
                {
                    navigate('/');
                }).catch(error=>
                    {
                        console.log(error);
                    })
        }
        EmployeeService.createEmployee(employee).then(response=>{
            console.log(response.data);
            navigate('/');
        }).catch(error=>{
            console.log(error);
        })
    }
    return (

        <div className='Container'>
            <h1>Add Employee</h1>
            <div class=" row card col-md-6 offset-md-3 offset-md-3">
                {
                    title()
                }
                <form onSubmit={saveorUpdateEmployee}>
                    <div className="form-group">
                        <label for="id">Id</label>
                        <input type="text" className="form-control" id="id" name="id" value={id} onChange={(e) => setId(e.target.value)} />
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        <label for="sal">Salary</label>
                        <input type="text" className="form-control" id="sal" name="sal" value={sal} onChange={(e) => setSal(e.target.value)} />
                        <br />
                        <button className="btn btn-success" type="submit">Submit</button>
                    </div>


                </form>

            </div>
        </div>
    )
}

export default CreateEmployee
