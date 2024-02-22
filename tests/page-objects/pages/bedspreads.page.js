import BasePage from "./base.page.js";
import SharedData from "../../support/shared-data.helper.js"
import { goodsPerListNumber } from "../../fixtures/goods-list.data.js";
import { dynamicLocators, staticLocators } from "../locators/bedspreads-page.locators.js"

export default class BedspreadsPage extends BasePage {
    relativePath = "catalog/cat-pokryvala-i-pledy-44227577";

    async open() {
        return await super.open(this.relativePath);
    }

    async selectRandomItemOfGoods() {
        await this.waitUntilAllElements(staticLocators.lstBedspreadItems, goodsPerListNumber.bedspreadsPage);

        const lstBedspreadItems = await this.getStaticElement(staticLocators.lstBedspreadItems);
        const selectedItem = await this.getRandomElemetOfList(lstBedspreadItems);

        SharedData.currentPrice = await this.getStaticChildElement(selectedItem, staticLocators.txtCurrentPriceOfItems).innerText();
        SharedData.titleName = await this.getStaticChildElement(selectedItem, staticLocators.txtTitleNameOfItems).innerText();
        SharedData.titleKit = await this.getStaticChildElement(selectedItem, staticLocators.txtTitleKitOfItems).innerText();

        await this.jsClickChildOfElementFromList(staticLocators.lstBedspreadItems, SharedData.indexOfElement, staticLocators.icoAddToCart);
    }

    async setSizeOfGoods() {
        const lstSizeItems = await this.getStaticElement(staticLocators.sizesListOfCartModal);
        const randomSizeElement = await this.getRandomElemetOfList(lstSizeItems);
        SharedData.itemSize = await randomSizeElement.innerText();

        const sizeElementClass = await randomSizeElement.getAttribute('class');
        if (await sizeElementClass !== 'options-selector__item options-selector__item--active') {
            await randomSizeElement.click();
        }

        await this.getDynamicElement(dynamicLocators.btnSelectOfCartModal, 'Выбрать').click();
    }

    async placeAnOrder() {
        await this.getDynamicElement(dynamicLocators.btnSelectOfCartModal, 'Оформить заказ').click();
    }




}