package com.stackroute.assessmentengine.examcreation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
@EnableDiscoveryClient
@SpringBootApplication
public class ExamCreationApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExamCreationApplication.class, args);
	}
}