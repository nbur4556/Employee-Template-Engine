const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');
const CardWriter = require('./lib/card-writer');

let allEmployees = new Array();

// Create a new employee and sends to card writer
async function createEmployees() {
    // Set new employees role
    let { role } = await inquirer.prompt({
        message: 'Select employee role',
        name: 'role',
        type: 'list',
        choices: [
            'manager',
            'engineer',
            'intern'
        ]
    });

    // Prompts for employee data and pushes to allEmployees array
    await setupEmployeeData(role);

    // Prompt if user wants to add new employee
    let { repeat } = await inquirer.prompt({
        message: 'Do you want to add another employee?',
        name: 'repeat',
        type: 'list',
        choices: [
            'yes',
            'no'
        ]
    });

    if (repeat == 'yes') {
        // If yes, repeat this function
        createEmployees();
    }
    else {
        // Otherwise, write file
        let template = getTemplate();
        let cardHTML = writeCards(template);
        writeFile(cardHTML);
    }
}

// Get employee information asynchronously and return a promise
async function setupEmployeeData(role) {
    // Common employee information
    let { id } = await inquirer.prompt({
        message: 'Enter employee id',
        name: 'id',
        type: 'input'
    });
    let { name } = await inquirer.prompt({
        message: 'Enter employee name',
        name: 'name',
        type: 'input'
    });
    let { summary } = await inquirer.prompt({
        message: 'Enter employee summary',
        name: 'summary',
        type: 'input'
    });
    let { email } = await inquirer.prompt({
        message: 'Enter employee email',
        name: 'email',
        type: 'input'
    });

    // Unique employee information
    if (role === 'manager') {
        let { officeNumber } = await inquirer.prompt({
            message: 'Enter employee office number',
            name: 'officeNumber',
            type: 'input'
        });
        allEmployees.push(new Manager(id, name, summary, email, officeNumber));
    }
    else if (role === 'engineer') {
        let { githubUsername } = await inquirer.prompt({
            message: 'Enter employee Github username',
            name: 'githubUsername',
            type: 'input'
        });
        allEmployees.push(new Engineer(id, name, summary, email, githubUsername));
    }
    else {
        let { school } = await inquirer.prompt({
            message: 'Enter employee school',
            name: 'school',
            type: 'input'
        });
        allEmployees.push(new Intern(id, name, summary, email, school));
    }
}

// Loads the HTML card template
function getTemplate() {
    let template;

    try { template = fs.readFileSync('./templates/card.html', 'utf8'); }
    catch (err) { throw err; }

    return template;
}

// Creates card for each employee using the HTML card template
function writeCards(template) {
    cardWriter = new CardWriter(template);
    let allCardsHTML = '';

    for (let i = 0; i < allEmployees.length; i++) {
        cardWriter.replaceFields(allEmployees[i]);
        allCardsHTML += `${cardWriter.getCardText()}\n`;
    }

    return allCardsHTML;
}

//Writes HTML file with all cards to output
function writeFile(cardHTML) {
    const replaceKey = '!ALLCARDS';
    let indexHTML;

    try { indexHTML = fs.readFileSync('./templates/index-template.html', 'utf8'); }
    catch (err) { throw err; }

    // Adds HTML for employee cards
    indexHTML = indexHTML.replace(replaceKey, cardHTML);

    try { fs.writeFileSync('./output/index.html', indexHTML); }
    catch (err) { throw err; }
}

// RUN CODE
createEmployees();