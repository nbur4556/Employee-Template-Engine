const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(id, name, summary, email, officeNumber) {
        super(id, name, 'manager', summary, email);
        this.officeNumber = officeNumber;
    }
}

// Returns manager office number
Manager.prototype.getOfficeNumber = function ()  {
    return this.officeNumber;
}

// Returns 'manager' as the manager role
Manager.prototype.getRole = function(){
    return 'manager';
}

module.exports = Manager;