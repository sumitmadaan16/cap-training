import {test} from '@playwright/test'

test.skip("Mouse action" , async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
    // await page.locator("#btn_a").dblclick()
    await page.locator("#btn_a").click({button:"left" , clickCount:2})
})
test.skip("right click" , async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1")
    await page.locator("#btn_a").click({button:"right"})
})
test.skip("hover" , async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
    await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
})
test.skip("drag and drop" , async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
    await page.locator('//div[@class="cursor-move bg-orange-600 w-36 h-11 p-3 text-white absolute react-draggable"]').hover()
    await page.mouse.down()
    await page.mouse.up()
})
test.skip("click and hold" , async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
    await page.locator('//div[@class="zoom-button "]').hover()
    await page.mouse.down()
    await page.waitForTimeout(3000)
    await page.mouse.up()
})
test.skip("force click" , async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
    // await page.locator('#submit').click({force:true})
    await page.locator('#submit').dispatchEvent("click")
})
test.skip("drag and drop2" , async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    // await page.locator('//div[@class="draggable" and text()="Mobile Charger"]').hover()
    // await page.mouse.down()
    // await page.locator('//section[@class="w-[50%] flex flex-col gap-4 shadow-md rounded-md"]/child::div').first().hover()
    // await page.mouse.up()

//? dragto
    await page.getByText('Mobile Charger').dragTo(page.getByText('Mobile Accessories'))
    await page.getByText('Laptop Charger').dragTo(page.getByText('Laptop Accessories'))
    await page.getByText('Mobile Cover').dragTo(page.getByText('Mobile Accessories'))
    await page.getByText('Laptop Cover').dragTo(page.getByText('Laptop Accessories'))
})
test.skip("scroll" , async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/scroll?scenario=1")
    let [page2] = await Promise.all([
        context.waitForEvent("page"),
        page.locator('//a[text() ="Open In New Tab"]').click()
    ])
    await page2.waitForLoadState()
    await page2.locator('//input[@type= "checkbox"]').scrollIntoViewIfNeeded()
    await page2.locator('//input[@type= "checkbox"]').click()
    await page2.waitForTimeout(2000)
    await page2.getByText("Accept Our Policy").click()
})

