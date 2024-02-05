import { By, until, Builder } from "selenium-webdriver";
import selenium from "selenium-webdriver";
import "dotenv/config";

const username = process.env.LT_USERNAME;
const accessKey = process.env.LT_ACCESS_KEY;

var remoteHub = "https://" + username + ":" + accessKey + "@hub.lambdatest.com/wd/hub";

const chromeWindowsCapability = {
	"browserName": "Chrome",
	"browserVersion": "121.0",
	"LT:Options": {
		"username": username,
		"accessKey": accessKey,
		"platformName": "Windows 10",
		"build": "MochaSelenium",
		"project": "MochaSeleniumTests",
		"name": "E-Commerce Site Automated Tests",
		"selenium_version": "4.17.0",
		"w3c": true,
		"plugin": "node_js-node_js"
	}
}

const getElementById = async (driver, id, timeout = 8000) => {
  const el = await driver.wait(until.elementLocated(By.id(id)), timeout);
  return await driver.wait(until.elementIsVisible(el), timeout);
};

const getElementByXpath = async (driver, xpath, timeout = 8000) => {
  const el = await driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
  return await driver.wait(until.elementIsVisible(el), timeout);
};

const seleniumDriver = new selenium.Builder()
  .usingServer(remoteHub)
  .withCapabilities(chromeWindowsCapability)
  .build();

class Main {
  constructor() {
    this.driver = seleniumDriver;
    this.byId = getElementById;
    this.byXpath = getElementByXpath;
  }

  async quitB() {
    await this.driver.quit();
  }
}

export default Main;
