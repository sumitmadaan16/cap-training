import { test, expect } from '@playwright/test'
import fs from 'fs' //? fs ==> file system
import path from 'path'


let file = fs.readFileSync(path.join(__dirname, "../../testData/data.json"))
let file2 = fs.readFileSync(path.join(__dirname, "../../testData/valid_invalid.json"))
//@ts-ignore
let dataFile = JSON.parse(file)
//@ts-ignore
let dataFile2 = JSON.parse(file2)

test("JSON data", async ({ page }) => {
    console.log(dataFile.greet);    
})

test("sigle application data", async ({ page }) => {
    await page.goto(dataFile.url)
    await page.locator('#username').fill(dataFile.username)
    await page.locator('#password').fill(dataFile.password)
    await page.getByRole('button' ,{name:"submit"}).click()
})

test("multiple application data", async ({page})=>{
    //use for of when we have array of json obj in json file
    for(let d of dataFile){
        await page.goto(d.url)
        await page.locator('//input[@id="username"]').fill(d.username)
        await page.locator('//input[@id="password"]').fill(d.password)
        await page.locator('//button[@id="submit"]').click()
        await page.waitForTimeout(2000)
    }
})
test.only("Valid_invalid data", async ({page})=>{
    //use for of when we have array of json obj in json file
    for(let d of dataFile2.invalid){
        await page.goto(d.url)
        await page.locator('//input[@id="username"]').fill(d.username)
        await page.locator('//input[@id="password"]').fill(d.password)
        await page.locator('//button[@id="submit"]').click()
        await page.waitForTimeout(2000)
    }
    for(let d of dataFile2.valid){
        await page.goto(d.url)
        await page.locator('//input[@id="username"]').fill(d.username)
        await page.locator('//input[@id="password"]').fill(d.password)
        await page.locator('//button[@id="submit"]').click()
        await page.waitForTimeout(2000)
    }
})