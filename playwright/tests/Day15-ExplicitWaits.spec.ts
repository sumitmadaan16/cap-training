import {test, expect} from '@playwright/test'
import { log } from 'console'

test("waitFor - states" , async({page})=>{
    await page.goto("https://www.amazon.com")
    //? here timeout and state are optional attributes in waitfor method
    //? timeout waits until 20sec to load and state has 4 states which are visible, attached, detached, and hidden -> all these refers to DOM 
    //? if we give both state and timeout and state, state is given priority this timeout is not given any priority
    await page.getByTestId("y9b56g-mmtfgb-fhmyek-fkh5wp").waitFor({ state:"detached"})
    await page.getByTestId("y9b56g-mmtfgb-fhmyek-fkh5wp").click()
})

//? we will not use page fixtue as page fixture keeps the controlor in the same tab only
test.only(" waitFor - navigation" , async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.flipkart.com")
    await page.getByRole("button" ,{name:'✕'}).click()
    await page.getByPlaceholder("Search for Products, Brands and More").first().fill("shoes")
    await page.keyboard.press("Enter")
    let [page2] = await Promise.all([
        context.waitForEvent("page"),
        page.locator('//a[@class="CIaYa1"]').first().click()
    ])
    // await page2.waitForLoadState()
    console.log(await page.url());
    console.log(await page2.url());
})