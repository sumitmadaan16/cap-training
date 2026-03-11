import { test, expect } from '@playwright/test'

test("single-dropdown", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    await page.locator("#country_code").selectOption({value:"+44"})
    await expect(page.locator("#country_code")).toHaveValue("+44")
    await page.getByPlaceholder("enter your number").fill("1234567890")
    await expect(page.getByPlaceholder("enter your number")).toHaveValue("1234567890")
    await page.getByRole('radio', { name: 'Male' }).first().click()
    await expect(page.getByRole('radio', { name: 'Male' }).first()).toBeChecked()
    await page.locator("#select3").selectOption({index:3})
    await expect(page.locator("#select3")).toHaveValue("Poland")
    await page.locator("#select5").selectOption({value:"Masovia"})
    await expect(page.locator("#select5")).toHaveValue("Masovia")

    await page.waitForTimeout(5000)
})
test("multi-dropdown", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    await page.locator("#select-multiple-native").selectOption([{value:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}, {index:3}])
    await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
    // await page.locator(".text-center font-bold pt-5").scrollIntoViewIfNeeded()
    await page.waitForTimeout(5000)
})

test("myntra sort all",async({page})=>{  
    await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")
    await page.locator("//span[@class='myntraweb-sprite sort-downArrow sprites-downArrow']").click();
    const sort=await page.locator("//ul[@class='sort-list']/li").all()
    for(let sor of sort){
        let text = await sor.textContent()
        console.log(await sor.textContent());
        if(text?.includes("Better ")){
            await sor.click()
            break;
        }
    }
})

test.only("amazon search",async({page})=>{  
    await page.goto("https://www.amazon.in")
    await page.getByPlaceholder("Search Amazon.in").fill("shoes");
    const option=await page.locator("//div[@class='autocomplete-results-container']/div/div/div").all()
    for(let opt of option){
        let text = await opt.textContent()
        if(text?.includes("woman")){
            await opt.click()
            console.log(text);
            break;
        }
    }
    await page.waitForTimeout(5000)
})

