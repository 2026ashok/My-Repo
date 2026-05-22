import { Locator, Page } from "@playwright/test";

export class OrderDetail{
    page:Page
    finish:Locator

    constructor(page:Page){
        this.page=page
        this.finish=page.locator('[id="finish"]')
    }

    public async orderDetailPage(){
        await this.finish.click()
    }
}