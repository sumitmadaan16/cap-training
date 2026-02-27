import {test} from "@playwright/test"

test("practiceTestLogin", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("input#username").fill("student");
    await page.locator("input#password").fill("Password123");
    await page.locator("button#submit").click()
    page.pause()
})