const inquirer = require('./inquirer');
const Employee = require('./lib/Employee');

// run questions set 1

// dependant on ROLE response, run either set 2 3 or 4

function questionsFunction(){

function MainQuestions(){    

    const QUESTIONS = [
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
            type: 'input',
            message: 'What is your role?',
            name: 'role'

        }
    ]

    inquirer
    .prompt( QUESTIONS )
    
    .then((response) => {
    
        if (response.role == 'Engineer'){
            EngineerQuestions();
        } else if (response.role == 'Manager'){
            ManagerQuestions();
        } else if (response.role == 'Intern'){
            InterQuestions();
        }
    
    
    })
    
        .then((response) => {

        var people = []
        var person = new Employee(response.name)
        people.push(person)
        return people

    })
};


function EngineerQuestions(){ // Engineer specific question set
    const ENGINEER = [
        {
            type: 'input',
            message: 'What is your gitHub username?',
            name: 'github'
        }
    ]

    inquirer
    .prompt( QUESTIONS )
    
    .then((engineerResponse) => {
    
    });

};


function ManagerQuestions(){ // Manager specific question set
    const MANAGER = [
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'office'
        }
    ]

    inquirer
    .prompt( QUESTIONS )
    
    .then((managerResponse) => {
    
    });
};

function InterQuestions(){ // Intern specific question set
    const INTERN = [
        {
            type: 'input',
            message: 'What is your school?',
            name: 'school'
        }
    ]

    inquirer
    .prompt( QUESTIONS )
    
    .then((internResponse) => {
    
    });
}

};

questionsFunction();


module.exports = questionsFunction