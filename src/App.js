import logo from './logo.svg';
import './App.css';
import EmployeeList from './components/EmployeeList';
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';
import { Routes, Route, Switch } from 'react-router-dom';
import CreateEmployee from './components/createEmployee';
function App() {
  return (
    <div>

      <HeaderComponent />
      <div className='Container'>
        <Routes>
          <Route  path='/' element={<EmployeeList/>}></Route>
          <Route path='/employees/addemp' element={<CreateEmployee/>}></Route>
          <Route path='/employees/:id1' element={<CreateEmployee/>}></Route>
        </Routes>
      </div>
      <FooterComponent />

    </div>
  );
}

export default App;
