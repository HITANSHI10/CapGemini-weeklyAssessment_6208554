import {test} from "@playwright/test"

test("task2",async({page,browserName})=>{
    await page.goto("https://www.flipkart.com/")
    await page.locator('(//input[@name="q"])[2]').fill("Phones")
    await page.locator('(//button[@class="XFwMiH"])[1]').click()
    await page.locator('(//div[@class="buvtMR"])[1]').click()
    let price = await page.locator('(//div[@class="hZ3P6w DeU9vF"])').nth(3).textContent();
    console.log(price);

     await page.screenshot({path:'screenshot/task2${browserName}.png'});
});