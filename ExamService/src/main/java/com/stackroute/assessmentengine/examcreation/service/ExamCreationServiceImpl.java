package com.stackroute.assessmentengine.examcreation.service;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;
import com.stackroute.assessmentengine.examcreation.domian.Exam;
import com.stackroute.assessmentengine.examcreation.repository.ExamCreationRepository;
@Component
@Document(collection="examcreationdb")
public class ExamCreationServiceImpl implements ExamCreationService{

	
	@Autowired
	private ExamCreationRepository examCreationRepository;
	Exam exam;
	
	
	@Override
	public String create(Exam exam) {
		
		examCreationRepository.save(exam);
		return "successfully saved data...!";
	}
	
	@Override
	public Exam findCustomBySubject(String subject) {
		
		return examCreationRepository.findCustomBySubject(subject);
	}
	
	

}






