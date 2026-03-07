import {test} from '@playwright/test'

//! finding name and price in one xpath
test("oneXpath", async({page}) =>{
    await page.goto("https://www.amazon.in")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("phones")
    await page.locator('//input[@type="submit"]').click()
    const details = await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]/child::span | //span[@class="a-price-whole"]').allTextContents();
    console.log("Name and Price:", details);
})