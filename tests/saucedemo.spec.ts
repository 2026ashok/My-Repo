import test from "@playwright/test";
import { Utils } from "../pages/utils";
import { LoginSauce } from "../pages/SaucePage/login";
import { Product } from "../pages/SaucePage/product";
import { AddToCart } from "../pages/SaucePage/addtocart";
import { customerDetail } from "../pages/SaucePage/customerdetail";
import { OrderDetail } from "../pages/SaucePage/orderDetail";
import { expect } from "@playwright/test";


test('demo sauce project Login',async({page})=>{

    const utils =new Utils(page)
    await utils.lunchsite("https://www.saucedemo.com/")

   await expect(page).toHaveURL("https://www.saucedemo.com/")

    await expect(page).toHaveTitle('Swag Labs')
    
    await page.pause()
    const Loginsauce=new LoginSauce(page)
    await Loginsauce.sauceLogin("standard_user","secret_sauce")
      
  //  await Loginsauce.sauceInvalidLogin("standard_user","secret")

     const product =new Product(page)
     await product.productPage()

     const Addtocart =new AddToCart(page)
     await Addtocart.addcart()

     const customer =new customerDetail(page)
     await customer.customerData("Ram","krishna","600020")

     const Orderdetail =new OrderDetail(page)
     await Orderdetail.orderDetailPage()
    

})