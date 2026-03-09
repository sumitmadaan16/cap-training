import {test, expect} from '@playwright/test'
test.use({actionTimeout:8000}) // sets timeout for this file's testcases

test("assertions1" ,async({page,browserName})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel("Username", { exact: true }).fill("student123");
    let attached = await page.getByLabel("Username", { exact: true }).inputValue();
    expect(attached).toBe("student123")
    expect(attached).toContain("uden") // stirng

    const numbers = [1, 2, 3];
    expect(numbers).toContain(2); //array and set

    let date = new Date().getTime();
    // await page.screenshot({path:`ss/${browserName}_${date}.png`})
    await expect(page).toHaveScreenshot()
})

test.fail("assertions2" ,async({page})=>{
    await page.setDefaultTimeout(5000) // sets timeout for assertion2 test block
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel("Username", { exact: true }).fill("student123");
    let attached = await page.getByLabel("Username", { exact: true }).inputValue();
    expect(attached).toContain("uden") // stirng

    // await expect(page.getByLabel("Username", { exact: true })).toBeHidden();
    //? after setting timeout in cofig file to 3000, it checks and then gives error after 3 sec 

    const numbers = [1, 2, 3];
    expect(numbers).toContain(2); //array and set
})

test("assertions3" ,async({page,browserName})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel("Usernae", { exact: true }).fill("student123", {timeout:1000}); // setting timeout for this particluar methods
    let attached = await page.getByLabel("Username", { exact: true }).inputValue();
    expect(attached).toContain("uden") // stirng

    // await expect(page.getByLabel("Username", { exact: true })).toBeHidden();
    //? after setting timeout in cofig file to 3000, it checks and then gives error after 3 sec 

    const numbers = [1, 2, 3];
    expect(numbers).toContain(2); //array and set
})

