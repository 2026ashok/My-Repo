import { Locator, Page } from "@playwright/test";


//id or class   page.frameLocator('#id')
//name          page.frame('name')
//Source URL    page.frame({ url: /part-of-url/ })
//If a page has multiple frames and you aren't sure of their attributes, you can retrieve a list of 
//all frames currently attached to the page
//const allFrames = page.frames();

// Use the index to pick a specific frame (not recommended for flaky tests)
//await allFrames[1].click('text=Accept');



export class FramePage{
    page:Page
    sample:Locator
    childFrame:Locator
  
    constructor(page:Page){
        this.page=page
        this.sample=page.frameLocator('[id="frame1"]').locator('[id="sampleHeading"]')
        this.childFrame=page.frameLocator('[id="frame1"]').frameLocator('iframe').getByText('Child Iframe')
    }

    public async frameValidation(){
        const framecontent=await this.sample.textContent()
        console.log(`verify the content in frame:${framecontent}`)
    }

    
    public async childframeValidation(){
       const childFramecontent=await this.childFrame.textContent()        
       console.log(`verify the content in child frame:${childFramecontent}`)
    }

    public async frameCount(){
      const frameList=this.page.frames()
      const nunberOfFrames=  await frameList.length
      console.log(nunberOfFrames)
    }

}