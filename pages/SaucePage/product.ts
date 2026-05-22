import { Locator, Page } from "@playwright/test";

export class Product{
    page:Page
    sauceLabBackpack:Locator
    sauceLabOnesie:Locator
    sauceBike:Locator

    constructor(page:Page){
        this.page=page
        this.sauceLabBackpack=page.locator('[id="add-to-cart-sauce-labs-backpack"][class="btn btn_primary btn_small btn_inventory "]')
        this.sauceLabOnesie=page.locator('[id="add-to-cart-sauce-labs-onesie"][class="btn btn_primary btn_small btn_inventory "]')
        this.sauceBike=page.locator('[id="add-to-cart-sauce-labs-bike-light"]')
    }

    public async productPage(){
      await  this.sauceLabBackpack.click()
      await  this.page.waitForTimeout(1000)
      await  this.sauceLabOnesie.waitFor({state:'visible'})
      await  this.sauceLabOnesie.click()
      await  this.page.screenshot({path:'screenshot/testss.png'})
      await  this.page.waitForLoadState('load')
      await  this.sauceBike.click()
    }
}