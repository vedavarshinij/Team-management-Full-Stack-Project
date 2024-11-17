package com.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rest.model.Employee;
import com.rest.service.EmployeeServiceImp;

@RestController
@RequestMapping("api/v1/")

@CrossOrigin(origins={"http://localhost:5173/"})

public class EmployeeController 
{
	@Autowired
	private EmployeeServiceImp employeeServiceImp;
	//add employees//
	@PostMapping("/emp")
	public Employee addEmp(@RequestBody Employee employee) {
		Employee saveData=employeeServiceImp.saveEmployeer(employee);
		return saveData;
		
	}
	//get details//
	@GetMapping("/emp")
	public List<Employee> allEmpDetails(){
		List<Employee> dataEmp=employeeServiceImp.getAllEmp();
		return dataEmp;
		
	}
	//update one employee//
	@PutMapping("/emp/{id}")
	public Employee updateOneRecord(@PathVariable long id,@RequestBody Employee employee) {
		Employee updateData=employeeServiceImp.updateEmployee(id,employee);
		return updateData;	
	}
	//Get One employee by id//
	@GetMapping("/emp/{id}")
	public Employee getOneEmployee(@PathVariable long id) {
		Employee empData=employeeServiceImp.getOneEmployee(id);
		return empData;
	}
	//Delete one employee by id//
	@DeleteMapping("/emp/{id}")
	public void deleteOneEmployee(@PathVariable long id) {
		employeeServiceImp.deleteOneEmployee(id);
	}
}
