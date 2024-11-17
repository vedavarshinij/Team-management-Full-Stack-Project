import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:6655/api/v1/emp";

class EmployeeService {
  saveEmp(employee) {
    return axios.post(EMPLOYEE_BASE_REST_API_URL, employee);
  }
  getAllEmp(){
    return axios.get(EMPLOYEE_BASE_REST_API_URL);
  }
  // updateEmployee(employee,employeeId){
  //   return axios.put(`${EMPLOYEE_BASE_REST_API_URL}/${employeeId}`,employee);
  // }
  // getOneRecord(employeeId){
  //   return axios.get(`${EMPLOYEE_BASE_REST_API_URL}/ ${employeeId}`);
  // }
  updateEmployee(employee,employeeId){
    return axios.put(EMPLOYEE_BASE_REST_API_URL + "/" + employeeId ,employee);
  }
  getOneRecord(employeeId){
    return axios.get(EMPLOYEE_BASE_REST_API_URL + "/" +employeeId);
  }
  deleteOneRecord(employeeId){
    return axios.delete(EMPLOYEE_BASE_REST_API_URL + "/" + employeeId);
  }
}
export default new EmployeeService();
