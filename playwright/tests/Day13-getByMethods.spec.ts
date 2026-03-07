import {test} from '@playwright/test'

test("getByLabel", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel("Username").fill("student")// it by default accepts partial text also..like user can also taken as username therefore we use 
    //? await page.getByLabel("Username" , {exact:true}).fill("student")
    await page.getByLabel("Password").fill("Password123")
    await page.getByText("Submit").first().click()
    await page.getByText("Log out").first().click()

    await page.getByAltText("Practice Test Automation")
    await page.getByRole("textbox" , {name:"Username", exact:true}).fill("student")
})