import { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";

export class Buttonpage{
    page:Page
    doubleclick:Locator
    rightclick:Locator
    clickbtn:Locator
    buttons:Locator

    constructor(page:Page){
     this.page=page
     this.doubleclick=page.locator('[id="doubleClickBtn22"]')
     this.rightclick=page.getByRole('button',{name:'Right Click Me'})
     this.clickbtn=page.getByRole('button',{name:'Click Me',exact:true})
     this.buttons=page.getByText('Buttons',{exact:true})
    }

    public async clickMethod(){
   
        try{
        await this.clickbtn.click()
        await this.doubleclick.dblclick()
        await this.rightclick.click({button:"right"})

        }catch(error){
            console.log(error)
            await this.page.screenshot({path:'error.png'})
        }

     
    }
   //id^="doubleClickBtn22

}