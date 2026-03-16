import { test } from '@playwright/test'
import ex from '../../POM/Day20-example.page'
import fs from 'fs' //? fs ==> file system
import path from 'path'

let file = fs.readFileSync(path.join(__dirname, "../../testData/valid_invalid.json"))
let data = JSON.parse(file)

test("POM1", async ({page})=>{
    let exPage = new ex(page)
    for(let d of data.valid){
        await exPage.performLogic(d.url, d.username, d.password)
    }
})