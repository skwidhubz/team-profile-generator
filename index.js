// Import npm packages
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Import classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


function init(){

    function questionsFunction(){

        console.log('main func called');
    
    function MainQuestions(){   
        
        const QUESTIONS = 
    
        [
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name'
    
            },
            {
                type: 'input',
                message: 'What is your ID number?',
                name: 'ID'
    
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email'
    
            },
            {
                type: 'list',
                message: 'What is your role?',
                name: 'role',
                choices:  ['Engineer', 'Manager', 'Intern'],
    
            },
        ];
        
        inquirer
        .prompt( QUESTIONS )
    
        .then((response => {
        
            if (response.role == 'Engineer'){
                EngineerQuestions();
            } else if (response.role == 'Manager'){
                ManagerQuestions();
            } else if (response.role == 'Intern'){
                InterQuestions();
            }
        
        }))
        
            .then((response) => {
    
            var people = []
            var person = new Employee(response.name)
            people.push(person)
            return people
    
        })
    };
    
    MainQuestions();
    
    function EngineerQuestions(){ // Engineer specific question set
        const ENGINEER = [
            {
                type: 'input',
                message: 'What is your gitHub username?',
                name: 'github',
            }
        ]
    
        inquirer
        .prompt( ENGINEER )
        
        .then((engineerResponse) => {
    
            console.log(engineerResponse);
        
        });

        MainQuestions()
    
    };
    
    function ManagerQuestions(){ // Manager specific question set
        const MANAGER = [
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'office',
            }
        ]
    
        inquirer
        .prompt( MANAGER )
        
        .then((managerResponse) => {
    
            const manager = new Manager (managerResponse.office);
        
        });

        MainQuestions()
    };
    
    function InterQuestions(){ // Intern specific question set
        const INTERN = [
            {
                type: 'input',
                message: 'What is your school?',
                name: 'school',
            }
        ]
    
        inquirer
        .prompt( INTERN )
        
        .then((internResponse) => {
    
            console.log(internResponse);
        
        });

        MainQuestions()
    }
    
    };
    
    questionsFunction()

}

init();

// build HTML first as a template

// `the name is ${people[0].person.name}`


// questionsFunction();


