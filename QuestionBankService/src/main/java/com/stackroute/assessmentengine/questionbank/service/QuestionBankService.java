package com.stackroute.assessmentengine.questionbank.service;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.stackroute.assessmentengine.questionbank.domain.QuestionBank;

public interface QuestionBankService {
	public List getallquestions();
	public QuestionBank getquestion(String id);
	public QuestionBank addquestion(QuestionBank questionBank);
	public QuestionBank updatequestion(String id,QuestionBank questionBank);
	public String deletequestion(String id);
	
	public QuestionBank getSpecificsub(String subject);
	
	
	

}
