package com.stackroute.assessmentengine.examcreation.qbdomain;

import java.util.ArrayList;
import java.util.List;

public class TopicList {
	private String topic;
	private List<LevelList> levelList;
	
	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public List<LevelList> getLevelList() {
		return levelList;
	}

	public void setLevelList(List<LevelList> levelList) {
		this.levelList = levelList;
	}

	public TopicList(String topic, List<LevelList> levelList) {
		super();
		this.topic = topic;
		this.levelList = levelList;
	}

	public TopicList() {
		super();
		// TODO Auto-generated constructor stub
		this.levelList=new ArrayList<>();
	}

}
