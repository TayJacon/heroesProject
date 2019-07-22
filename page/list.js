const Locators = require('../Common/locators');

class ListPage {

    constructor() {
        this.path = '/#/personagens/lista';
        this.locator = new Locators();
        this.EC = protractor.ExpectedConditions;
    }

    async go() {        
        await browser.get(this.path);
    }

    async newButton() {
        await this.locator.newButton.click();
        browser.waitForAngular();
    }

    searchHeroe(name) {
        this.locator.searchField.sendKeys(name);
    }

    async getResult() {
        await browser.sleep(2000)
        return await this.locator.results.getText();
    }
}
module.exports = ListPage;