import {test,expect, request} from "@playwright/test"


// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

test.only('Get call',async({request})=>{
    let postId=1
   // const response =await request.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
   

   const response =await request.get(`https://fakestoreapi.com/products`)
    console.log(response)

    expect(response.status()).toBe(200)

    const responsebody=await response.json()
    console.log(responsebody.length)
   
    for(const products of responsebody){
    expect(products).toHaveProperty('id')
    console.log(products.id)
    }
   expect(responsebody[0].id).toBe(1)
 
    // expect(responsebody.userId).toBe(postId)
    // expect(responsebody.id).toBe(postId)
    // expect(responsebody.title).toContain("sunt aut")
    // expect(responsebody.body).toContain("quia et")

    

})

test('Post call',async({request})=>{

    const requestbody ={
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
  
const response =await request.post('https://petstore.swagger.io/v2/pet',{headers:{
    'x-api-key':'',
    'Authorization':``
    
},data:requestbody})


expect(response.status()).toBe(200)

 const responsebody=await response.json()
    console.log(responsebody)

 let id=responsebody.id

 let response1= await request.get(`https://petstore.swagger.io/v2/pet/${id}`)

 expect(response1.status()).toBe(200)

})

test('put call',async({request})=>{
   
  const reqBody={
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
  
  const response=await request.put('https://petstore.swagger.io/v2/pet',{data:reqBody})

  expect(response.status()).toBe(200)


  const response3= await response.json()
   
  console.log(response3)




})

test('intercept', async({page})=>{
  await page.route('**/api/users',async(request)=>{

    console.log("api call")
    await route

  })




})
