import { test } from '@playwright/test';
import { qase } from 'playwright-qase-reporter/dist/playwright';
import HomePage from "../page-objects/pages/home.page.js";
import BedspreadsPage from '../page-objects/pages/bedspreads.page.js';
import CartPage from '../page-objects/pages/cart.page.js'

test.describe('Add Goode in Cart', () => {
    test(qase(1, 'Add goods from "Catalog" @regression'), async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();
        await homePage.navigateToCatalogSection("Товары для дома", "Покрывала и пледы");

        const bedspreadsPage = new BedspreadsPage(page);
        await bedspreadsPage.selectRandomItemOfGoods();
        await bedspreadsPage.setSizeOfGoods();
        await bedspreadsPage.placeAnOrder();

        const cart = new CartPage(page);
        await cart.verifyFullDataOfItem();
    });
});