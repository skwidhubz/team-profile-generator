const Employee = require('./Employee')

class Engineer extends Employee {
    constructor (name, ID, email, github, language){
        super(name, ID, email)
        this.github = github
        this.language = language
    }

    getRole(){
        return 'Engineer';
    }
}