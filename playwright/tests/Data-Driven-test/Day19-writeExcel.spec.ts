import { test, expect } from '@playwright/test'
import excel from 'exceljs'
import path from 'path'

test("Write data", async ({ page }) => {
  let book = new excel.Workbook()
  await book.xlsx.readFile(path.join(__dirname, '../../testData/textData.xlsx'))
  let sheet = book.getWorksheet("Sheet 2")
  if (!sheet) {
    sheet = book.addWorksheet("Sheet 2")
  }
  sheet.getRow(1).getCell(1).value = "newShee2";
  await book.xlsx.writeFile(path.join(__dirname, "../../testData/textData.xlsx"))
})

test.only("Write data 2", async ({ page }) => {
  let book = new excel.Workbook()
  await book.xlsx.readFile(path.join(__dirname, '../../testData/textData.xlsx'))
  let sheet = book.getWorksheet("Sheet 3")
  if (!sheet) {
    sheet = book.addWorksheet("Sheet 3")
  }
  await page.goto('https://www.amazon.in')
  await page.locator('input#twotabsearchtextbox').fill('shoes')

  await page.waitForSelector('//div[@class="left-pane-results-container"]/child::div')
  let suggestion = await page.locator('//div[@class="left-pane-results-container"]/child::div').allTextContents()
  console.log(suggestion);
  
  for(let i = 1; i<suggestion.length ;i++){
    sheet.getRow(i).getCell(1).value=suggestion[i]
  }
  await book.xlsx.writeFile(path.join(__dirname, "../../testData/textData.xlsx"))
  
})