class AmazonC{
    carrerLnk:any;
    studentRoleBtn:any;
    openUniBtn:any;
    Cbox:any;
    jobLnk:any;
    applyNowBtn:any;


    constructor (page){
        this.carrerLnk = page.locator('//a[text()="Careers"]');
        this.studentRoleBtn = page.locator('//a[@aria-label="Student opportunities"]');
        this.openUniBtn = page.locator('//div[contains(text(),"open university")]');
        this.jobLnk = page.locator('//a[contains(@class,"header-module_title__9-W3R")]');
        this.applyNowBtn = page.locator('//a[@id="apply-button"]');
    }
    async select(c,page){
        this.Cbox = page.locator('//div[text()="${c}"]');
        await this.Cbox.click();
    }
    async jobNo(n){
        await this.jobLnk.nth(n-1).click();
    }
}

export default AmazonC;