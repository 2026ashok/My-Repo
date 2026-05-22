import test from "@playwright/test"


//https://jsonplaceholder.typicode.com

test('intercept networking', async({page})=>{

    page.on('console', msg => console.log(msg.text()));

    await page.route('**ashok/1',async route =>{

        await route.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify({
                id:1,
                name:'AShok',
                email:'test@gmail.com'
            })

        })
    })
        await page.goto('https://jsonplaceholder.typicode.com')
        await page.evaluate(async ()=>{
        const response= await fetch('https://jsonplaceholder.typicode.com/ashok/1')
       console.log(response)

       console.log((await response.json()));

        })

    })
 
