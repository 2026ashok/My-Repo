import test from "@playwright/test"
import { Utils } from "../pages/utils"
import { Myntraallpage } from "../pages/myntraallpage"
import { ProductDetailPage } from "../pages/productDetailPage"

test('myntra login',async({page})=>{

    const utils=new Utils(page)
    
    await utils.lunchsite("https://www.myntra.com/boy-shirts")

    const myntraallpage =new Myntraallpage(page)

   const pageOne= await myntraallpage.selectFirstProduct()
 

   const productDetailPage = new ProductDetailPage(pageOne)

   await utils.lunchsite("https://www.myntra.com/kids-shirts")
    
   const pageTwo= await myntraallpage.selectFirstProduct()

   const productDetailPage2 = new ProductDetailPage(pageTwo)
    

})