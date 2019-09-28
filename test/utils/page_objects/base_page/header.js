const Element = require("../base_elements/base_element");
const logger = require('../../../config/general/logger.config');

class Header {
    constructor() {
        this.catalogButton = new Element("Catalog", "css","#menu-magento-catalog-catalog");
        this.productsButton = new Element("Products", "xpath", "//li[@data-ui-id='menu-magento-catalog-inventory']//span[contains(text(),'Products')]//..");
    };
    async openProductsPage() {
        logger.info(`---------Navigating to products page`);
        await this.catalogButton.click();
        return this.productsButton.click();
    };
};

module.exports = Header;