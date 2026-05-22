import { Locator, Page } from "@playwright/test";

export class customerDetail{
    page:Page
    firstName:Locator
    lastName:Locator
    zipcode:Locator
    continue:Locator

   constructor(page:Page){
        this.page=page
        this.firstName=page.locator('[id="first-name"]')
        this.lastName=page.locator('[id="last-name"]')
        this.zipcode=page.locator('[id="postal-code"]')
        this.continue=page.locator('[id="continue"]')
    }

    public async customerData(firstName:string,lastName:string,zipcode:string){
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.zipcode.fill(zipcode)
        await this.continue.click()
    }
}