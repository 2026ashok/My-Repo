import {test} from "@playwright/test";

test('login',async({page})=>{

    await page.locator("table tbody td").nth(0)

    await page.locator("table tbody td a").first()

})