import BasePage from "./base.page.js";
import SharedData from "../../support/shared-data.helper.js"
import { goodsPerListNumber } from "../../fixtures/goods-list.data.js";
import { dynamicSelectors, staticSelectors } from "../locators/bedspreads-page.locators.js"

export default class BedspreadsPage extends BasePage {
    async open() {
        return await super.open("catalog/cat-pokryvala-i-pledy-44227577");
    }

    async selectRandomItemOfGoods() {
        await this.waitUntilAllElements(staticSelectors.lstBedspreadItems, goodsPerListNumber.bedspreadsPage);

        const lstBedspreadItems = await this.getStaticElement(staticSelectors.lstBedspreadItems);
        const selectedItem = await this.getRandomElemetOfList(lstBedspreadItems);

        SharedData.currentPrice = await this.getStaticChildElement(selectedItem, staticSelectors.txtCurrentPriceOfItems).innerText();
        SharedData.titleName = await this.getStaticChildElement(selectedItem, staticSelectors.txtTitleNameOfItems).innerText();
        SharedData.titleKit = await this.getStaticChildElement(selectedItem, staticSelectors.txtTitleKitOfItems).innerText();

        await this.jsClickChildOfElementFromList(staticSelectors.lstBedspreadItems, SharedData.indexOfElement, staticSelectors.icoAddToCart);
    }

    async setSizeOfGoods() {
        const lstSizeItems = await this.getStaticElement(staticSelectors.sizesListOfCartModal);
        const randomSizeElement = await this.getRandomElemetOfList(lstSizeItems);
        SharedData.itemSize = await randomSizeElement.innerText();

        const sizeElementClass = await randomSizeElement.getAttribute('class');
        if (await sizeElementClass !== 'options-selector__item options-selector__item--active') {
            await randomSizeElement.click();
        }

        await this.getDynamicElement(dynamicSelectors.btnSelectOfCartModal, 'Выбрать').click();
    }

    async placeAnOrder() {
        await this.getDynamicElement(dynamicSelectors.btnSelectOfCartModal, 'Оформить заказ').click();
    }




}