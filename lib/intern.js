const Employee = require('./employee.js');

class Intern extends Employee {
    constructor(id, name, summary, email, school) {
        super(id, name, '___', summary, email);
        this.school = school;
    }
}

// get school method
// returns this.school

// Get role override method
// returns 'intern'

module.exports = Intern;