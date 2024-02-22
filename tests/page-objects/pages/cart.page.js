import BasePage from "./base.page.js";
import SharedData from "../../support/shared-data.helper.js"
import { staticSelectors } from "../locators/cart-page.locators.js"
import { expect } from "@playwright/test";

export default class CartPage extends BasePage {
    async open() {
        return await super.open("cart");
    }

    async verifyPriceOfItem() {
        const actualPrice = await this.getStaticElement(staticSelectors.txtPrice).innerText();
        const actualPriceFormated = await actualPrice.match(/\d+\.\d+\sBYN/)[0];
        expect(actualPriceFormated).toBe(SharedData.currentPrice);
    }

    async verifyTitleNameOfItem() {
        const actualTitleName = await this.getStaticElement(staticSelectors.txtGoodsTitleName).innerText();
        expect(actualTitleName).toBe(SharedData.titleName);
    }

    async verifyTitleKitOfItem() {
        const actualTitleKit = await this.getStaticElement(staticSelectors.txtGoodsTitleKit).innerText();
        expect(actualTitleKit).toBe(SharedData.titleKit);
    }

    async verifySizeOfItem() {
        const actualSize = await this.getStaticElement(staticSelectors.txtGoodsSize).innerText();
        const actualSizeFormated = await actualSize.split(" ")[1];
        expect(actualSizeFormated).toBe(SharedData.itemSize);
    }

    async verifyFullDataOfItem() {
        await this.verifyPriceOfItem();
        await this.verifyTitleNameOfItem();
        await this.verifyTitleKitOfItem();
        await this.verifySizeOfItem();
    }
}