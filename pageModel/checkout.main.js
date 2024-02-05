import Main from "./main.js";

const checkoutUrl = "https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart";

class Checkout extends Main {
  constructor() {
    super();
    this.url = checkoutUrl;

    this.checkOutBtn = '//a[@class="btn btn-lg btn-primary"]';
    this.guestCheckOut = "//label[@for='input-account-guest']";
    this.firstName = "input-payment-firstname";
    this.lastName = "input-payment-lastname";
    this.email = "input-payment-email";
    this.telephone = "input-payment-telephone";
    this.company = "input-payment-company";
    this.address = "input-payment-address-1";
    this.city = "input-payment-city";
    this.postCode = "input-payment-postcode";
    this.country = "input-payment-country";
    this.zone = "input-payment-zone";
    this.agreeTerms = "//label[@for='input-agree']";
    this.continueBtn = "//button[@id='button-save']";
    this.confirmBtn = "button-confirm";
    this.orderPlacedMessage = "//h1[@class='page-title my-3']";
  }

  async openCart() {
    await this.driver.get(this.url);
  }

  async checkOut() {
    const checkOutBtn = await this.byXpath(this.driver, this.checkOutBtn);
    await checkOutBtn.click();

    const firstName = await this.byId(this.driver, this.firstName);
    await firstName.sendKeys("Joel");

    const lastName = await this.byId(this.driver, this.lastName);
    await lastName.sendKeys("Doe");

    const company = await this.byId(this.driver, this.company);
    await company.sendKeys("JDoe");

    const address = await this.byId(this.driver, this.address);
    await address.sendKeys("Road Street");

    const city = await this.byId(this.driver, this.city);
    await city.sendKeys("Nairobi");

    const postCode = await this.byId(this.driver, this.postCode);
    await postCode.sendKeys("50500");

    const agreeTerms = await this.byXpath(this.driver, this.agreeTerms);
    await this.driver.executeScript("arguments[0].click();", agreeTerms);

    const continueBtn = await this.byXpath(this.driver, this.continueBtn);
    await continueBtn.click();

    const confirmBtn = await this.byId(this.driver, this.confirmBtn);
    await confirmBtn.click();
  }

  async confirmOrderText() {
    let confirmMessageElement = await this.byXpath(
      this.driver,
      this.orderPlacedMessage
    );
    return await confirmMessageElement.getText();
  }
}

export default Checkout;