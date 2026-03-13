import { test, expect} from '@playwright/test'

test("auth" , async({browser}) => {
    let context = await browser.newContext({httpCredentials:
        {   username:"admin",
            password:"admin"
        }
    })
    let page = await context.newPage()
    await page.goto("https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/")
    await page.waitForTimeout(2000)
})

test.only("auth2" , async({browser}) => {
    let context = await browser.newContext({httpCredentials:
        {   username:"admin",
            password:"admin"
        }
    })
    let page = await context.newPage()
    await page.goto("https://the-internet.herokuapp.com/basic_auth")
    let message = await page.locator('//p')
    console.log(await message.textContent());
    await expect(message).toHaveText(
        "Congratulations! You must have the proper credentials. "
    )
    await page.waitForTimeout(2000)
})