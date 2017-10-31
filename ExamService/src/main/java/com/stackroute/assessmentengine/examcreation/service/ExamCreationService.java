package com.stackroute.assessmentengine.examcreation.service;




import org.springframework.stereotype.Service;

import com.stackroute.assessmentengine.examcreation.domian.Exam;

@Service
public interface ExamCreationService 
{
	
	
	public String create(Exam exam);
	
	public Exam findCustomBySubject(String subject);
	
	
	
}





