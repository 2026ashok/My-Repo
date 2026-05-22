import { Locator, Page } from "@playwright/test";
import * as path from 'path';

export class uploadFile{
    page:Page
    chooseFile:Locator
    downloadBtn:Locator
 

    constructor(page:Page){
     this.page=page
     this.chooseFile=page.locator('#uploadFile')
     this.downloadBtn=page.locator('#downloadButton')

    }

    public async upload(filepath:string ){

        await this.chooseFile.setInputFiles(filepath)
        }

    public async download(){
        // 1. Start waiting for the download event before the click
        const downloadpromise =this.page.waitForEvent('download')

        // 2. Trigger the download
        await this.downloadBtn.click()

        // 3. Wait for the download process to start
        const download =await downloadpromise

        // 4. Define where to save it and actually save it
        // Note: .saveAs() is required to move it from the temp folder to your project
     
        await download.saveAs('download/sample.jpeg');

      

    }
   

} 