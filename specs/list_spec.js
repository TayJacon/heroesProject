const Locators = require('../Common/locators');
const List = require('../Page/list');

describe('List', () => {
    const locator = new Locators;
    const list = new List();

    beforeEach(async() => {
        // list.go();
        await browser.get('/')
        
    })

    it('Access register page', async () => {
        await list.newButton();

        expect(browser.getCurrentUrl()).toContain('/criar');
    })

    it('Search registered hero', async () => {
        await list.searchHeroe('Dartan');
        var result = await list.getResult();

        expect(result).not.toContain('Não há resultado com o valor');
    })

    it('Search not registered hero', async () => {
        await list.searchHeroe('noHeroe');
        var result = await list.getResult();
        
        expect(result).toContain('Não há resultado com o valor');
    })
})