const logger = require('../../../config/general/logger.config');
const EC = protractor.ExpectedConditions;

class Element {
    constructor(elementName, selectorType, selector) {
        this.elementName = elementName;
        switch(selectorType){
            case "css":
                this.elem = element(by.css(selector));
                break;
            case "xpath":
                this.elem = element(by.xpath(selector));
                break;
            default:
                this.elem = element(by.xpath(selector));
        }    
    }
    async click() {
        await browser.wait(EC.visibilityOf(this.elem), 3000);
        logger.info(`Clicking "${this.elementName}"`);
        return await browser.actions().click(this.elem).perform();
    };
    sendKeys(keysToSend) {
        logger.info(`Sending keys to "${this.elementName}"`);
        return this.elem.sendKeys(keysToSend);
    }

    async highlightWithJS() {
        logger.info(`Highlighting "${this.elementName}"`);
        const bg = await this.elem.getCssValue("backgroundColor");
        await browser.executeScript("arguments[0].style.backgroundColor = '" + "yellow" + "'", this.elem);
        await browser.sleep(2000); //wait to see if highlight works
        await browser.executeScript("arguments[0].style.backgroundColor = '" + bg + "'", this.elem);
        return browser.sleep(1000);
    }
};

module.exports = Element;