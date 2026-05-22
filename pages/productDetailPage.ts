import { Locator, Page } from "@playwright/test";

export class ProductDetailPage{
    page:Page
    size:Locator
    pincodeOne:Locator
    sizeTwo:Locator
    sizeThree:Locator
    check:Locator
    change:Locator
    addToBag:Locator
    bagCount:Locator
    

    constructor(page:Page){
        this.page=page
        this.size=page.locator('[class="size-buttons-size-button size-buttons-size-button-default"]').nth(1)
        this.pincodeOne=page.getByPlaceholder('Enter pincode')
        this.sizeTwo =page.locator('[class="size-buttons-size-button size-buttons-size-button-default"]').nth(0)
        this.sizeThree=page.locator('[class="size-buttons-size-button size-buttons-size-button-default"]').nth(0)
        this.check=page.getByRole('button',{name:'Check'})
        this.change=page.getByRole('button',{name:'Change'})
        this.addToBag=page.getByText('ADD TO BAG')
        this.bagCount=page.getByText('Bag').nth(5)
    }

    public async productDetailFirst(pincode1:string){
        await this.size.click()
        await this.pincodeOne.fill(pincode1)
        await this.check.click()
        await this.addToBag.click()
        
    }
    public async productDetailSecond(pincode2:string){
        await this.sizeTwo.click()
        await this.change.click()
        await this.pincodeOne.fill(pincode2)
        await this.check.click()
        await this.addToBag.click()
    }

    public async productDetailThird(pincode3:string){
        await this.sizeThree.click()
        await this.change.click()
        await this.pincodeOne.fill(pincode3)
        await this.check.click()
        await this.addToBag.click()
    }

    public async clickBag(){
        await this.bagCount.click()

    }

    

}