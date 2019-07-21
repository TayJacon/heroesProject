/* 
 * A list of locators that can be use on project
 */

class Locators {
    constructor() {
    this.buttons = element.all(by.css('.toolbar__link'))
    this.name = element(by.name('name'))
    this.specialties = element.all(by.css('.v-select__selections')).get(0)
    this.heroesClass = element.all(by.css('.v-select__selections')).get(1)
    this.health = element(by.name('health_points'))
    this.defense = element(by.name('defense'))
    this.damage = element(by.name('damage'))
    this.attack = element(by.name('attack_speed'))
    this.movement = element(by.name('movement_speed'))
    this.gallery = element(by.css('.gallery__dropbox-input-file'))
    this.saveButton = element(by.css('.action__button-save'))
    this.saveModal = element(by.css('.swal2-content'))
    this.specialtiesOptions = element.all(by.css('.v-input--selection-controls__ripple'))
    this.classOptions = element.all(by.css('.v-list__tile__title'))
    this.newButton = element(by.css('.search__new'))
    this.searchField = element(by.name('search'))
    }
};
module.exports = Locators;