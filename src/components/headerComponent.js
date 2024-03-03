import React from 'react'
import { Link } from 'react-router-dom'
const HeaderComponent = () => {
  return (
    <div>
      <header >
      
        <nav className='navbar navbar-expand-md navbar-dark bg-dark' >
        <h1 style={{color:"white"}}>Employee Management System<br/><br/></h1><hr/>
        <nav style={{marginLeft:-550}}>
            <br/>
         <Link to='/' style={{marginRight:-750,fontSize:20}}>EmployeeList</Link>&nbps;&nbps;
         <Link to='/employees/addemp' style={{marginLeft:700,fontSize:20}}>Add Employee</Link>
         </nav>
        </nav>

      </header>
    </div>
  )
}

export default HeaderComponent
