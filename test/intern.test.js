const Intern = require('../lib/intern.js');

// Test Intern object
describe('Intern', () => {
    it('Can instantiate Intern instance', () => {
        const i = new Intern();
        expect(typeof (i)).toBe('object');
    });

    // Test for variable type
    it('Creating Intern object should initialize school as a string', () => {
        const i = new Intern(0, 'name', 'summary', 'email', 'school');
        expect(typeof (i.school)).toEqual('string');
    });
});

// Test Intern.getSchool() method
describe('Intern getSchool', () => {
    it('Should return the school of the object', () => {
        const testSchool = 'jr high school';
        const intern = new Intern(0, 'name', 'summary', 'email', testSchool);
        expect(intern.getSchool()).toEqual(testSchool);
    });
});

// Test Intern.getRole() method
describe('Intern getRole', () => {
    it('Should return the role of the object', () => {
        const intern = new Intern(0, 'name', 'summary', 'email', 'git-username');
        expect(intern.getRole()).toEqual('Intern');
    });
});