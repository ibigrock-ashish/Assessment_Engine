package com.stackroute.servicestudent.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.servicestudent.domain.StudentBean;
import com.stackroute.servicestudent.exception.UserAlreadyExistException;
import com.stackroute.servicestudent.repository.StudentRepository;
@Service
public class StudentServiceImpl implements StudentService{
	
	@Autowired
	StudentRepository studentRepository;
	StudentBean userBean;

	@Override
	public List<StudentBean> getAllUsers() {
		
		return (List<StudentBean>) studentRepository.findAll();
	}

	@Override
	public StudentBean getUserById(String id) {
		
		return studentRepository.findOne(id);
	}

	@Override
	public StudentBean addUser(StudentBean userBean) throws UserAlreadyExistException{
		
	
			return studentRepository.save(userBean);
		}	
		
	

	@Override
	public StudentBean updateUser(StudentBean userBean) {
		
		return studentRepository.save(userBean);
	}

	@Override
	public String deleteUser(String id) {
		studentRepository.delete(id);
		return "";
	}
	

}
