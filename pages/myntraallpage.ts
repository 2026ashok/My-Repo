import { Locator, Page } from "@playwright/test";

export class Myntraallpage{
    page:Page
    firstProduct:Locator
    secondProduct:Locator
    thirdProduct:Locator
    categery:Locator
    tShirt:Locator


    constructor(page:Page){
        this.page=page
        this.categery=page.locator('[class="desktop-navLink"]')
        this.tShirt=page.getByRole('link', { name: 'T-Shirts', exact: true })
        this.firstProduct=page.locator('[class="product-product"]').nth(0)
        this.secondProduct =page.locator('[class="product-productMetaInfo"]').nth(1)
        this.thirdProduct =page.locator('[class="product-productMetaInfo"]').nth(2)

    }

    public async selectFirstProduct(){

       const newPagePromise =this.page.waitForEvent('popup')
       await this.firstProduct.click()
       const newPage=await newPagePromise
       return newPage
    }

    public async selectSecondProductInAllPage(){
      const newPagePromise =this.page.waitForEvent('popup')
      await this.secondProduct.click()
      const newPage=await newPagePromise
      return newPage
    }

        
  public async selectThirdProductInAllPage(){
      const newPagePromise =this.page.waitForEvent('popup')
      await this.thirdProduct.click()
      const newPage=await newPagePromise
      return newPage
    }

    public async selectCatagery(categeryInput:string){
        await this.page.pause()
        const count =await this.categery.count()
        console.log(count)
     
       for (let i = 0; i < count; i++) {

       const text = await this.categery.nth(i).textContent();

       console.log(text)

       if (await text?.includes(categeryInput) ) {
         await this.categery.nth(i).click();
         break
        }

         }

       await this.tShirt.click()
    
    }
}