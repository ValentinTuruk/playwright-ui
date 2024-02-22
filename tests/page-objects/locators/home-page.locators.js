export const staticSelectors = {
    btnCatalog: "//button[contains(@class, 'catalog-button')]",
}

export const dynamicSelectors = {
    lblDepartmentOfCatalog: "//a[contains(@class, 'drop-menu__link--catalog')]/span[contains(text(), '{0}')]",
    lblSubDepartmentOfCatalog: "//p[@class='drop-menu__header' and contains(text(), 'По категориям')]/parent::div//span[contains(text(), '{0}')]",
}