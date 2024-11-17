package com.rest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rest.model.Employee;
import com.rest.repository.EmployeeRepo;
@Service
public class EmployeeServiceImp  implements EmployeeService
{
	@Autowired
	private EmployeeRepo employeeRepo;

	@Override
	public Employee saveEmployeer(Employee employee) {
		// TODO Auto-generated method stub
		Employee datasave=employeeRepo.save(employee);
		return datasave;
	}

	@Override
	public List<Employee> getAllEmp() {
		// TODO Auto-generated method stub
		List<Employee> empData=employeeRepo.findAll();
		return empData;
	}

	@Override
	public Employee updateEmployee(long id, Employee employee) {
		// TODO Auto-generated method stub
		Employee getOneRecord=employeeRepo.findById(id).get();
		getOneRecord.setName(employee.getName());
		getOneRecord.setEmail(employee.getEmail());
		getOneRecord.setGender(employee.getGender());
		getOneRecord.setDeptno(employee.getDeptno());
		return employeeRepo.save(getOneRecord);
	}

	@Override
	public Employee getOneEmployee(long id) {
		// TODO Auto-generated method stub
		Optional<Employee> empData=employeeRepo.findById(id);
		if (empData.isPresent()) {
            return empData.get();
        } else {
            throw new RuntimeException("Employee not found with id: " + id);
        }
	}

	@Override
	public void deleteOneEmployee(long id) {
		// TODO Auto-generated method stub
		 Optional<Employee> empData = employeeRepo.findById(id);
	        if (empData.isPresent()) {
	            employeeRepo.delete(empData.get());
	        } else {
	            throw new RuntimeException("Employee not found with id: " + id);
	        }
		
	}

}
