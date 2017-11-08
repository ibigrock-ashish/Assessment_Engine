package com.stackroute.assessmentengine.examcreation.service;




import java.util.List;

import org.springframework.stereotype.Service;

import com.stackroute.assessmentengine.examcreation.domian.Exam;


@Service
public interface ExamCreationService 
{
	
	
//	public String create(Exam exam);
	
	public List<Exam> getAll();
	public Exam findCustomBySubject(String subject);
	
//	public List<ExamQuestions> getQuestions(ExamQuestions examQuestions);
	
}





