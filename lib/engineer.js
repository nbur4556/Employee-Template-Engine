const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(id, name, summary, email, githubUsername) {
        super(id, name, 'engineer', summary, email);
        this.githubUsername = githubUsername;
    }
}

    // get github method
        // returns this.githubUserName

    // Get role override method
        // returns 'engineer'