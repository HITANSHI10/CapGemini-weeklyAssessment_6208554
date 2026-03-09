import {test,expect} from "@playwright/test"

test("qspiders",async ({page})=>{
    await page.setDefaultTimeout(20000)
    await page.goto('https://student.qspiders.com/login');
    await expect(page).toHaveURL('https://student.qspiders.com/login');
    await page.getByPlaceholder('Enter your Email or Mobile number').fill("9876543210")
    await expect(page).toHaveTitle('Login — QSpiders Online')
    await page.getByPlaceholder('Enter your password').fill("12345678")
    await page.getByRole('button',{name:'Register'}).click()
    await page.screenshot({path:"screeshot/day15task1.png"});
    await expect(page).toHaveScreenshot()
})

