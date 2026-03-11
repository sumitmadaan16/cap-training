import {test} from "@playwright/test"
test("title1" , async({page})=>{
    let size= await page.viewportSize()
    console.log(size);
    await page.setViewportSize({width:500, height:500})
    console.log(await page.viewportSize());
    
    //? to fetch title of a webpage

    await page.goto("https://www.amazon.in")
    let t1 = await page.title()
    console.log(t1);
    
})  
test("title2" , async({page})=>{    
    //? to fetch title of a webpage
    await page.goto("https://www.amazon.in/")
    // let t1 = await page.title()
    console.log(await page.url());
    
})  

// test("screenshot" , async({page, browserName, context})=>{    
//     //? to fetch title of a webpage
//     await page.goto("https://www.amazon.in/home")
//     let time = new Date().getTime();
//     await page.screenshot({path:`screenshot/${browserName}_${time}.png`})
// })  

test("cookies" , async({page, browserName, context})=>{    
    //? to fetch title of a webpage
    await page.goto("https://www.amazon.in/home")
    let time = new Date().getTime();
    // await page.screenshot({path:`screenshot/${browserName}_${time}.png`})
    console.log(await context.cookies());
    
})  