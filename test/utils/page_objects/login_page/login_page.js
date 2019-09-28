const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const logger = require('../../../config/general/logger.config');


class LoginPage extends BasePage {
    constructor() {
        super();
        this.userName = new Element("User Name", "css", "#username");
        this.password = new Element("Password", "css", "#login");
        this.signIn = new Element("Sign In", "css", ".actions .action-primary");
        this.loggedInUrl = "http://magento.loc/admin/admin/dashboard/"
    };
    open() {
        logger.info(`---------Opening Login Page`);
        return super.open("http://magento.loc/admin/login");
    };
    async loginAsAdmin(userName, password) {
        logger.info(`---------Logging In as "${userName}"`);
        await super.open(this.loggedInUrl);
        const url = await super.getCurrentUrl();
        if (url != this.loggedInUrl) {
            await this.open();
            await this.userName.sendKeys(userName);
            await this.password.sendKeys(password);
            return this.signIn.click();     
        }
    }
};

module.exports = LoginPage;