import {test,expect} from '@playwright/test'
import AmazonC from "../page object model/day22task.page.ts";
import fs from 'fs';
import path from 'path';

let datafile = fs.readFileSync(path.join(__dirname,'../testdata/data4.json')); 
let data = JSON.parse(datafile);

test("task-1",async({browser,browserName})=>{
    let context= await browser.newContext();
    let page = await context.newPage();
    let url = data.url;
    let country = data.country;
    let State = data.State;
    let city = data.city;
    let employment = data.employment;
    let category = data.category;
    

    let amazon1 = new AmazonC(page);
    await page.goto(url);
    await amazon1.carrerLnk.click();
    await amazon1.studentRoleBtn.click()
    await amazon1.openUniBtn.click();
    await amazon1.select(country,page);
    await amazon1.select(State,page);
    await amazon1.select(city,page);
    await amazon1.select(employment,page);
    await amazon1.select(category,page);

    let [page2] = await Promise.all([
        page.waitForEvent("popup"),
        amazon1.jobNo(2)
    ])

    let amazon2 = new AmazonC(page2);
    await amazon2.applyNowBtn.click();

    await page2.waitForTimeout(5000);

   await page.screenshot({path:'screenshot/day22task1${browserName}.png'});
    await page.waitForTimeout(5000);
})