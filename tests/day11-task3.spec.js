import {test} from "@playwright/test"

test("task3",async({page,browserName})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.locator('//input[@id="name"]').fill("Hitanshi Jain");
    await page.locator('//input[@id="email"]').fill("hitanshi123@gmail.com");
    await page.locator('//input[@id="password"]').fill("12345678")
    await page.locator('//button[@type="submit"]').click()
    await page.locator('//input[@id="email"]').fill("hitanshi123@gmail.com")
    await page.locator('//input[@id="password"]').fill("12345678")
    await page.locator('//button[@type="submit"]').click()
   
    await page.screenshot({path:'screenshot/task3${browserName}.png'});

})