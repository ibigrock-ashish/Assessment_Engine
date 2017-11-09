package com.evaluator.EvaluatorServices.message;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import java.util.concurrent.CountDownLatch;
import com.evaluator.EvaluatorServices.domain.McqEvaluatorBean;
import com.evaluator.EvaluatorServices.service.McqEvaluatorService;

public class KafkaConsumer {
	private static final Logger log = LoggerFactory.getLogger(KafkaProducer.class);
	
	@Autowired
	McqEvaluatorService mcqEvaluatorService;
	
	private CountDownLatch latch = new CountDownLatch(1);

	public CountDownLatch getLatch() {
	   return latch;
	 }
	
	@KafkaListener(topics = "${kafka.topic2.json2}")
	 public void receive(McqEvaluatorBean mcqEvaluatorBean) {
		
	   log.info("received evaluatorBean='{}'", mcqEvaluatorBean.toString());
	   System.out.println("------------------------"+mcqEvaluatorBean.getQuestion());
	   mcqEvaluatorService.evaluateMcqQuestion(mcqEvaluatorBean);
	   latch.countDown();
	 }
}

