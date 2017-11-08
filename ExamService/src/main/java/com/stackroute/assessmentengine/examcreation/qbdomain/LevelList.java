package com.stackroute.assessmentengine.examcreation.qbdomain;

import java.util.ArrayList;
import java.util.List;

public class LevelList {
	private String level;
	private List<ComplexityList> complexityList;
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	public List<ComplexityList> getComplexityList() {
		return complexityList;
	}
	public void setComplexityList(List<ComplexityList> complexityList) {
		this.complexityList = complexityList;
	}
	public LevelList(String level, List<ComplexityList> complexityList) {
		super();
		this.level = level;
		this.complexityList = complexityList;
	}
	public LevelList() {
		super();
		// TODO Auto-generated constructor stub
		this.complexityList=new ArrayList<>();
	}
	

}
