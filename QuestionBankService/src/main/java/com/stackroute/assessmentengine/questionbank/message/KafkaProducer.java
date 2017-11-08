package com.stackroute.assessmentengine.questionbank.message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.stackroute.assessmentengine.questionbank.domain.QuestionBank;
import com.stackroute.assessmentengine.questionbank.exception.KafkaUnavialableException;




public class KafkaProducer {
	private static final Logger LOGGER = LoggerFactory.getLogger(KafkaProducer.class);

	 @Value("${kafka.topic.json}")
	 private String jsonTopic;

	 @Autowired
	 private KafkaTemplate<String,QuestionBank> kafkaTemplate;

	
	 public void send(QuestionBank questionBank) {
	   LOGGER.info("sending car='{}'", questionBank.toString());
	   kafkaTemplate.send(jsonTopic,questionBank);
	 }
}