const inquirer = require('./inquirer');
const Employee = require('./lib/Employee')


function init(){

    const QUESTIONS = [
        {
            type: 'input',
            message: 'what is your name?',
            name: 'name'

        }
    ]
    }

inquirer
.prompt( QUESTIONS )


.then((response) => {

    var people = []
    var person = new Employee(response.name)
    people.push(person)
    return people

});





// build HTML first as a template

`the name is ${people[0].person.name}`
