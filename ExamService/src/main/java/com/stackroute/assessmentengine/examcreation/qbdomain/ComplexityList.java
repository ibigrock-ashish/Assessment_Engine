package com.stackroute.assessmentengine.examcreation.qbdomain;

import java.util.ArrayList;
import java.util.List;

public class ComplexityList {
	private String complexity;
	private List<QuestionTypeList> questionTypeList;
	
	
	public String getComplexity() {
		return complexity;
	}


	public void setComplexity(String complexity) {
		this.complexity = complexity;
	}


	public List<QuestionTypeList> getQuestionTypeList() {
		return questionTypeList;
	}


	public void setQuestionTypeList(List<QuestionTypeList> questionTypeList) {
		this.questionTypeList = questionTypeList;
	}


	public ComplexityList(String complexity, List<QuestionTypeList> questionTypeList) {
		super();
		this.complexity = complexity;
		this.questionTypeList = questionTypeList;
	}


	public ComplexityList() {
		super();
		// TODO Auto-generated constructor stub
		this.questionTypeList=new ArrayList<>();
	}
	

}
