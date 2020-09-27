const Employee = require('./employee.js');

class Intern extends Employee {
    constructor(id, name, summary, email, school) {
        super(id, name, 'intern', summary, email);
        this.school = school;
    }
}

// returns intern school
Intern.prototype.getSchool = function ()  {
    return this.school;
}

// returns 'intern' as the intern role
Intern.prototype.getRole = function ()  {
    return 'intern';
}

module.exports = Intern;