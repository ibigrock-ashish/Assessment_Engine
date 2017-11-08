package com.stackroute.assessmentengine.examcreation.qbdomain;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.mongodb.AggregationOutput;
import com.mongodb.DBObject;


@Document(collection = "questionBank")
public class QuestionBank {
	private List<SubjectList> subjectLists;

	public List<SubjectList> getSubjectLists() {
		return subjectLists;
	}

	public void setSubjectLists(List<SubjectList> subjectLists) {
		this.subjectLists = subjectLists;
	}

	public QuestionBank(List<SubjectList> subjectLists) {
		super();
		this.subjectLists = subjectLists;
	}

	public QuestionBank() {
		super();
		// TODO Auto-generated constructor stub
		this.subjectLists=new ArrayList<>();
	}
	
}
