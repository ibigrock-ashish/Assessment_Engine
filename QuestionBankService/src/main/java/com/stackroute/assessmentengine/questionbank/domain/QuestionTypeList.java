package com.stackroute.assessmentengine.questionbank.domain;

import java.util.ArrayList;
import java.util.List;

public class QuestionTypeList {
	private String questionType;
	private List<QuestionList> questionList;
	public String getQuestionType() {
		return questionType;
	}
	public void setQuestionType(String questionType) {
		this.questionType = questionType;
	}
	public List<QuestionList> getQuestionList() {
		return questionList;
	}
	public void setQuestionList(List<QuestionList> questionList) {
		this.questionList = questionList;
	}
	public QuestionTypeList(String questionType, List<QuestionList> questionList) {
		super();
		this.questionType = questionType;
		this.questionList = questionList;
	}
	public QuestionTypeList() {
		super();
		// TODO Auto-generated constructor stub
		this.questionList=new ArrayList<>();
	} 
	
}
