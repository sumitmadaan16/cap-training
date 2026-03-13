import { test, expect} from '@playwright/test'
import path from 'path';
//! if file is not present in project stucture, then we will just give complete path instead of relative path
test("upload single File" , async({browser}) => {
    let context = await browser.newContext()
    let page = await context.newPage()
    console.log(__dirname);
    console.log(__filename);
    await page.goto('https://testautomationpractice.blogspot.com')
    await page.locator('#singleFileInput').setInputFiles('/Users/sumitmadaan/Workspaces/VsWorkspace/capgemini/playwright/tests/Day18/uploadFiles/upload.txt')
    await page.getByRole("button" , {name:'Upload Single File'}).click()
    await page.waitForTimeout(3000)
})
//? path.join
test.only("upload single File using path.join" , async({browser}) => {
    let context = await browser.newContext()
    let page = await context.newPage()
    console.log(__dirname);
    console.log(__filename);
    await page.goto('https://testautomationpractice.blogspot.com')
    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname, '/uploadFiles/upload.txt'))
    await page.getByRole("button" , {name:'Upload Single File'}).click()
    await page.waitForTimeout(3000)
})

test("upload multiple File" , async({browser}) => {
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto('https://testautomationpractice.blogspot.com')
    await page.locator('#multipleFilesInput').setInputFiles(
        ['/Users/sumitmadaan/Workspaces/VsWorkspace/capgemini/playwright/tests/Day18/uploadFiles/upload.txt',
        '/Users/sumitmadaan/Workspaces/VsWorkspace/capgemini/playwright/tests/Day18/uploadFiles/upload2.txt']
    )
    await page.getByRole("button" , {name:'Upload Multiple File'}).click()
    await page.waitForTimeout(3000)
})
