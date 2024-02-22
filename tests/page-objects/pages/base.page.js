import 'dotenv/config';
import SharedData from "../../support/shared-data.helper.js"

export default class BasePage {
    constructor(page) {
        this.page = page;
    }

    async open(path) {
        return await this.page.goto(`${process.env.BASE_URL}/${path}`);
    }
    // TODO: move methods below to Element classes
    getStaticElement(locator) {
        return this.page.locator(locator);
    }

    getStaticChildElement(element, locator) {
        return element.locator(locator);
    }

    getDynamicElement(locator, option) {
        return this.page.locator(locator.replace("{0}", option));
    }

    async jsClickChildOfElementFromList(locatorOfParentElemetsList, index, childLocator) {
        await this.page.evaluate(({ locatorOfParentElemetsList, index, childLocator }) => {
            const outerElement = document.querySelectorAll(locatorOfParentElemetsList)[index];
            const innerElement = outerElement.querySelector(childLocator);
            if (innerElement) {
                innerElement.click();
            }
        }, { locatorOfParentElemetsList, index, childLocator });
    }

    async getRandomElemetOfList(listOfElement) {
        const randomIndex = Math.floor(Math.random() * await listOfElement.count());
        SharedData.indexOfElement = randomIndex;
        return await listOfElement.nth(randomIndex);
    }

    async waitUntilAllElements(staticLocator, number) {
        const lastElement = await this.getStaticElement(staticLocator).nth(number - 1);
        await lastElement.waitFor({ state: 'attached' });
    }
}