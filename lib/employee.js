
class Employee {
    constructor(id, name, role, summary, email) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.summary = summary;
        this.email = email;
    }
}

// returns employees id
Employee.prototype.getId = function ()  {
    return this.id;
}

// returns employees name
Employee.prototype.getName = function(){
    return this.name;
}

// returns employees role
Employee.prototype.getRole = function(){
    return this.role;
}

// returns employees summary
Employee.prototype.getSummary = function(){
    return this.summary;
}

// returns employees email
Employee.prototype.getEmail = function(){
    return this.email;
}

module.exports = Employee;