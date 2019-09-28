const logger = require('../../../config/general/logger.config');

class Collection {
    constructor(elementName, selectorType, selector) {
        this.elementName = elementName;
        switch(selectorType){
            case "css":
                this.collection = element.all(by.css(selector));
            case "xpath":
                this.collection = element.all(by.xpath(selector));
            default:
                this.collection = element.all(by.xpath(selector));
        }    
    }
    async getCount() {
        const collectionCount = await this.collection.count();
        logger.info(`Count of "${this.elementName}" is "${collectionCount}"`); 
        return collectionCount;
    };
};

module.exports = Collection;