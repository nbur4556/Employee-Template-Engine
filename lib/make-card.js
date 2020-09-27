function CardWriter(template) {
    this.template = template;

    // Return value
}

CardWriter.prototype.getTemplate = function () {
    return this.template;
}

// Find fields to overwrite
// Overwrite fields
// CardWriter.prototype.overwriteFields = function (role) {
//     const patterns = ['[NAME]', '[ROLE]', '[ID]', '[EMAIL]', '[OTHER]'];
// }

// TESTING
const fs = require('fs');

fs.readFile('../templates/card.html', 'utf8', (err, data) => {
    if (err) throw err

    const card = new CardWriter(data);
    console.log(card.getTemplate());
});

module.exports = CardWriter;