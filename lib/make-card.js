function CardWriter(template) {
    this.template = template;

    // Return value
}

CardWriter.prototype.getTemplate = function () {
    return this.template;
}

// Find fields to overwrite
// Overwrite fields
CardWriter.prototype.replaceFields = function (employee) {
    const patterns = ['!NAME', '!ROLE', '!ID', '!EMAIL', '!OTHER'];
    let result = this.template;

    result = result.replace(patterns[0], employee.getName());
    result = result.replace(patterns[1], employee.getRole());
    result = result.replace(patterns[2], employee.getId());
    result = result.replace(patterns[3], employee.getEmail());

    console.log(result);
}

// TESTING
const fs = require('fs');
const { getMaxListeners } = require('process');
const Employee = require('./employee.js');

const employee = new Employee(0, 'John Doe', 'CEO', 'summary', 'nbur4556@gmail.com');

fs.readFile('../templates/card.html', 'utf8', (err, data) => {
    if (err) throw err

    const card = new CardWriter(data);
    console.log(card.getTemplate());
    card.replaceFields(employee);
});

module.exports = CardWriter;