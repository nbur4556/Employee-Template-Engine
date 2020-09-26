const Employee = require('../lib/employee.js');

// Test Employee object
describe('Employee', () => {
    // Test for variable type
    it('Creating Employee object should initialize id as a number', () => {
        const e = new Employee(0, 'name', 'role', 'summary', 'email');
        expect(typeof (e.id)).toEqual(Number);
    });
    it('Creating Employee object should initialize name as a string', () => {
        const e = new Employee(0, 'name', 'role', 'summary', 'email');
        expect(typeof (e.name)).toEqual(String);
    });
    it('Creating Employee object should initialize role as a string', () => {
        const e = new Employee(0, 'name', 'role', 'summary', 'email');
        expect(typeof (e.role)).toEqual(String);
    });
    it('Creating Employee object should initialize summary as a string', () => {
        const e = new Employee(0, 'name', 'role', 'summary', 'email');
        expect(typeof (e.summary)).toEqual(String);
    });
    it('Creating Employee object should initialize email as a string', () => {
        const e = new Employee(0, 'name', 'role', 'summary', 'email');
        expect(typeof (e.email)).toEqual(String);
    });
});

// Test Employee.getId() method
describe('Employee getId', () => {
    it('Should return the id of the object', () => {
        const testId = 5;
        const employee = new Employee(testId, 'name', 'role', 'summary', 'email');
        expect(employee.getId()).toEqual(5);
    });
});

// Test Employee.getName() method
describe('Employee getName', () => {
    it('Should return the name of the object', () => {
        const testName = 'John Doe';
        const employee = new Employee(0, testName, 'role', 'summary', 'email');
        expect(employee.getName()).toEqual('John Doe');
    });
});

// Test Employee.getRole() method
describe('Employee getRole', () => {
    it('Should return the role of the object', () => {
        const testRole = 'employee';
        const employee = new Employee(0, 'name', testRole, 'summary', 'email');
        expect(employee.getRole()).toEqual('employee');
    });
});

// Test Employee.getSummary() method
describe('Employee getSummary', () => {
    it('Should return the summary of the object', () => {
        const testSummary = 'sum';
        const employee = new Employee(0, 'name', 'role', testSummary, 'email');
        expect(employee.getSummary()).toEqual('sum');
    });
});

// Test Employee.getEmail() method
describe('Employee getEmail', () => {
    it('Should return the email of the object', () => {
        const testEmail = 'johndoe@hotmail.com';
        const employee = new Employee(0, 'name', 'role', 'summary', testEmail);
        expect(employee.getEmail()).toEqual('johndoe@hotmail.com');
    });
});