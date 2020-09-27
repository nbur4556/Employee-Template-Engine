const Employee = require('../lib/employee.js');

// Test Employee object
describe('Employee', () => {
    it('Can instantiate Employee instance', () => {
        const e = new Employee();
        expect(typeof (e)).toBe('object');
    });

    // Test for variable type
    it('Creating Employee object should initialize id as a number', () => {
        const e = new Employee(0, 'name', 'role', 'summary', 'email');
        expect(typeof (e.id)).toEqual('number');
    });
    it('Creating Employee object should initialize name as a string', () => {
        const e = new Employee(0, 'name', 'role', 'summary', 'email');
        expect(typeof (e.name)).toEqual('string');
    });
    it('Creating Employee object should initialize role as a string', () => {
        const e = new Employee(0, 'name', 'role', 'summary', 'email');
        expect(typeof (e.role)).toEqual('string');
    });
    it('Creating Employee object should initialize summary as a string', () => {
        const e = new Employee(0, 'name', 'role', 'summary', 'email');
        expect(typeof (e.summary)).toEqual('string');
    });
    it('Creating Employee object should initialize email as a string', () => {
        const e = new Employee(0, 'name', 'role', 'summary', 'email');
        expect(typeof (e.email)).toEqual('string');
    });
});

// Test Employee.getId() method
describe('Employee getId', () => {
    it('Should return the id of the object', () => {
        const testId = 5;
        const employee = new Employee(testId, 'name', 'role', 'summary', 'email');
        expect(employee.getId()).toEqual(testId);
    });
});

// Test Employee.getName() method
describe('Employee getName', () => {
    it('Should return the name of the object', () => {
        const testName = 'John Doe';
        const employee = new Employee(0, testName, 'role', 'summary', 'email');
        expect(employee.getName()).toEqual(testName);
    });
});

// Test Employee.getRole() method
describe('Employee getRole', () => {
    it('Should return the role of the object', () => {
        const testRole = 'employee';
        const employee = new Employee(0, 'name', testRole, 'summary', 'email');
        expect(employee.getRole()).toEqual(testRole);
    });
});

// Test Employee.getSummary() method
describe('Employee getSummary', () => {
    it('Should return the summary of the object', () => {
        const testSummary = 'sum';
        const employee = new Employee(0, 'name', 'role', testSummary, 'email');
        expect(employee.getSummary()).toEqual(testSummary);
    });
});

// Test Employee.getEmail() method
describe('Employee getEmail', () => {
    it('Should return the email of the object', () => {
        const testEmail = 'johndoe@hotmail.com';
        const employee = new Employee(0, 'name', 'role', 'summary', testEmail);
        expect(employee.getEmail()).toEqual(testEmail);
    });
});