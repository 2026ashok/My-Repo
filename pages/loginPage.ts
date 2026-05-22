import { Locator, Page } from "@playwright/test"

class Loginpage{
    page:Page

    username:Locator
    password:Locator
    sign:Locator
   // frameloc:Locator

    constructor(page:Page){
    this.page=page
    this.username=page.locator('[id="user-name"]')
    this.password=page.locator('[id="password"]')
    this.sign=page.locator('[name="login-button"]')
   // this.frameloc=page.frameLocator('[id="chatbot"]').locator
    }
} 