function CardWriter(template) {
    this.template = template;
}

CardWriter.prototype.getTemplate = function () {
    return this.template;
}

// Finds template fields to overwrite and replaces with data from employee object
CardWriter.prototype.replaceFields = function (employee) {
    const patterns = ['!NAME', '!ROLE', '!ID', '!EMAIL', '!OTHER'];
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
}

CardWriter.prototype.getCardText = function () {
    return this.cardText;
}

// TESTING
const fs = require('fs');
const Employee = require('./employee.js');

const employee = new Employee(0, 'John Doe', 'CEO', 'summary', 'nbur4556@gmail.com');

fs.readFile('../templates/card.html', 'utf8', (err, data) => {
    if (err) throw err

    const card = new CardWriter(data);
    console.log(card.getTemplate());
    card.replaceFields(employee);
    console.log(card.getCardText());
});

module.exports = CardWriter;