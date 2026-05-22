import { Locator, Page } from "@playwright/test";

class MouseOver{
    page:Page
    clickMe:Locator
    linkButton:Locator

    constructor(page:Page){
        this.page=page
        this.clickMe=page.getByText('Click me')
        this.linkButton=page.getByText('Link button')
    }

}