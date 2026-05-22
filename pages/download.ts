import { Locator, Page } from "@playwright/test";

class Download{
    page:Page
    heading:Locator
    downloadButton:Locator
    chooseFile:Locator

    constructor(page:Page){
        this.page=page
        this.heading=page.getByRole('heading',{name:'Upload and Download',exact:true})
        this.downloadButton=page.getByText('Download')
        this.chooseFile=page.getByRole('button',{name:'Choose File'})
    }
}

//getByRole('heading',{name:'Droppable'})