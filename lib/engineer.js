const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(id, name, summary, email, githubUsername) {
        super(id, name, 'dont matter', summary, email);
        this.githubUsername = githubUsername;
    }
}

// get github method
// returns this.githubUserName
Engineer.prototype.getGithubUsername = function ()  {
return this.githubUsername;
}

// Get role override method
// returns 'engineer'
Engineer.prototype.getRole = function(){
    return 'engineer';
}

module.exports = Engineer;