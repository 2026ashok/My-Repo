import { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";

export class Element{
    page:Page
    yes:Locator
    Impressive:Locator
 

    constructor(page:Page){
     this.page=page
     this.yes=page.locator('[type="radio"][id="yesRadio"]')
     this.Impressive=page.locator('[type="radio"][id="impressiveRadio"]')

    }

    public async checkMethod(){
     
        await this.yes.check()
        await expect(this.yes).toBeChecked
        await this.page.pause()
        await this.Impressive.check()
    }
   

} 