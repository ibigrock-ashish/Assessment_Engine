package com.stackroute.assessmentengine.engineService.domain;

import java.util.Arrays;

public class Question {
	private int id;
	private String question;
	private String answer;
	private String options[]= {"option1","option2","option3"};
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String[] getOptions() {
		return options;
	}
	public Question()
	{
		
	}
	public Question(int id, String question, String answer, String[] options) {
		super();
		this.id = id;
		this.question = question;
		this.answer = answer;
		this.options = options;
	}
	public void setOptions(String[] options) {
		this.options = options;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	@Override
	public String toString() {
		return "Question [id=" + id + ", question=" + question + ", answer=" + answer + ", options="
				+ Arrays.toString(options) + "]";
	}
	

}
