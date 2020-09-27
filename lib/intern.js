const Employee = require('./employee.js');

class Intern extends Employee {
    constructor(id, name, summary, email, school) {
        super(id, name, '___', summary, email);
        this.school = school;
    }
}

// get school method
// returns this.school
Intern.prototype.getSchool = function ()  {
    return this.school;
}

// Get role override method
// returns 'intern'
Intern.prototype.getRole = function ()  {
    return 'intern';
}

module.exports = Intern;