import { expect, Locator, Page } from "@playwright/test";

export class LoginSauce{
    page:Page
    username:Locator
    password:Locator
    login:Locator
    errorMessage:Locator

    constructor(page:Page){
      this.page=page
      this.username=page.locator('[id="user-name"]')
      this.password=page.getByPlaceholder('Password')
      this.login=page.getByText('Login')
      this.errorMessage=page.locator('[data-test="error"]')
    }

    public async sauceLogin(username:string,password:string){
      await expect.soft(this.login).not.toBeVisible()

      await  this.username.fill(username)
      let usernameValue =await this.username.inputValue()
      console.log(usernameValue)
      await  expect(this.username).toHaveValue(usernameValue)
      await  expect(this.username).toBeEnabled()
      await  expect(this.username).toBeEditable()
      await  expect(this.username).toBeVisible()

      await  this.password.fill(password)
      await  expect(this.password).toBeEnabled()
      await  expect(this.password).toBeEditable()
      await  expect(this.password).toBeVisible()
      let passwordValue =await this.password.inputValue()
      console.log(passwordValue)
      await expect(this.password).toHaveValue(passwordValue)
     
      await expect(this.login).toBeEnabled
      await expect(this.login).toBeVisible()
     // let logineValue =await this.login.textContent()
//await expect(this.login).toHaveText(logineValue)
      expect(this.login)        
      await  this.login.click()

      }

    public async sauceInvalidLogin(username:string,password:string){
     
     await this.sauceLogin(username,password)


      const error =await this.errorMessage.textContent()

      console.log(`The error message is: ${error}`)
      
      await  expect(this.errorMessage).toContainText(`${error}`)

      }

}