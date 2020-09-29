const Manager = require('../lib/manager.js');

// Test Manager object
describe('Manager', () => {
    it('Can instantiate Manager instance', () => {
        const m = new Manager();
        expect(typeof (m)).toBe('object');
    });

    // Test for variable type
    it('Creating Manager object should initialize officeNumber as a number', () => {
        const m = new Manager(0, 'name', 'summary', 'email', 1);
        expect(typeof (m.officeNumber)).toEqual('number');
    });
});

// Test Manager.getOfficeNumber() method
describe('Manager getOfficeNumber', () => {
    it('Should return the school of the object', () => {
        const testOfficeNumber = 3;
        const manager = new Manager(0, 'name', 'summary', 'email', testOfficeNumber);
        expect(manager.getOfficeNumber()).toEqual(testOfficeNumber);
    });
});

// Test Manager.getRole() method
describe('Manager getRole', () => {
    it('Should return the role of the object', () => {
        const manager = new Manager(0, 'name', 'summary', 'email', 'git-username');
        expect(manager.getRole()).toEqual('Manager');
    });
});