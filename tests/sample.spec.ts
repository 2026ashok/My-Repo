import {test} from "@playwright/test"


test('login',async({page})=>{

  await  page.goto('https://objectways.com')
  await  page.getByRole('link', { name: 'Get in touch' }).click()
  await  page.pause()
  await  page.locator('[id="first_name"]').fill('Ashok')
  await  page.locator('[id="last_name"]').fill('Kumar')
  await  page.getByRole('textbox', { name: 'Email Address *' }).fill('test@gmail.com')
 // await  page.locator('[name="country"]').selectOption('Afghanistan')  //visible text
  //await  page.locator('[name="country"]').selectOption({value:'DZ'})  //value
 // await  page.locator('[name="country"]').selectOption({label:'Qatar'})  //label
  await  page.locator('[name="country"]').selectOption({index:5})  //index

  //validate count of dropdown options
  await  page.getByText('Phone Number').fill('9589464')
  

  await page.waitForTimeout(1000)



   
    

})