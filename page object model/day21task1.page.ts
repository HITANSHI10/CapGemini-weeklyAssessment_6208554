class flipkart{
    crossBtn:any;
    homeBtn:any;
    gudipadwaImg:any;
    gudiclothes:any;
    products:any;
    addToCartBtn:any;
    gotocartBtn:any;
    cartBtn:any;
    quantity:any;
    placeOrderBtn:any;



    constructor(page){
        this.crossBtn = page.locator('//span[@class="b3wTlE"]');
        this.homeBtn = page.locator('//div[text()="Home"]');
        this.gudipadwaImg = page.locator('//img[contains(@src,"88e557198b04f01c.png")]');
        this.gudiclothes = page.locator('//img[contains(@src,"f63af45677b331e7.jpg")]');
        this.products = page.locator('//a[@class="GnxRXv"]');
        this.addToCartBtn = page.locator('//div[text()="Add to cart"]');
        this.gotocartBtn = page.locator('//div[@class="css-146c3p1 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a"]').last();
        this.cartBtn = page.locator('//span[text()="Cart"]');   
        this.quantity = page.locator('//input[@class="j93Ywx"]');  
        this.placeOrderBtn = page.locator('//button[@class="dSM5Ub JMrpad KcXDCU"]'); 
    }
}

export default flipkart;