package com.stackroute.assessmentengine.questionbank.service;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.stackroute.assessmentengine.questionbank.config.SpringMongoConfig;
import com.stackroute.assessmentengine.questionbank.domain.QuestionBank;
import com.stackroute.assessmentengine.questionbank.repository.QuestionBankMongoRepository;

@Service
public class QuestionBankServiceImpl implements QuestionBankService {
	
	ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringMongoConfig.class);
	MongoOperations mongoOperation = (MongoOperations) ctx.getBean("mongoTemplate");

	@Autowired
	MongoTemplate mongoTemplate;
	
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
	public List getSpecificquestions(String subject,String topic,String level,String complexity,String questionType) {
		
		Query query11 = new Query();
		query11.addCriteria(Criteria.where("subjectLists.subject").in(subject)
				.andOperator(Criteria.where("subjectLists.topicList.topic").in(topic)
				.andOperator(Criteria.where("subjectLists.topicList.levelList.level").in(level)
				.andOperator(Criteria.where("subjectLists.topicList.levelList.complexityList.complexity").in(complexity)
				.andOperator(Criteria.where("subjectLists.topicList.levelList.complexityList.questionTypeList.questionType").in(questionType))))));
	
		List<QuestionBank> userTest11 = mongoOperation.find(query11, QuestionBank.class);
		System.out.println("query11 - " + query11.toString());
		for (QuestionBank questionBank : userTest11) {
			System.out.println("userTest11 - " + questionBank);
		}
		
		return userTest11;
	}

}
