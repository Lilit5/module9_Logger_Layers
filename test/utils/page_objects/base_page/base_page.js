const Header = require('./header');
const Element = require('../base_elements/base_element');
const logger = require('../../../config/general/logger.config');
const EC = protractor.ExpectedConditions;

class BasePage {
    constructor(){
        this.Header = new Header();
        this.loggedInUserName = new Element("Logged In User Name", "xpath", "//div[contains(@class,'admin-user')]");
        this.signOut = new Element("Sign Out", "xpath", "//a[contains(text(),'Sign Out')]");
    };
    wait(waitInMilliseconds) {
        logger.info(`------Waiting "${waitInMilliseconds}" milliseconds`);
        return browser.sleep(waitInMilliseconds);
    };
    waitForElementVisible(selector, miliseconds) {
        logger.info(`------Waiting element "${selector.elementName}" to be visible`);
        return browser.wait(EC.visibilityOf(selector.elem), miliseconds);
    }
    getCurrentUrl() {
        logger.info(`------Getting Current Url`);
        return browser.getCurrentUrl();
    };
    open(url) {
        logger.info(`------Opening "${url}"`);
        return browser.get(url);
    };
    async logOut(){
        logger.info(`---------Logging out`);
        await this.loggedInUserName.click();
        return this.signOut.click();
    }
};

module.exports = BasePage;