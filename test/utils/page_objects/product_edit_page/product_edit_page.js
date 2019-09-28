const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const logger = require('../../../config/general/logger.config');


class ProductEditPage extends BasePage {
    constructor() {
        super();
        this.productName = new Element("Product Name", "xpath", "//input[@name='product[name]']");
        this.productPrice = new Element("Product Price", "xpath", "//input[@name='product[price]']");
        this.saveButton = new Element("Save", "css", "#save-button");
        this.productNameLable = new Element("Product Name Label", "xpath", "//h1[contains(text(),'simple_product')]");
    };
    async fillProductForm (prodName, prodPrice) {
        logger.info(`---------Filling Product Form`);
        await super.waitForElementVisible(this.productName, 3000);
        await this.productName.sendKeys(prodName);
        await this.productPrice.sendKeys(prodPrice);
        return this.saveButton.click();
    };
};

module.exports = ProductEditPage;