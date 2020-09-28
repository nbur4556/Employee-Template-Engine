const CardWriter = require('../lib/card-writer.js');
const Engineer = require('../lib/engineer.js');
const Intern = require('../lib/intern.js');
const Manager = require('../lib/manager.js');

describe('Card Writer', () => {
    it('Can initialize instance of card writer object.', () => {
        const cardWriter = new CardWriter();
        expect(typeof (cardWriter)).toBe('object');
    });
    it('Initalizing card writer object with string parameter sets template', () => {
        let str = "Testing"
        const cardWriter = new CardWriter(str);
        expect(cardWriter.template).toEqual(str);
    });
});

describe('Card Writer getTemplate', () => {
    it('Get template method returns card writer template', () => {
        let str = "Testing"
        const cardWriter = new CardWriter(str);
        expect(cardWriter.getTemplate()).toEqual(str);
    });
});

describe('Card Writer replaceFields', () => {
    // Engineer Tests
    const engineer = new Engineer(0, 'john doe', 'summary', 'email', 'github name');

    it('Replace fields method with engineer object will replace !NAME in template', () => {
        let str = 'Replace !NAME';
        let res = `Replace ${engineer.getName()}`;
        const cardWriter = new CardWriter(str);
        cardWriter.replaceFields(engineer);

        expect(cardWriter.getCardText()).toEqual(res);
    });
    it('Replace fields method with engineer object will replace !ROLE in template', () => {
        let str = 'Replace !ROLE';
        let res = `Replace ${engineer.getRole()}`;
        const cardWriter = new CardWriter(str);
        cardWriter.replaceFields(engineer);

        expect(cardWriter.getCardText()).toEqual(res);
    });
    it('Replace fields method with engineer object will replace !ID in template', () => {
        let str = 'Replace !ID';
        let res = `Replace ${engineer.getId()}`;
        const cardWriter = new CardWriter(str);
        cardWriter.replaceFields(engineer);

        expect(cardWriter.getCardText()).toEqual(res);
    });
    it('Replace fields method with engineer object will replace !EMAIL in template', () => {
        let str = 'Replace !EMAIL';
        let res = `Replace ${engineer.getEmail()}`;
        const cardWriter = new CardWriter(str);
        cardWriter.replaceFields(engineer);

        expect(cardWriter.getCardText()).toEqual(res);
    });
    it('Replace fields method with engineer object will replace !OTHER in template', () => {
        let str = 'Replace !OTHER';
        let res = `Replace ${engineer.getGithubUsername()}`;
        const cardWriter = new CardWriter(str);
        cardWriter.replaceFields(engineer);

        expect(cardWriter.getCardText()).toEqual(res);
    });

    // Intern Tests
    const intern = new Intern(0, 'john doe', 'summary', 'email', 'college high');

    xit('Replace fields method with intern object will replace !NAME in template', () => {

    });
    xit('Replace fields method with intern object will replace !ROLE in template', () => {

    });
    xit('Replace fields method with intern object will replace !ID in template', () => {

    });
    xit('Replace fields method with intern object will replace !EMAIL in template', () => {

    });
    xit('Replace fields method with intern object will replace !OTHER in template', () => {

    });

    // Manager Tests
    xit('Replace fields method with manager object will replace !NAME in template', () => {

    });
    xit('Replace fields method with manager object will replace !ROLE in template', () => {

    });
    xit('Replace fields method with manager object will replace !ID in template', () => {

    });
    xit('Replace fields method with manager object will replace !EMAIL in template', () => {

    });
    xit('Replace fields method with manager object will replace !OTHER in template', () => {

    });
});                                                                                     