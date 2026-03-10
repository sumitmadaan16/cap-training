import {test} from '@playwright/test'

test("keyboard Actions" , async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/login")
    await page.getByText("Email Id").fill("student123@gmail.com")
    await page.keyboard.press("Meta+A")
    let pass = await page.keyboard.press("Meta+C")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Meta+V")
    await page.getByRole("button" , {name:"Login"})
    await page.keyboard.down("Enter")
    await page.keyboard.up("Enter")
})