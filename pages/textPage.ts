import { Locator, Page } from "@playwright/test";

export class Textpage{
page:Page
fullname:Locator
email:Locator
currentAddress:Locator
permanentAddress:Locator
submit:Locator
heading:Locator

constructor(page:Page){
    this.page=page
    this.fullname=page.locator('[id="userName"]')
    this.email=page.locator('[id="userEmail"]')
    this.currentAddress=page.locator('[id="currentAddress"]')
    this.permanentAddress=page.locator('[id="permanentAddress"]')
    this.submit=page.locator('[id="submit"]')
    this.heading=page.getByRole('heading', { name: 'Text Box' }) //if not using heading identify two element
}


public async inputValidation(input:string,email:string,currentaddress:string,permanentaddress:string){
//await this.page.pause()
 await this.fullname.fill(input)
await this.email.fill(email)
await this.currentAddress.fill(currentaddress)
await this.permanentAddress.fill(permanentaddress)
await this.permanentAddress.clear()
await this.currentAddress.click()
await this.currentAddress.press('Control+A')
await this.currentAddress.press('Control+C')
await this.permanentAddress.click()
await this.page.pause()
await this.permanentAddress.press('Control+V')
let value =await this.permanentAddress.inputValue()
console.log(value)

}
}

