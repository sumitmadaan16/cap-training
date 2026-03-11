import { test } from "@playwright/test"

//! using contains method, and text method  
test("textMethods" ,async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    await page.locator('//input[@type="submit"]').click()
    // this gives 3rd item in any tag contains "wo" be it a heading or tag
    let text = await page.locator('(//span[contains(text(),"Wo")])[3]').textContent() 
    console.log(text);
})

//! using child::
test("childScopeResolution" ,async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    await page.locator('//input[@type="submit"]').click()
    let price = await page.locator('//span[@class="a-price"]/child::span/span[@class="a-price-whole" and .="4,895"]').textContent() 
    console.log(price);
})
//! descendent --> equivalent to child goes to indirect child also
test("descendent" ,async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    await page.locator('//input[@type="submit"]').click()
    //? we skip all the childs and we can also access the indirect child also
    let price = await page.locator('//span[@class="a-price"]/descendant::span[@class="a-price-whole" and .="4,895"]').textContent() 
    console.log(price);
})
//! preceding-sibling -->just previous sibling
test("preceding-sibling" ,async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    await page.locator('//input[@type="submit"]').click()
    let rupeeLogo = await page.locator('//span[@class="a-price"]/descendant::span[@class="a-price-whole" and .="4,895"]/preceding-sibling::span').textContent() 
    console.log(rupeeLogo);
})
//! following-sibling --> just next sibling
test("following-sibling" ,async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    await page.locator('//input[@type="submit"]').click()
    let price = await page.locator('//header/descendant::div[@id="nav-cart-count-container"]/following-sibling::div').textContent() 
    console.log(price);
})
//! parent --> goes to direct parent ==> "/.." 
test("parent" ,async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    await page.locator('//input[@type="submit"]').click()
    let price = await page.locator('//span[@class="a-price"]/child::span/span[@class="a-price-whole" and .="4,895"]').textContent() 
    console.log(price);
})
//! ancestor --> goes to in-direct parent 
test("ancestor" ,async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    await page.locator('//input[@type="submit"]').click()
    let price = await page.locator('//span[@class="a-price"]/child::span/span[@class="a-price-whole" and .="4,895"]').textContent() 
    console.log(price);
})

//? using ancestor and descendant
test("samsung_price" ,async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("phones")
    await page.locator('//input[@type="submit"]').click()
    let price = await page.locator('//div[@class="a-section a-spacing-none puis-spacing-top-micro asin-scannability-font-style puis-padding-right-small s-title-instructions-style puis-desktop-list-title-instructions-style"]/ancestor::div[@class ="a-section a-spacing-small a-spacing-top-small"]/descendant::span[@class="a-price-whole" and .="15,499"]').textContent() 
    console.log(price);
})

//? operatingSystem locator
test.only("operatingSystem" ,async({page,browserName})=>{
    await page.goto("https://www.amazon.in")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("phones")
    await page.locator('//input[@type="submit"]').click()
    await page.locator('//div[@id="p_n_g-1003517064111/51258619031"]//descendant::span[@class="a-list-item"]/a[@aria-label="Apply the filter Android 12.0 to narrow results"]/descendant::div').click()
    let date = new Date().getTime();
    await page.screenshot({path:`ss/${browserName}_${date}.png`})
})

