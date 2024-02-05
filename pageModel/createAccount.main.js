import Main from "./main.js"

const signupUrl = "https://ecommerce-playground.lambdatest.io/index.php?route=account/register";

class SignupPage extends Main {
  constructor() {
    super();
    this.url = signupUrl;

    this.firstNameInput = "input-firstname";
    this.lastNameInput = "input-lastname";
    this.emailInput = "input-email";
    this.telephoneInput = "input-telephone";
    this.passwordInput = "input-password";
    this.confirmPasswordInput = "input-confirm";
    this.agreePolicyBtn = '//label[@for="input-agree"]';
    this.submitButton = '//input[@value="Continue"]';
    this.successMessageText = '//h1[@class="page-title my-3"]';
  }

  async openSignupPage() {
    await this.driver.get(this.url);
  }

  async createAccount() {
    const userFirstName = await this.byId(this.driver, this.firstNameInput);
    await userFirstName.sendKeys("Joel");

    const userLastName = await this.byId(this.driver, this.lastNameInput);
    await userLastName.sendKeys("Doe");

    const userEmail = await this.byId(this.driver, this.emailInput);
    await userEmail.sendKeys("joeldoe4@example.com");

    const userTelephone = await this.byId(this.driver, this.telephoneInput);
    await userTelephone.sendKeys("0712345678");

    const userPassword = await this.byId(this.driver, this.passwordInput);
    await userPassword.sendKeys("12345");

    const userPasswordConfirm = await this.byId(this.driver, this.confirmPasswordInput);
    await userPasswordConfirm.sendKeys("12345");

    const agreePlolicyBtn = await this.byXpath(this.driver, this.agreePolicyBtn);
    await agreePlolicyBtn.click();

    const submitBtn = await this.byXpath(this.driver, this.submitButton);
    await submitBtn.click();
  }

  async successMessageTxt() {
    let successMessageElement = await this.byXpath(this.driver,this.successMessageText);
    return await successMessageElement.getText();
  }
}

export default SignupPage;