# AssessmentEngine

# Overview
The product is an Assessment Engine that can be used to create question bank, roaster question paper(Test), schedule exam, collect exam result, generate analytics and reports, generate events which can be consumed by interested third parties.

# Goals
1.	Interoperability with various event producers and receivers
2.	High performance oriented
3.	High availability 

# Specifications

# Standard Infrastructure Microservices
1.	Config Service
2.	API Gateway Service
3.	Discovery Registry Service

# Application Micro-Services:
1.	Question Bank Service
2.	Question Paper Service
3.	Scheduler Service
4.	Result Collector Service
5.	Event Producer Service
6.	Event Receiver Service
7.	Analytics Service
8.	Reporting Service
 

# List of Actors 
1.	Admin
2.	Student
3.	System

# User Stories
       
1.	As a admin, I should be able to register myself, login, create & edit question bank
2.	As a admin, I should be able to generate and save question paper with various questions and its combinations.
3.	As a admin, I should be able to set question paper parameters such as total test time, negative markings, one or more correct answers etc
4.	As a admin, I should be able to enroll/create student master records
5.	As a admin, I should be able to assign students for specific question paper

6.	As a student, I should be able to login and view  assigned question papers 
7.	As a student, I should be able to take the assigned test
8.	As a student, I should be able to view my test result report

9.	As a admin, I should be able to generate student test report 
10.	As a admin, I should be able to generate student test analytics report 
11.	As a admin, I should be able to email generates report to student and concerned stakeholders. 

12.	As a system, I should be able to produce events at appropriate time during test and publish so that it can be consumed by interested third party applications


# Technologies Being Used:-
1.	React
2.	Java 
3.	Spring, Spring Boot, Spring MVC, Spring Rest
4.	Kafka 
5.	Zookeeper
6.	Docker
7.	Cassanndra
8.	Redis Cache
9.	Eureka
10.	Zuul


# Challenges To Address:-
1.	Auto Scaling and high availability
2.	Event producers and consumers
3.	Load Balancing
4.	Clustering


# How to run:
-Clone this repository

mvn clean compile install

cd AuthenticationService

mvn clean compile install spring-boot:run

Open browser and point to: http://localhost:8080/