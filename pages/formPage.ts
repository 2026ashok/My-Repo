import { Locator, Page } from "@playwright/test";

export class Formpage{
    page:Page
    firstname:Locator
    lastname:Locator
    email:Locator
    genderMale:Locator
    genderFemale:Locator
    genderOther:Locator
    mobile:Locator
    dateofbirth:Locator
    subject:Locator
    hobbieSport:Locator
    hobbieReading:Locator
    hobbiesMusic:Locator
    currentaddress:Locator
    submit:Locator
    subjectedit:Locator
    cityddclk:Locator
    cityOption:Locator

    constructor(page:Page){
        this.page=page
        this.firstname=page.getByRole('textbox',{name:'First Name'})  //?if placehoder is not their
        this.lastname=page.locator('[id="lastName"]')
        this.email=page.getByRole('textbox', { name: 'name@example.com' })
        this.genderMale=page.locator('[type="radio"][value="Male"]')
        this.genderFemale=page.getByRole('radio',{name:'Female'})
        this.genderOther=page.getByRole('radio',{name:'Other'})
        this.mobile=page.locator('[id="userNumber"]')
        this.dateofbirth=page.locator('[id="dateOfBirthInput"]')
        this.subject=page.locator('.subjects-auto-complete__input-container')
        this.subjectedit=page.locator('[id="subjectsInput"]')
        this.hobbieSport=page.getByRole('checkbox',{name:'Sp'})  //partial test
        this.hobbieReading=page.getByRole('checkbox',{name:'Reading'})
        this.hobbiesMusic=page.getByLabel('Music')
        this.currentaddress=page.locator('[id="currentAddress"]')
        this.submit=page.locator('[id="submit"]')
        this.cityddclk=page.locator('[class*="indicatorContainer"]').nth(0)
        this.cityOption=page.getByRole('option', { name: 'Haryana' })

    }

   public async formvalidation(firstname:string,lastname:string,email:string,mobileno:string,subject:string,currentaddress:string){
    await this.firstname.fill(firstname)
    await this.lastname.fill(lastname)
    await this.email.fill(email)
    await this.page.pause()
    await this.mobile.fill(mobileno)
    await this.subject.click()
    await this.subjectedit.fill(subject)
    await this.currentaddress.fill(currentaddress)
    await this.genderMale.check()
    await this.genderFemale.click()
    await this.cityddclk.click()
    await this.cityOption.click()
   }

}

//export default Formpage