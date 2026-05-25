import {test} from "@playwright/test"
import { Utils } from "../pages/utils"
import { Buttonpage } from "../pages/buttonPage"
import { Textpage } from "../pages/textPage"
import { Formpage } from "../pages/formPage"
import { Element } from "../pages/elements"
//import { Upload } from "../pages/upload"
import { uploadFile } from "../pages/uploadFile"
import { Dropable } from "../pages/dropable"
import { FramePage } from "../pages/framePage"
import { Webtable } from "../pages/webtable"
import { alertPage } from "../pages/alertPage"

test('@daily login',async({page})=>{

    const utils=new Utils(page)
    const buttonpage =new Buttonpage(page)
   
    await utils.lunchsite("https://demoqa.com/buttons")
    await buttonpage.clickMethod()
    await page.pause()
    

})

test('input action',async({page})=>{
    const utils =new Utils(page)
     await utils.lunchsite("https://demoqa.com/text-box")
     const text =new Textpage(page)
     const formpage =new Formpage(page)
    await text.inputValidation("Ashok","ashok@gmail.com","Adyar","Kanchipuram")
 
   await utils.lunchsite("https://demoqa.com/automation-practice-form")
   await formpage.formvalidation("ashok","kumar","ashok@gmail.com","9842","Math","Mumbai")
   await page.pause()


})

test('check box',async({page})=>{
     const utils=new Utils(page)
     await utils.lunchsite("https://demoqa.com/radio-button")
    
     const element=new Element(page)
     await element.checkMethod() 
     await page.pause()
})

test('upload',async({page})=>{

     const utils=new Utils(page)
     await utils.lunchsite("https://demoqa.com/upload-download")

     const uploadfile=new uploadFile(page)
     await uploadfile.upload("pages/buttonPage.ts")
     await page.pause()
     
     await uploadfile.download()

})

test('drag',async({page})=>{

     const drop =new Dropable(page)
     const utils=new Utils(page)
     await utils.lunchsite("https://demoqa.com/droppable")
     await page.pause()
     await drop.dragdropMethod()
     await page.pause()


})

test('frame',async({page})=>{

     const utils = new Utils(page)
     await utils.lunchsite("https://demoqa.com/frames")

     const frame = new FramePage(page)
     await frame.frameValidation()

})

test('Nested frame',async({page})=>{
     
     const utils = new Utils(page)
     await utils.lunchsite("https://demoqa.com/nestedframes")
     
     const frame = new FramePage(page)
     await frame.childframeValidation()
   
     
})

test('frame count',async({page})=>{
    
     const utils = new Utils(page)
     await utils.lunchsite("https://www.irctc.co.in/nget/train-search")
   
     const frame = new FramePage(page)
     await frame.frameCount()

})

test('Web table',async({page})=>{
     const utils = new Utils(page)
     await utils.lunchsite("https://demoqa.com/webtables")
     
     const webtable=new Webtable(page)
     await page.pause()
     await webtable.rowCoulmnCount()
     await webtable.specficDataInTable()
     await webtable.allDataInTable()
     await webtable.searchWebtable('Vega')

})


test('alert',async({page})=>{
    
     const utils = new Utils(page)
     await utils.lunchsite("https://demoqa.com/alerts")
     await page.pause()
     const alertpage = new alertPage(page)
     await alertpage.alertMethod()

})