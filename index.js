const inquirer = require('inquirer');

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
    console.log(role);
}); 