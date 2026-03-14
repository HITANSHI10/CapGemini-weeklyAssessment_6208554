import { test, expect } from "@playwright/test";
import fs from 'fs';
import path from "path";

let datafile = fs.readFileSync(path.join(__dirname,'../testdata/data2.json')); 
let data = JSON.parse(datafile);

test("Task-1 Amazon Search", async({page,browserName}) => {

    for (let product of data){
        let url = product.url;
        let name = product.name;


        await page.goto(url)

        await page.locator('#twotabsearchtextbox').fill(name);
        await page.locator('#nav-search-submit-button').click();

       await page.locator('//h2[contains(@class," a-spacing-none a-color-base a-text-norm")]').first().waitFor();


        const [newPage] = await Promise.all([
            page.context().waitForEvent("page"),
            await page.locator('//h2[contains(@class," a-spacing-none a-color-base a-text-norm")]').first().click()
        ]);

        const productTitle = await newPage.locator('//h1[@id="title"]').textContent();
        console.log("Product Title:", productTitle);

        await expect(newPage.locator('//h1[@id="title"]')).toBeVisible();


        const price = await newPage.locator('//span[@class="a-price-whole"]').first().textContent();
        console.log("Price:", price);

        const rating = await newPage.locator('//span[@id="acrPopover"]').first().textContent();
        console.log("Rating:", rating);

        await expect(newPage.locator('//span[@id="acrPopover"]').first()).toBeVisible();


        await newPage.screenshot({path:`Screenshot/task1${name}${browserName}.png`});
        await newPage.close();
    }
});