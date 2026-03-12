import {Frame, test} from "@playwright/test";

test("frame 1", async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    // await page.locator('//input[@name="mytext1"]').fill("ajdfhksa") 
    //! not working cuz this is an part of embeded HTMl using frame's

    let frames:Frame[] = await page.frames() //? this returns an array of all the frames
    console.log(frames.length);

    for(let frame of frames ){
        console.log(await frame.title());
    }
})
test("frame locator", async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    let frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1?.locator('//input[@name= "mytext1"]').fill("inside frame 1 ")

    let frame2 = await page.frameLocator('//frame[@src="frame_2.html"]')
    await frame2.locator('//input[@name= "mytext2"]').fill("inside frame 2")
    
    let frame3 = await page.frameLocator('//frame[@src="frame_3.html"]')
    await frame3.frameLocator('//iframe').locator('(//div[@class="AB7Lab Id5V1"])[1]').click()
    await page.waitForTimeout(4000)

})
test.only("popup", async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com')
    await page.locator('#alertBtn').click()
    await page.waitForTimeout(2000)
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000)
})