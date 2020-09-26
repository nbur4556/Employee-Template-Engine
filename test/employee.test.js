const Employee = require('../lib/employee.js');

describe('Employee', () => {
    // Test for variable type
    it('Creating Employee object should initialize id as a number', () => {
        const employee = new Employee(0, 'name', 'role', 'summary', 'email');
        expect(employee.id).toEqual(typeof Number);
    });
    it('Creating Employee object should initialize name as a string', () => {
        const employee = new Employee(0, 'name', 'role', 'summary', 'email');
        expect(employee.name).toEqual(typeof String);
    });
    it('Creating Employee object should initialize role as a string', () => {
        const employee = new Employee(0, 'name', 'role', 'summary', 'email');
        expect(employee.role).toEqual(typeof String);
    });
    it('Creating Employee object should initialize summary as a string', () => {
        const employee = new Employee(0, 'name', 'role', 'summary', 'email');
        expect(employee.summary).toEqual(typeof String);
    });
    it('Creating Employee object should initialize email as a string', () => {
        const employee = new Employee(0, 'name', 'role', 'summary', 'email');
        expect(employee.email).toEqual(typeof String);
    });

    // Throw error on wrong variable type
    it('Creating Employee object with string as id should throw error', () => {
        const employee = new Employee('id', 'name', 'role', 'summary', 'email');
        // expect(emloyee.id).toError('error')
    });
});

describe('Employee getId', () => {

});

describe('Employee getName', () => {

});

describe('Employee getRole', () => {

});

describe('Employee getSummary', () => {

});

describe('Employee getEmail', () => {

});