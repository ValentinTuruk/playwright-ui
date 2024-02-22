export const staticSelectors = {
    lstBedspreadItems: ".product-card__content",
    txtCurrentPriceOfItems: "//span[contains(@class, 'price-current')]",
    txtTitleNameOfItems: "//div[contains(@class, 'title-name')]",
    txtTitleKitOfItems: "//div[contains(@class, 'title-kit')]",
    icoAddToCart: ".product-cart-description__buy",
    sizesListOfCartModal: "//ul[contains(@class, 'options-selector__list')]/li",
}

export const dynamicSelectors = {
    btnSelectOfCartModal: "//button[contains(text(), '{0}')]",
    btnGoToCartOfCartModal: "//button[contains(text(), '{0}')]"
}