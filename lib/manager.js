const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(id, name, summary, email, officeNumber) {
        super(id, name, 'manager', summary, email);
        this.officeNumber = officeNumber;
    }
}

//Get office number method
// returns this.officeNumber
Manager.prototype.getOfficeNumber = function ()  {
    return this.officeNumber;
}

// Get role override method
// returns 'manager'
Manager.prototype.getRole = function(){
    return 'manager';
}

module.exports = Manager;