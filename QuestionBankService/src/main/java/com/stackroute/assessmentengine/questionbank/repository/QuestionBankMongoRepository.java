package com.stackroute.assessmentengine.questionbank.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.stackroute.assessmentengine.questionbank.domain.QuestionBank;
public interface QuestionBankMongoRepository extends MongoRepository<QuestionBank, String>{

	/*@Query("db.getCollection('questionBank').aggregate([\n" + 
			"{\n" + 
			"    $match:{\n" + 
			"        $and: [\n" + 
			"            {\"subjectLists.subject\": \"{subject:'?0'}\"}\n" + 
			"            ,{\"subjectLists.topicList.topic\": \"{topic:'?1'}\"}\n" + 
			"            ,{\"subjectLists.topicList.levelList.level\": \"{level:'?2'}\"}\n" + 
			"            ,{\"subjectLists.topicList.levelList.complexityList.complexity\": \"{complexity:'?3'}\"}\n" + 
			"            ,{\"subjectLists.topicList.levelList.complexityList.questionTypeList.questionType\": \"{questionType:'?4'}\"}\n" + 
			"        ]       \n" + 
			"    }    \n" + 
			"}\n" + 
			"\n" + 
			"]);")
		QuestionBank getSpecicsub(String subject,String topic,String level,String complexity,String questionType);
	*/
	
	/*@Query("db.getCollection('questionBank').aggregate([{$match:{$and: [{\"subjectLists.subject\": \"{subject:'?0'}\"}]}}]);")
	QuestionBank getSpecicsub(String subject);*/
	
}


