const inquirer = require('inquirer');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');

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

    console.log(`ID: ${id}`);
    console.log(`NAME: ${name}`);
    console.log(`ROLE: ${role}`);
    console.log(`SUMMARY: ${summary}`);
    console.log(`EMAIL: ${email}`);
}