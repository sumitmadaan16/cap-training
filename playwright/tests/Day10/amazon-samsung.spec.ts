//! day 11
import { test } from "@playwright/test"

test("samsung_phone" ,async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("samsung s26")
    await page.locator('//input[@type="submit"]').click()
    let price = await page.locator('(//span[@class="a-price-whole"])[1]').textContent()
    console.log('Price of samsung s26: '+ price);
    
})
