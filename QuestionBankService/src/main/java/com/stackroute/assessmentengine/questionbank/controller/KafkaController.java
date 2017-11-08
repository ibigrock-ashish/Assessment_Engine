package com.stackroute.assessmentengine.questionbank.controller;


import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.assessmentengine.questionbank.domain.Model;
import com.stackroute.assessmentengine.questionbank.message.KafkaConsumer;
import com.stackroute.assessmentengine.questionbank.message.KafkaProducer;

import net.minidev.json.parser.JSONParser;



//@RestController
//@RequestMapping(value="/kafka")
//public class KafkaController {
//    
//   private KafkaProducer producer;
//    
//   private KafkaConsumer consumer;
//
//
//    
//    @Autowired
//    public void setProducer(KafkaProducer producer) {
//        this.producer = producer;
//    }
//    @Autowired
//    public void setConsumer(KafkaConsumer consumer) {
//        this.consumer = consumer;
//    }
//   
//
//    @GetMapping(value="/producer")
//    public String producer() {
//    	
//    	return null;
//    }
    


//}


/* @GetMapping(value="/producer")
public String producer(@RequestParam("data")String data){
    try {
    producer.send(data);
    
    return "Done";
    }
    catch(Exception e)
    {
        return "Kafka is temporarily unavailable";
    }
}

@GetMapping(value="/consumer")
public String getAllRecievedMessage(){
    try {
    String messages = model.getValue();
    
  JSONParser parser = new JSONParser();
    JSONObject json = (JSONObject) parser.parse(messages);
    //storage.clear();
       
    return messages;
    }
    catch(Exception e)
    {
        JSONObject hh = null;
		return "hh";
    }
}

*/ 