import {test,expect} from '@playwright/test'
import flipkart from "../page object model/day21task1.page.ts"
import fs from 'fs'
import path from 'path'

let datafile = fs.readFileSync(path.join(__dirname,'../testdata/data3.json'), 'utf-8'); 
let data = JSON.parse(datafile);

test("Flipkart",async({browser,browserName})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    let url = data.url;

    let flip1 = new flipkart(page);

    await page.goto(url);
    await flip1.crossBtn.click();
    await flip1.homeBtn.click();
    await flip1.gudipadwaImg.click();
    await flip1.gudiclothes.click();
    
    let [page1] = await Promise.all([
        page.waitForEvent('popup'),
        flip1.products.nth(4).click()
    ])
    let flip2 = new flipkart(page1);
    await flip2.addToCartBtn.click({force:true});


    await page1.close();

    let [page2] = await Promise.all([
        page.waitForEvent('popup'),
        flip1.products.nth(7).click()
    ])
    let flip3 = new flipkart(page2);
    await flip3.addToCartBtn.click({force:true});

    await page2.close()

    await flip1.cartBtn.click();
    await flip1.quantity.first().fill('3');
    await flip1.quantity.nth(1).fill('6');

    await flip1.placeOrderBtn.click();

    await page.screenshot({path:'screenshot/day21task1${browserName}.png'});

    


})