package com.stackroute.assessmentengine.examcreation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.assessmentengine.examcreation.domian.Model;
import com.stackroute.assessmentengine.examcreation.message.KafkaConsumer;
import com.stackroute.assessmentengine.examcreation.message.KafkaProducer;

@RestController
@RequestMapping(value="/kafka")
public class KafkaController {
    
   private KafkaProducer producer;
    
   private KafkaConsumer consumer;

   private Model model;
    
    @Autowired
    public void setProducer(KafkaProducer producer) {
        this.producer = producer;
    }
    @Autowired
    public void setConsumer(KafkaConsumer consumer) {
        this.consumer = consumer;
    }
    @Autowired
    public void setModel(Model model) {
        this.model = model;
    }

    
    
    @GetMapping(value="/producer")
    public String producer(@RequestParam("data") String data){
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
        //storage.clear();
        
        return messages;
        }
        catch(Exception e)
        {
            return "Kafka is temporarily unavailable";
        }
    }

}