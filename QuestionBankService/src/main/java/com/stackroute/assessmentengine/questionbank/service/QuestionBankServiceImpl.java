package com.stackroute.assessmentengine.questionbank.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.assessmentengine.questionbank.domain.QuestionBank;
import com.stackroute.assessmentengine.questionbank.repository.QuestionBankMongoRepository;
@Service
public class QuestionBankServiceImpl implements QuestionBankService {
	
	@Autowired
	QuestionBankMongoRepository mongoRepository;

	@Override
	public List getallquestions() {
		List<QuestionBank> l=mongoRepository.findAll();
		return l;
	}

	@Override
	public QuestionBank getquestion(String id) {
		QuestionBank questionBank=mongoRepository.findOne(id);
		return questionBank;
		
	}

	@Override
	public QuestionBank addquestion(QuestionBank questionBank) {
		return mongoRepository.save(questionBank);
	}

	@Override
	public QuestionBank updatequestion(String id, QuestionBank questionBank) {
		return mongoRepository.save(questionBank);
	}

	@Override
	public String deletequestion(String id) {
		mongoRepository.delete(id);
		return "";
	}

	@Override
	public QuestionBank getSpecificsub(String subject) {
	
		return mongoRepository.getSpecicsub(subject);
	}
	
	

}
