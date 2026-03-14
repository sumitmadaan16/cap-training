import { test } from '@playwright/test'
import ex from '../../POM/Day19-example.page'
import fs from 'fs' //? fs ==> file system
import path from 'path'

let file = fs.readFileSync(path.join(__dirname, "../../testData/valid_invalid.json"))
let data = JSON.parse(file)

test("POM1", async ({page})=>{
    let exPage = new ex(page)
    for(let d of data.valid){
        await page.goto(d.url)
        await exPage.usernameTF.fill(d.username)
        await exPage.passwordTF.fill(d.password)
        await exPage.submitBtn.click()
    }
})