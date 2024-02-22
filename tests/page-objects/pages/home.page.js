import BasePage from "./base.page.js";
import { staticSelectors, dynamicSelectors } from '../locators/home-page.locators.js'

export default class HomePage extends BasePage {
    async open() {
        return await super.open("");
    }

    async navigateToCatalogSection(department, subDepartmwnt) {
        await this.getStaticElement(staticSelectors.btnCatalog).click();
        await this.getDynamicElement(dynamicSelectors.lblDepartmentOfCatalog, department).hover();
        await this.getDynamicElement(dynamicSelectors.lblSubDepartmentOfCatalog, subDepartmwnt).click();
    }
}
