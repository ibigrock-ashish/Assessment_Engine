package com.stackroute.assessmentengine.questionbank.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.stackroute.assessmentengine.questionbank.domain.QuestionBank;
public interface QuestionBankMongoRepository extends MongoRepository<QuestionBank, String>{

	@Query("subject:'?0")
	QuestionBank getSpecicsub(String subject);
}
