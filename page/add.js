const Locators = require('../Common/locators');
const Path = '../lib/heroes.png'

class AddPage {

    constructor() {
        this.path = '/#/personagens/criar';
        this.locator = new Locators();
        this.heroIamge = Path;
    }

    go() {
        browser.get(this.path);
    }

    saveButton() {
        browser.executeScript("window.scrollTo(0,document.body.scrollHeight);");
        this.locator.saveButton.click();
    }

    async fillForm(name) {
        await this.locator.name.sendKeys(name);
        await this.selectSpecoalities();
        await this.selectClass();
        await this.locator.health.sendKeys(this.generateNumber());
        await this.locator.defense.sendKeys(this.generateNumber());
        await this.locator.damage.sendKeys(this.generateNumber());
        await this.locator.attack.sendKeys(this.generateNumber());
        await this.locator.movement.sendKeys(this.generateNumber());
    }

    async generateNumber() {
        return await Math.floor((Math.random() * 100) + 1);
    }

    async selectSpecoalities() {
        this.locator.specialties.click();
        var number = await this.locator.specialtiesOptions.count();
        await this.locator.specialtiesOptions.get(await Math.floor((Math.random() * number) + 1)).click();
        
    }

    async selectClass() {
        this.locator.heroesClass.click();
        var number = await this.locator.classOptions.count();
        await this.locator.classOptions.get(await Math.floor((Math.random() * number) + 1)).click();
    }
}
module.exports = AddPage;