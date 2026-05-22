import { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";

export class alertPage{
    page:Page
    alert:Locator
    confirm:Locator
    prompt:Locator
   

    constructor(page:Page){
     this.page=page
     this.alert=page.locator('[id="alertButton"]')
     this.confirm=page.locator('[id="confirmButton"]')
     this.prompt=page.locator('[id="promtButton"]')

    }

    public async alertMethod(){

        this.page.once('dialog',async dialog=>{
            await dialog.accept()
        })
        await this.alert.click()
         this.page.once('dialog',async dialog=>{
            await dialog.dismiss()
        })
        await this.confirm.click()
         this.page.once('dialog',async dialog=>{
            await dialog.accept('message')
        })
       await this.prompt.click()
   
      

     
    }

}