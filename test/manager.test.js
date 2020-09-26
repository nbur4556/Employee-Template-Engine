const Manager = require('../lib/manager.js');

// Test Manager object
describe('Manager', () => {
    // Test for variable type
    it('Creating Manager object should initialize officeNumber as a number', () => {
        const m = new Manager(0, 'name', 'summary', 'email', 1);
        expect(typeof (m.officeNumber)).toEqual(Number);
    });
});

// Test Manager.getOfficeNumber() method
describe('Manager getOfficeNumber', () => {
    it('Should return the school of the object', () => {
        const testOfficeNumber = 3;
        const manager = new Manager(0, 'name', 'summary', 'email', testOfficeNumber);
        expect(manager.getOfficeNumber()).toEqual(3);
    });
});

// Test Manager.getRole() method
describe('Manager getRole', () => {
    it('Should return the role of the object', () => {
        const manager = new Manager(0, 'name', 'summary', 'email', 'git-username');
        expect(manager.getRole()).toEqual('manager');
    });
});