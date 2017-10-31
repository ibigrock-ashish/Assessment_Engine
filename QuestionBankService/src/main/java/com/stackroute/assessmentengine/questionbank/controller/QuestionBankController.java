package com.stackroute.assessmentengine.questionbank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.stackroute.assessmentengine.questionbank.domain.QuestionBank;
import com.stackroute.assessmentengine.questionbank.service.QuestionBankService;

import java.util.*;
@RestController

public class QuestionBankController {
	@Autowired
	private QuestionBankService questionBankService;
	
	@RequestMapping("/questions")
	public ResponseEntity<List<QuestionBank>> getallQuestions() {
		
		return ResponseEntity.ok( questionBankService.getallquestions());
		
	}
	@RequestMapping("/questions/{id}")
	public ResponseEntity<QuestionBank> getQuestion(@PathVariable String id) {
		;
		return ResponseEntity.ok(questionBankService.getquestion(id));
		
	}
	@RequestMapping(method=RequestMethod.POST,value="/questions")
	public ResponseEntity<String> addQuestion(@RequestBody QuestionBank questionBank) {
		
		questionBankService.addquestion(questionBank);
		return ResponseEntity.ok("Question saved successfully");
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/questions/{id}")
	public ResponseEntity<String> updateQuestion(@RequestBody QuestionBank question, @PathVariable String id) {
		
		questionBankService.updatequestion(id,question);
		return ResponseEntity.ok("Question Updated successfully");
	}
	@RequestMapping(method=RequestMethod.DELETE,value="/places/{id}")
	public ResponseEntity<String> deleteQuestion(@PathVariable String id) {
		
		questionBankService.deletequestion(id);
		 
		 return ResponseEntity.ok("Question Deleted successfully");
	}
	@RequestMapping(method=RequestMethod.GET,value="/getsub/{subject}")
	public ResponseEntity<QuestionBank> getSpecificsub(@PathVariable String subject){
		
		return ResponseEntity.ok(questionBankService.getSpecificsub(subject));
		
	}

}
