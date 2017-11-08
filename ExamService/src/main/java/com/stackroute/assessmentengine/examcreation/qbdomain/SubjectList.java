package com.stackroute.assessmentengine.examcreation.qbdomain;

import java.util.ArrayList;
import java.util.List;

public class SubjectList {
	private String subject;
	private List<TopicList> topicList;
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public List<TopicList> getTopicList() {
		return topicList;
	}
	public void setTopicList(List<TopicList>  topicList) {
		this.topicList = topicList;
	}
	public SubjectList(String subject, List<TopicList>  topicList) {
		super();
		this.subject = subject;
		this.topicList = topicList;
	}
	public SubjectList() {
		super();
		// TODO Auto-generated constructor stub
		this.topicList=new ArrayList<>();
	}
	
	

}
