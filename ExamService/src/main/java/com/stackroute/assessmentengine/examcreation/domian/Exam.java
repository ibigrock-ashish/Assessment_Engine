package com.stackroute.assessmentengine.examcreation.domian;


import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="examcreatedb")
public class Exam 
{
@Id
	private int id;
	private String subject;
	private String topic;
	private String level;
	private String complexity;
	private String mcq;
	private String peragraph;
	private String trueorFalse;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getTopic() {
		return topic;
	}
	public void setTopic(String topic) {
		this.topic = topic;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	public String getComplexity() {
		return complexity;
	}
	public void setComplexity(String complexity) {
		this.complexity = complexity;
	}
	public String getMcq() {
		return mcq;
	}
	public void setMcq(String mcq) {
		this.mcq = mcq;
	}
	public String getPeragraph() {
		return peragraph;
	}
	public void setPeragraph(String peragraph) {
		this.peragraph = peragraph;
	}
	public String getTrueorFalse() {
		return trueorFalse;
	}
	public void setTrueorFalse(String trueorFalse) {
		this.trueorFalse = trueorFalse;
	}
	
	
}
