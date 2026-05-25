import test from "@playwright/test"
import { Utils } from "../pages/utils"
import { Myntraallpage } from "../pages/myntraallpage"
import { ProductDetailPage } from "../pages/productDetailPage"


test('@dailymyntra login',async({page})=>{

    const utils=new Utils(page)
    
    await utils.lunchsite("https://www.myntra.com/")

    await page.pause()

    const myntraallpage =new Myntraallpage(page)
    await myntraallpage.selectCatagery("Men")

  const pageOne=  await  myntraallpage.selectFirstProduct()

  const productDetailPage =new ProductDetailPage(pageOne)

  await productDetailPage.productDetailFirst("600020")
   
   const pageTwo=  await  myntraallpage.selectSecondProductInAllPage()

   const productDetailPageTwo =new ProductDetailPage(pageTwo)

   await productDetailPageTwo.productDetailSecond("600021")


  const pageThree=  await  myntraallpage.selectThirdProductInAllPage()

  const productDetailPageThree =new ProductDetailPage(pageThree)

  await productDetailPageThree.productDetailThird("600022")

  await productDetailPageThree.clickBag()

})