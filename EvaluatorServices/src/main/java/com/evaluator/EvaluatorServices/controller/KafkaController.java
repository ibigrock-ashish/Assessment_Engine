//package com.evaluator.EvaluatorServices.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.evaluator.EvaluatorServices.domain.McqEvaluatorBean;
//import com.evaluator.EvaluatorServices.message.KafkaConsumer;
//import com.evaluator.EvaluatorServices.message.KafkaProducer;
//
//@RestController
//@RequestMapping(value="/kafka")
//public class KafkaController {
//	
//	KafkaProducer producer;
//	KafkaConsumer consumer;
//	
//	
//		
//	@Autowired
//	public void setProducer(KafkaProducer producer) {
//		this.producer = producer;
//	}
//	@Autowired
//	public void setConsumer(KafkaConsumer consumer) {
//		this.consumer = consumer;
//	}
//	
//
//	@GetMapping(value="/producer")
//	public ResponseEntity<String> producer(McqEvaluatorBean mcqEvaluatorBean){
//		
//		try {
//			
//			producer.send(mcqEvaluatorBean);
//			return ResponseEntity.ok("Evaluated Question Produced");
//			
//		} catch (Exception e) {
//			
//			return ResponseEntity.ok("Kafka temporarily unavailable");
//		}
//		
//		
//	}
//	
//	@GetMapping(value="/consumer")
//	public ResponseEntity<String> consumer(McqEvaluatorBean mcqEvaluatorBean) {
//		
////		try {
//			System.out.println("---------------------------HI---------------------------------");
//			consumer.receive(mcqEvaluatorBean);
//			return ResponseEntity.ok("Question Consumed");
//			
////		} catch (Exception e) {
////			
////			return ResponseEntity.ok("Kafka Temporaily Unavailable");
////		}
//	}
//	
//}
//
