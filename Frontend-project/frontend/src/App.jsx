import EmployeeDetails from "./Components/EmployeeDetails"
import "./App.css"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import ListAllEmployees from "./Components/ListAllEmployees"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UpdateEmployee from "./Components/UpdateEmployee"
import About from "./Components/About"
import Contact from "./Components/Contact"
function App() {
  return (
    <>
    {/* <EmployeeDetails/>
    <ListAllEmployees/> */}
    {/* <UpdateEmployee/> */}
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/view" Component={ListAllEmployees}/>
          <Route path="/addEmployee" Component={EmployeeDetails}/>
          <Route path="/edit-employee/:id" Component={UpdateEmployee}/>
          <Route path="/about" Component={About}/>
          <Route path="/contact" Component={Contact}/>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App