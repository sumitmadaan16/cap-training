import { test } from  '@playwright/test'


test.only("dialog ok", async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com')
    page.on("dialog", async (d) =>{
        // await d.accept("alsjdhf") //? to fill any text automatically if no field to enter text in dialog it will just accept it
        if(d.type() == 'prompt'){
            if(await d.defaultValue() == "Tom"){
                d.accept()
            }else{
                await d.accept("Tom")
            }
        }
        else{
            d.accept()
        }
    })
    await page.locator('#alertBtn').click()
    await page.locator('#confirmBtn').click()
    await page.locator('#promptBtn').click()
})

test("dialog once", async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com')
    
    await page.locator('#alertBtn').click()
    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept()
    })
    await page.locator('#confirmBtn').click()

    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept("Sumit")
    })
    await page.locator('#promptBtn').click()
    await page.waitForTimeout(4000)
})