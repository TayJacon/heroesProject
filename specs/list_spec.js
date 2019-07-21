const Locators = require('../Common/locators');
const List = require('../Page/list');

describe('List', () => {
    const locator = new Locators;
    const list = new List();

    beforeEach(() => {
        list.go();
    })

    it('Access register page', async () => {
        await list.newButton();

        expect(browser.getCurrentUrl()).toContain('/criar');
    })

    it('Search not registered hero', () => {
        list.searchHeroe('noHeroe');
        var result = list.getResult();

        expect(result).toContain('No matching records found');
    })

    it('Search registered hero', () => {
        list.searchHeroe('noHeroe');
        var result = list.getResult();

        expect(result).notContain('No matching records found');
    })
})