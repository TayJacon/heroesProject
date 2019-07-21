const Locators = require('../Common/locators');

class ListPage {

    constructor() {
        this.path = '/#/personagens/lista';
        this.locator = new Locators();
    }

    go() {        
        browser.get(this.path);
    }

    async newButton() {
        await this.locator.newButton.click();
    }

    searchHeroe(name) {
        this.locator.searchField.sendKeys(name);
    }

    async getResult() {
        return await browser.executeScript("document.querySelector('tbody').textContent");
    }
}
module.exports = ListPage;