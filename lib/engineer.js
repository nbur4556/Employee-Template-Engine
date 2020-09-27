const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(id, name, summary, email, githubUsername) {
        super(id, name, 'engineer', summary, email);
        this.githubUsername = githubUsername;
    }
}

// returns engineers github username
Engineer.prototype.getGithubUsername = function ()  {
return this.githubUsername;
}

// returns 'engineer' as the engineer role
Engineer.prototype.getRole = function(){
    return 'engineer';
}

module.exports = Engineer;