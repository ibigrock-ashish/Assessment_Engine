package com.stackroute.assessmentengine.engineService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import com.stackroute.assessmentengine.engineService.domain.Display;
import com.stackroute.assessmentengine.engineService.domain.Question;
import com.stackroute.assessmentengine.engineService.message.KafkaProducer;

@RestController
public class Enginecontroller {
	
	
	@Autowired
	KafkaProducer producer;
	
	
	
	String questionarr[]= {"Question1","Question2"};
	String answer[]= {"Answer1","Answer2"};

    @MessageMapping("/questions")
    @SendTo("/topic/question")
    public Display greeting(Question question) throws Exception {
        Thread.sleep(1000); // simulated delay
        String options[]= {"option1","option2","option3"};
		Question q=new Question(1,"question3","Answer3",options);
		producer.send(q);
		
        if(question.getQuestion().equals("Question1"))
        {
        	
        	Question questions=new Question();
        	questions.setQuestion(questionarr[1]);
        	questions.setAnswer(answer[1]);
        	
        return new Display("question:" + questions.getQuestion() + "Aswer:"+questions.getAnswer()+"Option:"+question.getOptions()[1]+"");
    }
        if(question.getQuestion().equals("Question2"))
        {
        	Question questions=new Question();
        	questions.setQuestion(questionarr[0]);
        	questions.setAnswer(answer[0]);
        	
        return new Display("question:" + questions.getQuestion() + "Aswer:"+questions.getAnswer()+"Option:"+question.getOptions()[1]+"");
      
        }
        else {
        	return new Display("Successfully Exam Completed");
        }
     }
    @GetMapping(value="/producer")
	public String producer(){
    	String options[]= {"option1","option2","option3"};
		Question q=new Question(1,"question3","Answer3",options);
		producer.send(q);
		return "Done";
	}
}