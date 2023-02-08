class Manager extends Employee {
    constructor (name, ID, email, role, lunch){
        super(name, ID, email)
        this.role = role
        this.lunch = lunch
    }
    getLunch(){
        return this.lunch
    }
    getRole(){
        return 'Manager';
    }
}

