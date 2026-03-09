import {test} from '@playwright/test'

test("Type method", async({page}) =>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel("Username", {exact:true}).type("student")
    await page.getByLabel("Username", {exact:true}).type("student123") //? type method appends at the end 
    await page.getByLabel("Password", {exact:true}).fill("Password123")
    await page.getByLabel("Password", {exact:true}).fill("Password123456") //? but fill method overwrite the existing value
    //? type is also depricated
    
    
    let visibleUname  = await page.getByLabel("Username", {exact:true}).isVisible()
    console.log(visibleUname);
    
    let visiblepass=await page.getByLabel("Password", {exact:true}).isVisible()
    console.log(visiblepass);
})

test("inputValue" , async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    let content  = await page.getByLabel("Username", {exact:true}).inputValue()
    console.log(content);
})

test("isVisible" , async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    let visibleUname  = await page.getByLabel("Username", {exact:true}).isVisible()
    console.log(visibleUname);
    
    let visiblepass=await page.getByLabel("Password", {exact:true}).isVisible()
    console.log(visiblepass);
})

test.only("all method", async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    await page.keyboard.press("Enter")
    await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]/span').first().waitFor()
    let ele = await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]/span').all() //? gives an array of all locators
    console.log(ele);
    
})