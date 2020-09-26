const Engineer = require('../lib/engineer.js');

// Test Engineer object
describe('Engineer', () => {
    // Test for variable type
    it('Creating Engineer object should initialize gitUsername as a string', () => {
        const engineer = new Engineer(0, 'name', 'summary', 'email', 'git-username');
        expect(engineer.gitUsername).toEqual(typeof String);
    });
});

// Test Engineer.getGithubUsername() method
describe('Engineer getGithubUsername', () => {
    it('Should return the githubUsername of the object', () => {
        const testGithubUsername = 'newuser1234';
        const engineer = new Engineer(0, 'name', 'summary', 'email', testGithubUsername);
        expect(engineer.getGithubUsername()).toEqual('newuser1234');
    });
});

// Test Engineer.getRole() method
describe('Engineer getRole', () => {
    it('Should return the role of the object', () => {
        const engineer = new Engineer(0, 'name', 'summary', 'email', 'git-username');
        expect(engineer.getRole()).toEqual('engineer');
    });
});