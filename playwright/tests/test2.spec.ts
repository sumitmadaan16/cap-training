import {test} from "@playwright/test"
import { log } from "node:console"

//! fixtures --> it is a setup block of code which is reusable

/**
 * types of fixtures
 * 
 * 1. page
 * 2. context
 * 3. browser
 * 4. browserName
 * 5. request
 */
//?goto by page fixture syntax 

// test("title1", async({page}) => {
// await page.goto("https://www.amazon.in")
// await page.locator("input#twotabsearchtextbox").fill("shoes")
// })

//?broser fixture , hierarchy browser->context->page
// test("title", async({browser}) => {
//     let context = await browser.newContext()
//     let page = await context.newPage()
//     await page.goto("https://www.amazon.in")
//     await page.locator("input#twotabsearchtextbox").fill("shoes")
// })

//? context
// test("title", async({context}) => {
//     let page = await context.newPage()
//     await page.goto("https://www.amazon.in")
//     await page.locator("input#twotabsearchtextbox").fill("shoes")
// })

//? browserName
// test("title", async({browser, browserName}) => {
//     let context = await browser.newContext()

//     let page = await context.newPage()
//     await page.goto("https://www.amazon.in")
//     await page.locator("input#twotabsearchtextbox").fill("shoes")
//     console.log(browserName);
    
// })

test("title", async({browser}) => {
    let context = await browser.newContext()
    let page = await context.newPage()
    // let page2 = await context.newPage()
    await page.goto("https://www.amazon.in")
    await page.locator("input#twotabsearchtextbox").fill("shoes")
    await page.pause()
    // await page2.goto("https://www.flipkart.com")
    await page.goto("https://www.amazon.in")
    await page.locator("input#twotabsearchtextbox").fill("shoes")
    
})
