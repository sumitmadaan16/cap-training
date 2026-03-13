import { test, expect} from '@playwright/test'
import path from 'path';

test("download file in desired directory" , async({page}) => {    
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.getByPlaceholder('Enter text here').fill("Hello this is a sample text file");
    await page.getByPlaceholder('Filename').fill("sample.txt");
    let [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
    ])
    let dirPath = '/Users/sumitmadaan/Workspaces/VsWorkspace/capgemini/playwright/tests/Day18/downloadFile'
    let fileName = await download.suggestedFilename()
    path.join(dirPath, fileName)
    await download.saveAs(path.join(dirPath, fileName))
    await page.waitForTimeout(5000);
})