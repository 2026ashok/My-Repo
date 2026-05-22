import { Locator, Page } from "@playwright/test";

export class AddToCart{
    page:Page
    cart:Locator
    remove:Locator
    checkout:Locator

    constructor(page:Page){
        this.page=page
        this.cart=page.locator('[id="shopping_cart_container"]')
        this.remove=page.locator('[id="remove-sauce-labs-onesie"]')
        this.checkout=page.locator('[id="checkout"]')

    }

    public async addcart(){
    
   await  this.page.waitForTimeout(2000)
    await  this.cart.click()
    await  this.remove.waitFor({state:'visible'})
    await  this.remove.click()
    await  this.page.waitForLoadState('load')
    await  this.checkout.click()


    }
}