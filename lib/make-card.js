function CardWriter(template) {
    this.template = template;
}

CardWriter.prototype.getTemplate = function () {
    return this.template;
}

// Finds template fields to overwrite and replaces with data from employee object
CardWriter.prototype.replaceFields = function (employee) {
    const patterns = ['!NAME', '!ROLE', '!ID', '!EMAIL'];
    const replaceWords = [
        employee.getName(),
        employee.getRole(),
        employee.getId(),
        employee.getEmail()
    ]
    this.cardText = this.template;

    for (let i = 0; i < patterns.length; i++) {
        this.cardText = this.cardText.replace(patterns[i], replaceWords[i]);
    }

    // Employee role type specific
    if (employee.getRole() == 'manager') {
        console.log('MANAGER');
        this.cardText = this.cardText.replace('!OTHER', employee.getOfficeNumber());
    }
    else if (employee.getRole() == 'intern') {
        console.log('INTERN');
        this.cardText = this.cardText.replace('!OTHER', employee.getSchool());
    }
    else if (employee.getRole() == 'engineer') {
        console.log('ENGINEER');
        this.cardText = this.cardText.replace('!OTHER', employee.getGithubUsername());
    }
}

CardWriter.prototype.getCardText = function () {
    return this.cardText;
}

// TESTING
const fs = require('fs');
const Employee = require('./employee.js');
const Manager = require('./manager.js');
const Engineer = require('./engineer.js');
const Intern = require('./intern.js');

const employee = new Employee(0, 'John Doe', 'CEO', 'summary', 'nbur4556@gmail.com');
const engineer = new Engineer(0, 'Billy Jean', 'summary', 'lsakgj@aeobnro.com', 'GITHUB');
const intern = new Intern(0, 'Mr. Rogers', 'summary', 'email@email.com', 'Jordan High School');
const manager = new Manager(0, 'Rachel Parry', 'summary', 'email', '#5');

fs.readFile('../templates/card.html', 'utf8', (err, data) => {
    if (err) throw err

    const card = new CardWriter(data);

    card.replaceFields(employee);
    console.log(card.getCardText());
    console.log('\n');

    card.replaceFields(engineer);
    console.log(card.getCardText());
    console.log('\n');

    card.replaceFields(intern);
    console.log(card.getCardText());
    console.log('\n');

    card.replaceFields(manager);
    console.log(card.getCardText());
    console.log('\n');

});

module.exports = CardWriter;