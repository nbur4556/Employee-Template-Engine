
class Employee {
    constructor(id, name, role, summary, email) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.summary = summary;
        this.email = email;
    }
}

// Get id method
// return this.id
Employee.prototype.getId = function ()  {
    return this.id;
}

// Get name method
// return this.name
Employee.prototype.getName = function(){
    return this.name;
}

// Get role method
// return this.role
Employee.prototype.getRole = function(){
    return this.role;
}

// Get summary method
// return this.summary
Employee.prototype.getSummary = function(){
    return this.summary;
}

// Get email method
// return this.method
Employee.prototype.getEmail = function(){
    return this.email;
}

module.exports = Employee;