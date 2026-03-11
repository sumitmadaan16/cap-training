import {test} from '@playwright/test'

test("getByTestId", async({page}) =>{
    await page.goto("https://www.saucedemo.com")
    await page.getByTestId("username").fill("standard_user") //? added in use in playwright.config.js
    
})