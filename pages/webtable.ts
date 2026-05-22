import { Locator, Page } from "@playwright/test";

export class Webtable{
    page:Page
    rows:Locator
    columns:Locator
    specficData:Locator
    searchBox:Locator

    constructor(page:Page){
        this.page=page
        this.rows=page.locator('table tbody').locator('tr')
        this.columns=page.locator('td')
        this.specficData=page.locator('tbody tr').nth(0).locator('td').nth(5)
        this.searchBox=page.locator('[id="searchBox"]')
    }

    public async rowCoulmnCount(){
       const rowCount=await this.rows.count()
       console.log(rowCount)

       const columnCount =await this.columns.count()
       console.log(columnCount)

    }

    public async specficDataInTable(){
        const department=await this.specficData.textContent()
        console.log(department)
    }

    public async allDataInTable(){
       const rows=await this.rows
       const rowCount=await rows.count()
       console.log(rowCount)

        for(let i=0;i<rowCount;i++){
            const cells=await this.rows.nth(i).locator('td')
            const cellTexts= await cells.allInnerTexts()
            console.log(cellTexts)
        }
    }

    public async searchWebtable(searchInput:string){
       await this.searchBox.fill(searchInput)
    }
}