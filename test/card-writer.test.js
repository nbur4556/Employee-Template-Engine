const CardWriter = require('../lib/card-writer.js');
const Engineer = require('../lib/engineer.js');
const Intern = require('../lib/intern.js');
const Manager = require('../lib/manager.js');

describe("Card Writer", () => {
    it('Can initialize instance of card writer object.', () => {
        cardWriter = new CardWriter();
        expect(typeof (cardWriter)).toBe('object');
    });
    it('Initalizing card writer object with string parameter sets template', () => {
        let str = "Testing"
        cardWriter = new CardWriter(str);
        expect(cardWriter.template).toEqual(str);
    });
});

describe('Card Writer getTemplate', () => {
    it('Get template method returns card writer template', () => {
        let str = "Testing"
        cardWriter = new CardWriter(str);
        expect(cardWriter.getTemplate()).toEqual(str);
    })
});