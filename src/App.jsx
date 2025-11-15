import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home'
import Login from './pages/Login'
import SingUp from './pages/SingUp'
import NewEmployee from './pages/Master/Employee/NewEmployee';
import EmployeeFilter from './pages/Master/Employee/EmployeeFilter';
import ImportEmployee from './pages/Master/Employee/ImportEmployee';
import EmployeeTransfer from './pages/Master/Employee/EmployeeTransfer';
import PrivateRoute from './components/PrivateRoute';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/sing-up' element={<SingUp />}></Route>

          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/new-emp" element={<NewEmployee />} />
            <Route path="/emp-filter" element={<EmployeeFilter />} />
            <Route path="/import-emp" element={<ImportEmployee />} />
            <Route path="/emp-transfer" element={<EmployeeTransfer />} />
          </Route>

        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
