class Employee {
    constructor (name, ID, email){
        this.name = name
        this.ID = ID
        this.email = email
    }
    getName(){
        return this.name
    }
    getID(){
        return this.ID
    }
    getEmail(){
        return this.email
    }

}

var person1 = new Employee('Tom', 55, 'tom@tom.com')
console.log(tutor.getName());




var manager1 = new Manager('team')
console.log(manager1.getName(), manager1.getName());



module.exports = Employee