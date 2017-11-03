package com.stackroute.servicestudent.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="StudentData")
public class StudentBean {
	@Id
	private String id;
	private String StudentName;
	private int age;
	private String emailId;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getStudentName() {
		return StudentName;
	}
	public void setStudentName(String studentName) {
		StudentName = studentName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public StudentBean(String id, String studentName, int age, String emailId) {
		super();
		this.id = id;
		StudentName = studentName;
		this.age = age;
		this.emailId = emailId;
	}
	public StudentBean() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	


	
}
