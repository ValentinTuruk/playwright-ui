import BasePage from "./base.page.js";
import { staticLocators, dynamicLocators } from '../locators/home-page.locators.js'

export default class HomePage extends BasePage {
    relativePath = "";

    async open() {
        return await super.open(this.relativePath);
    }

    async navigateToCatalogSection(department, subDepartmwnt) {
        await this.getStaticElement(staticLocators.btnCatalog).click();
        await this.getDynamicElement(dynamicLocators.lblDepartmentOfCatalog, department).hover();
        await this.getDynamicElement(dynamicLocators.lblSubDepartmentOfCatalog, subDepartmwnt).click();
    }
}
