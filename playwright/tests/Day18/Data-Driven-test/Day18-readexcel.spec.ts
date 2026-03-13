import { test, expect } from '@playwright/test'
import excel from 'exceljs'
import path from 'path'

test("data driven", async ({ page }) => {
  let book = new excel.Workbook()
  await book.xlsx.readFile(path.join(__dirname, '../../../testData/textData.xlsx'))
  let sheet = book.getWorksheet("Sheet 1")
  for (let row = 2; row <= sheet!.actualRowCount; row++) {
    let email = sheet!.getRow(row).getCell(1).toString()
    let password = sheet!.getRow(row).getCell(2).toString()
    console.log(email);
    console.log(password);
    await page.goto('https://demoapps.qspiders.com/ui/login')
    await page.getByPlaceholder('Enter your email').fill(email!)
    await page.getByPlaceholder('Enter your password').fill(password!)
    await page.getByRole('button', { name: "Login" }).click()
    await expect(page.getByText('Login Successful')).toBeVisible()
  }
})
