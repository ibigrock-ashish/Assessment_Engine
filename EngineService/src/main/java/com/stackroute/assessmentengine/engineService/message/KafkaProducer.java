package com.stackroute.assessmentengine.engineService.message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;

import com.stackroute.assessmentengine.engineService.domain.Question;


public class KafkaProducer {

  private static final Logger LOGGER = LoggerFactory.getLogger(KafkaProducer.class);

  @Value("${kafka.topic.json}")
  private String jsonTopic;

  @Autowired
  private KafkaTemplate<String, Question> kafkaTemplate;

  public void send(Question question) {
    LOGGER.info("sending car='{}'", question.toString());
    kafkaTemplate.send(jsonTopic, question);
  }
}
