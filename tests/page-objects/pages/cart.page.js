import BasePage from "./base.page.js";
import SharedData from "../../support/shared-data.helper.js"
import { staticLocators } from "../locators/cart-page.locators.js"
import { expect } from "@playwright/test";

export default class CartPage extends BasePage {
    relativePath = "cart";

    async open() {
        return await super.open(this.relativePath);
    }

    async verifyPriceOfItem() {
        const actualPrice = await this.getStaticElement(staticLocators.txtPrice).innerText();
        console.log(await actualPrice);
        const actualPriceFormated = await actualPrice.match(/\d+\.\d+\sBYN/)[0];
        expect(actualPriceFormated).toBe(SharedData.currentPrice);
    }

    async verifyTitleNameOfItem() {
        const actualTitleName = await this.getStaticElement(staticLocators.txtGoodsTitleName).innerText();
        expect(actualTitleName).toBe(SharedData.titleName);
    }

    async verifyTitleKitOfItem() {
        const actualTitleKit = await this.getStaticElement(staticLocators.txtGoodsTitleKit).innerText();
        expect(actualTitleKit).toBe(SharedData.titleKit);
    }

    async verifySizeOfItem() {
        const actualSize = await this.getStaticElement(staticLocators.txtGoodsSize).innerText();
        const actualSizeFormated = await actualSize.split(" ")[1];
        expect(actualSizeFormated).toBe(SharedData.itemSize);
    }
    // TODO: "Size" flow should be changed (several size types are possible)
    async verifyFullDataOfItem() {
        await this.verifyPriceOfItem();
        await this.verifyTitleNameOfItem();
        await this.verifyTitleKitOfItem();
        // await this.verifySizeOfItem();
    }
}