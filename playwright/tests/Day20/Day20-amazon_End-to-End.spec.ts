import { test } from '@playwright/test'
import ex from '../../POM/Day20-amazon_E2E.page'
import fs from 'fs' //? fs ==> file system
import path from 'path'

let file = fs.readFileSync(path.join(__dirname, "../../testData/Day20-amzon.json"))
//@ts-ignore
let data = JSON.parse(file)

test("flipkart", async ({page})=>{
    let exPage = new ex(page)
    await exPage.performLogic(data.url, data.searchFill)
})