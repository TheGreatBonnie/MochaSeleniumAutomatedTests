import Main from "./main.js";

const ecommerceUrl = "https://ecommerce-playground.lambdatest.io/";

class AddToCart extends Main {
  constructor() {
    super();
    this.url = ecommerceUrl;

    this.categoryButton = '//a[normalize-space()="Shop by Category"]';
    this.phonesCategoryButton = '//span[normalize-space()="Phone, Tablets & Ipod"]';
    this.iPhoneButton = '//div[@class="carousel-item active"]//img[@title="iPhone"]';
    this.addToCartButton = '//div[@id="entry_216842"]//button[@title="Add to Cart"][normalize-space()="Add to Cart"]';
    this.cartButton = '//a[@class="btn btn-primary btn-block"]';
    this.itemNameText = '//td[@class="text-left"]//a[contains(text(),"iPhone")]';
  }

  async openEcomSite() {
    await this.driver.get(this.url);
  }

  async addToCart() {
    const categoryBtn = await this.byXpath(this.driver, this.categoryButton);
    await categoryBtn.click();

    const phonesCategoryBtn = await this.byXpath( this.driver, this.phonesCategoryButton);
    await phonesCategoryBtn.click();

    const iPhoneBtn = await this.byXpath(this.driver, this.iPhoneButton);
    await iPhoneBtn.click();

    const addToCartBtn = await this.byXpath(this.driver, this.addToCartButton);
    await addToCartBtn.click();

    const cartBtn = await this.byXpath(this.driver, this.cartButton);
    await cartBtn.click();
  }

  async getPhoneText() {
    let itemMessageElement = await this.byXpath(this.driver, this.itemNameText);
    return await itemMessageElement.getText();
  }
}

export default AddToCart;