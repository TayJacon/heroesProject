const Locators = require('../Common/locators');
const Add = require('../Page/add');

describe('Add new heroe', () => {
    const locator = new Locators;
    const add = new Add();

    beforeEach(async () => {
        await browser.get('/')
        await add.go();
    })

    it('Submit empty form', async () => {
        await add.saveButton();

        expect(locator.saveModal.getText()).toEqual('Erro ao tentar salvar herói');
    })

    it('Submit form with valid dates', async () => {
        await add.fillForm('Aut');
        await add.saveButton();

        expect(browser.getCurrentUrl()).toContain('/lista');
    })
})