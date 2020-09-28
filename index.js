const inquirer = require('inquirer');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');

let newEmployee;

inquirer.prompt({
    message: 'Select employee role',
    name: 'role',
    type: 'list',
    choices: [
        'manager',
        'engineer',
        'intern'
    ]
}).then(({ role }) => {
    createEmployee(role);
});

async function createEmployee(role) {
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

    if (role === 'manager') {
        let { officeNumber } = await inquirer.prompt({
            message: 'Enter employee office number',
            name: 'officeNumber',
            type: 'input'
        });
        newEmployee = new Manager(id, name, summary, email, officeNumber);
    }
    else if (role === 'engineer') {
        let { githubUsername } = await inquirer.prompt({
            message: 'Enter employee Github username',
            name: 'githubUsername',
            type: 'input'
        });
        newEmployee = new Engineer(id, name, summary, email, githubUsername);
    }
    else {
        let { school } = await inquirer.prompt({
            message: 'Enter employee school',
            name: 'school',
            type: 'input'
        });
        newEmployee = new Intern(id, name, summary, email, school);
    }
}