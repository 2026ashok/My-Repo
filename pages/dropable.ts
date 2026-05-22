import { Locator, Page } from "@playwright/test";

export class Dropable{
    page:Page
    dragMe:Locator
    dropHere:Locator

    constructor(page:Page){
        this.page=page
        this.dragMe=page.locator('[id="draggable"]')
        this.dropHere=page.locator('[id="simpleDropContainer"] [id="droppable"]')
    }

    public async dragdropMethod(){
      await  this.dragMe.dragTo(this.dropHere)
      

    }
}