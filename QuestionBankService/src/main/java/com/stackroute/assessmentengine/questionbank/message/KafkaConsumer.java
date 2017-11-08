package com.stackroute.assessmentengine.questionbank.message;
 
import java.util.concurrent.CountDownLatch;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.stackroute.assessmentengine.questionbank.domain.Model;
import com.stackroute.assessmentengine.questionbank.domain.QuestionBank;
import com.stackroute.assessmentengine.questionbank.domain.SubjectList;


public class KafkaConsumer {
	private static final Logger LOGGER = LoggerFactory.getLogger(KafkaConsumer.class);

	 private CountDownLatch latch = new CountDownLatch(1);

	 public CountDownLatch getLatch() {
	   return latch;
	 }

	 @KafkaListener(topics = "${kafka.topic.json}")
	 public void receive(QuestionBank questionBank) {
	      for(SubjectList c:questionBank.getSubjectLists())
	      {
	          LOGGER.info("received car='{}'", c.toString());
	            System.out.println("+++++++++++++++++++"+c.toString());
	            latch.countDown(); 
	      }
	 
	 }
}

