const Engineer = require('../lib/engineer.js');

// Test Engineer object
describe('Engineer', () => {
    it('Can instantiate Engineer instance', () => {
        const e = new Engineer();
        expect(typeof (e)).toBe('object');
    });

    // Test for variable type
    it('Creating Engineer object should initialize gitUsername as a string', () => {
        const e = new Engineer(0, 'name', 'summary', 'email', 'git-username');
        expect(typeof (e.gitUsername)).toEqual('string');
    });
});

// Test Engineer.getGithubUsername() method
describe('Engineer getGithubUsername', () => {
    it('Should return the githubUsername of the object', () => {
        const testGithubUsername = 'newuser1234';
        const engineer = new Engineer(0, 'name', 'summary', 'email', testGithubUsername);
        expect(engineer.getGithubUsername()).toEqual(testGithubUsername);
    });
});

// Test Engineer.getRole() method
describe('Engineer getRole', () => {
    it('Should return the role of the object', () => {
        const engineer = new Engineer(0, 'name', 'summary', 'email', 'git-username');
        expect(engineer.getRole()).toEqual('engineer');
    });
});