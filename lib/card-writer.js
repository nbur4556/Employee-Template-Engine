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

module.exports = CardWriter;