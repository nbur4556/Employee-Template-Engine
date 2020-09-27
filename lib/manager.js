const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(id, name, summary, email, officeNumber) {
        super(id, name, '___', summary, email);
        this.officeNumber = officeNumber;
    }
}

//Get office number method
// returns this.officeNumber

// Get role override method
// returns 'manager'

module.exports = Manager;