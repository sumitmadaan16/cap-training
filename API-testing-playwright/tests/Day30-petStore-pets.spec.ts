import {test , expect} from "@playwright/test";

test("POST pet" , async({request})=>{
    // let applicationContext = await request.newContext() works same as using request fixture, can be used if not using request fixture
    let r1  =  await request.post("https://petstore3.swagger.io/api/v3/pet" , {
        data:{
            id: 15,
            name: "doggie",
            category: {
            id: 1,
            name: "Dogs"
        },
            photoUrls: ["string"],
            "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
            "status": "available"
    }
    })
    console.log(r1)
    console.log("Status:", r1.status());
    const body = await r1.json();
    console.log("Response JSON:", body);
    console.log("Pet name:", body.name);
})
test("POST pet2" , async({request})=>{
    // let applicationContext = await request.newContext() works same as using request fixture, can be used if not using request fixture
    let r1  =  await request.post("https://petstore3.swagger.io/api/v3/pet" , {
        data:{
            id: 16,
            name: "doggie",
            category: {
            id: 1,
            name: "Dogs"
        },
            photoUrls: ["string"],
            "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
            "status": "available"
    }
    })
    console.log(r1)
    console.log("Status:", r1.status());
    const body = await r1.json();
    console.log("Response JSON:", body);
    console.log("Pet name:", body.name);
})
test("PUT pet" , async({request})=>{
    let r1  =  await request.put("https://petstore3.swagger.io/api/v3/pet" , {
        data:{
            id: 15,
            name: "cattie",
            category: {
            id: 1,
            name: "Cat"
        },
            photoUrls: ["string"],
            "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
            "status": "available"
    }
    })
    console.log(r1)
    console.log("Status:", r1.status());
    const body = await r1.json();
    console.log("Response JSON:", body);
    console.log("Pet name:", body.name);
})
test("GET pet" , async({request})=>{
    let r1  =  await request.get("https://petstore3.swagger.io/api/v3/pet/15")
    console.log(r1)
    console.log("Status:", r1.status());
    const body = await r1.json();
    console.log("Response JSON:", body);
    console.log("Pet name:", body.name);
})
test("Delete pet", async ({ request }) => {
    let r1 = await request.delete("https://petstore3.swagger.io/api/v3/pet/16");
    console.log("Status:", r1.status());
    const bodyText = await r1.text();
    console.log("Response:", bodyText);
    expect(bodyText).toContain("Pet deleted");
});

