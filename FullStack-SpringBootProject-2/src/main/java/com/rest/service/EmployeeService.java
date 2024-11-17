package com.rest.service;

import java.util.List;

import com.rest.model.Employee;

public interface EmployeeService 
{
	//add employee//
	public Employee saveEmployeer(Employee employee);
	 
	//get employee//
	public List<Employee>getAllEmp();
	
	//update employee//
	public Employee updateEmployee(long id,Employee employee);
	
	//get one record//
	public Employee getOneEmployee(long id);
	
	//delete one record//
	public void deleteOneEmployee(long id);

}
