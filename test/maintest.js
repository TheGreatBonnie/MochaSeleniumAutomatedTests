import { expect } from "chai";
import { describe, it } from "mocha";
import Main from "../pageModel/main.js";
import SignupPage from "../pageModel/createAccount.main.js";
import AddToCart from "../pageModel/addToCart.main.js";
import Checkout from "../pageModel/checkout.main.js";

describe("E-Commerce Site Automated Tests", function () {
  this.timeout(80000);

  let driver;
  let mainPage;
  let createAccountPage;
  let addToCartPage;
  let checkoutPage;

  before(async function () {
    driver = this.driver;
    mainPage = new Main(driver);
    createAccountPage = new SignupPage(driver);
    addToCartPage = new AddToCart(driver);
    checkoutPage = new Checkout(driver);
  });

  it("Should signup and create a user account", async function () {
    await createAccountPage.openSignupPage();
    await createAccountPage.createAccount();
    expect(await createAccountPage.successMessageTxt()).to.include(
      "Your Account Has Been Created!"
    );
  });

  it("Should add item to cart successfully", async function () {
    await addToCartPage.openEcomSite();
    await addToCartPage.addToCart();
    expect(await addToCartPage.getPhoneText()).to.include("iPhone");
  });

  it("Should checkout items added to cart successfully", async function () {
    await checkoutPage.openCart();
    await checkoutPage.checkOut();
    expect(await checkoutPage.confirmOrderText()).to.include(
      "Your order has been placed!"
    );
  });

  after(async function () {
    mainPage.quitB();
  });
});
