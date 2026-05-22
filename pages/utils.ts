import { Page } from "@playwright/test";


export class Utils{

    page:Page

    constructor(page:Page){
        this.page=page

    }

    public async lunchsite(url:string){
        await this.page.goto(url)

    }
}