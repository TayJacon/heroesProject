const Locators = require('../Common/locators');
const Add = require('../Page/add');

describe('Add new heroe', () => {
    const locator = new Locators;
    const add = new Add();

    beforeEach(() => {
        add.go();
    })

    it('Submit empty form', () => {
        add.saveButton();

        expect(locator.saveModal.getText()).toEqual('Erro ao tentar salvar herói');
    })

    it('Submit form with valid dates', () => {
        add.fillForm('Aut');
        add.saveButton();

        expect(browser.getCurrentUrl()).toContain('/lista');
    })
})