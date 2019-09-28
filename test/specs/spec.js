const PageFactory = require("../utils/page_objects/pageFactory");
const EC = protractor.ExpectedConditions;

const BasePage = PageFactory.getPage();
const LoginPage = PageFactory.getPage("Login");
const ProductEditPage = PageFactory.getPage("Product Edit");
const ProductsGridPage = PageFactory.getPage("Products Grid");

async function createProduct(prodName, prodPrice) {
    await PageFactory.getPage().Header.openProductsPage();
    await ProductsGridPage.createSimpleProduct();
    return ProductEditPage.fillProductForm(prodName, prodPrice);
}

describe('magento login-logout', function() {
    beforeEach(async function() {
        return browser.ignoreSynchronization=true;
    });

    it('should login successfully', async function() {
        await LoginPage.loginAsAdmin('admin', 'lilit1234');
        expect(LoginPage.getCurrentUrl()).toEqual(LoginPage.loggedInUrl);
      });

      it('should logout successfully', async function(){
        await BasePage.logOut();
        expect(BasePage.getCurrentUrl()).toEqual("http://magento.loc/admin/admin/");
   });
});

describe('magento', function() {    

    beforeEach(async function() {
        await LoginPage.loginAsAdmin('admin', 'lilit1234');
        return browser.ignoreSynchronization=true;
    });
    
    it('should create simple product',async function() {
        await createProduct("simple_product", "123");
        await browser.executeScript('window.scrollTo(0, 0)');
        await ProductEditPage.waitForElementVisible(ProductEditPage.productNameLable, 5000);
        await ProductEditPage.productNameLable.highlightWithJS();
        await ProductsGridPage.open();
        await ProductsGridPage.waitForElementVisible(ProductsGridPage.productInGrid, 5000);
        expect(ProductsGridPage.createdProducts.getCount()).toBeGreaterThan(1);
    });

    afterEach(async function() {
        return BasePage.logOut();
    });
});