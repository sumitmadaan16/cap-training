import { expect, test } from "@playwright/test";
import * as fs from "fs";

const filePath = "tests/testData/testData.json";

const readData = () => JSON.parse(fs.readFileSync(filePath, "utf-8"));
const writeData = (data: object) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
//login
test("login and fetch products", async ({ request }) => {
    const data = readData();
    console.log("Logging in user");
    const loginRes = await request.post("https://www.shoppersstack.com/shopping/users/login", {
        data: {
            email: "flash3@yahoo.com",
            password: "Flash3@123",
            role: "SHOPPER"
        },
        ignoreHTTPSErrors: true
    });
    expect(loginRes.status()).toBe(200);
    const loginBody = await loginRes.json();
    data.token = loginBody.data.jwtToken;
    data.shopperId = loginBody.data.userId;
    console.log("Logged in shopperId:", data.shopperId);
    console.log("Token:", data.token);

    console.log("Fetching products");
    const prodRes = await request.get("https://www.shoppersstack.com/shopping/products/alpha", {
        ignoreHTTPSErrors: true
    });
    expect(prodRes.status()).toBe(200);
    const prodBody = await prodRes.json();
    data.prodId1 = prodBody.data[0].productId;
    data.prodId2 = prodBody.data[1].productId;
    console.log("Product Id:", data.prodId1);
    console.log("Product name:", prodBody.data[0].name);
    console.log("Product price:", prodBody.data[0].price);

    writeData(data);
});
//address
test("add address", async ({ request }) => {
    const data = readData();

    console.log("Adding Address");
    const r1 = await request.post(`https://www.shoppersstack.com/shopping/shoppers/${data.shopperId}/address`, {
        data: {
            buildingInfo: "Sunrise Apartments, Flat No. 315",
            city: "Banglore",
            country: "India",
            landmark: "Near Phoenix Mall",
            name: "flash",
            phone: "9867542313",
            pincode: "432103",
            state: "Karnataka",
            streetInfo: "Viman Nagar Road",
            type: "Home"
        },
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        ignoreHTTPSErrors: true
    });
    console.log("Status:", r1.status());
    data.addressId = (await r1.json()).data.addressId;
    console.log("Address Id:", data.addressId);

    writeData(data);
});
//wishlist
test("add to wishlist", async ({ request }) => {
    const data = readData();

    console.log("Adding to wishlist");
    const r1 = await request.post(`https://www.shoppersstack.com/shopping/shoppers/${data.shopperId}/wishlist`, {
        data: {
            productId: data.prodId1,
            quantity: 3
        },
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        ignoreHTTPSErrors: true
    });
    console.log("Status:", r1.status());
    if (r1.status() == 201) {
        console.log("Product added to wishList");
    } else if (r1.status() == 409) {
        console.log("Product already present in your wishlist");
    }
});
test("get all from wishlist", async ({ request }) => {
    const data = readData();

    console.log("Fetching all products from wishlist");
    const r1 = await request.get(`https://www.shoppersstack.com/shopping/shoppers/${data.shopperId}/wishlist`, {
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        ignoreHTTPSErrors: true
    });
    console.log("Status:", r1.status());
    const body = await r1.json();
    data.itemIdWishList = body.data[0].itemId;
    console.log("Item Id:", data.itemIdWishList);
    console.log("Item name:", body.data[0].productName);

    writeData(data);
});
test("deleting a product from wishlist", async ({ request }) => {
    const data = readData();

    console.log("Deleting product from wishlist");
    const r1 = await request.delete(`https://www.shoppersstack.com/shopping/shoppers/${data.shopperId}/wishlist/${data.prodId1}`, {
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        ignoreHTTPSErrors: true
    });
    console.log("Status:", r1.status());
    console.log(await r1.text());
});
//cart
test("Adding item to cart", async ({ request }) => {
    const data = readData();

    console.log("Adding item 1 to cart");
    const r1 = await request.post(`https://www.shoppersstack.com/shopping/shoppers/${data.shopperId}/carts`, {
        data: {
            productId: `${data.prodId1}`,
            quantity: 2
        },
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        ignoreHTTPSErrors: true
    });
    console.log("Status:", r1.status());
    console.log(await r1.json());
});
test("Adding item 2 to cart", async ({ request }) => {
    const data = readData();

    console.log("Adding item 2 to cart");
    const r1 = await request.post(`https://www.shoppersstack.com/shopping/shoppers/${data.shopperId}/carts`, {
        data: {
            productId: `${data.prodId2}`,
            quantity: 2
        },
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        ignoreHTTPSErrors: true
    });
    console.log("Status:", r1.status());
    console.log(await r1.json());
});
test("Get all items from cart", async ({ request }) => {
    const data = readData();

    console.log("Fetching items from cart");
    const r1 = await request.get(`https://www.shoppersstack.com/shopping/shoppers/${data.shopperId}/carts`, {
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        ignoreHTTPSErrors: true
    });
    console.log("Status:", r1.status());
    const body = await r1.json();
    data.itemIdCart = body.data[0].itemId;
    console.log("Cart Item Id:", data.itemIdCart);
    console.log(body);

    writeData(data);
});
test("updating item in cart", async ({ request }) => {
    const data = readData();
    console.log("Updating item in cart");
    const r1 = await request.put(`https://www.shoppersstack.com/shopping/shoppers/${data.shopperId}/carts/${data.itemIdCart}`, {
        data: {
            productId: `${data.prodId1}`,
            quantity: 1
        },
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        ignoreHTTPSErrors: true
    });
    console.log("Status:", r1.status());
    console.log(await r1.text());
});
test("delete item of cart", async ({ request }) => {
    const data = readData();
    console.log("Deleting item from cart");
    const r1 = await request.delete(`https://www.shoppersstack.com/shopping/shoppers/${data.shopperId}/carts/${data.prodId2}`, {
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        ignoreHTTPSErrors: true
    });
    console.log("Status:", r1.status());
});
// order
test("place order from cart", async ({ request }) => {
    const data = readData();

    console.log("Placing order from cart");
    const r1 = await request.post(`https://www.shoppersstack.com/shopping/shoppers/${data.shopperId}/orders`, {
        data: {
            address: {
                addressId: data.addressId,
                buildingInfo: "Sunrise Apartments, Flat No. 315",
                city: "Banglore",
                country: "India",
                landmark: "Near Phoenix Mall",
                name: "flash",
                phone: "9867542313",
                pincode: "432103",
                state: "Karnataka",
                streetInfo: "Viman Nagar Road",
                type: "Home"
            },
            paymentMode: "COD"
        },
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        ignoreHTTPSErrors: true
    });
    console.log("Status:", r1.status());
    console.log(await r1.json());
});
test("Display Order history", async ({ request }) => {
    const data = readData();
    console.log("Display Order history");
    const r1 = await request.get(`https://www.shoppersstack.com/shopping/shoppers/${data.shopperId}/orders`, {
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        ignoreHTTPSErrors: true
    });
    console.log("Status:", r1.status());
    let body = await r1.json();
    data.orderId = body.data[0].orderId
    console.log(await r1.json());
    writeData(data)
});
test("Update order status", async ({ request }) => {
    const data = readData();
    console.log("Update order status");
    const r1 = await request.patch(`https://www.shoppersstack.com/shopping/shoppers/${data.shopperId}/orders/${data.orderId}?status=DELIVERED`, {
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        ignoreHTTPSErrors: true
    });
    console.log("Status:", r1.status());
    console.log(await r1.json());
});
//review
test("Add a review", async ({ request }) => {
    const data = readData();
    console.log("Add a review");
    const r1 = await request.post(`https://www.shoppersstack.com/shopping/reviews?productId=${data.prodId2}`, {
        data:{
        dateTime: "2026-03-28T07:36:42.605Z",
        description: "very nice product",
        heading: "best product",
        rating: 4,
        shopperId: `${data.shopperId}`,
        shopperName: "flash"
        },
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        ignoreHTTPSErrors: true
    });
    console.log("Status:", r1.status());
    console.log(await r1.json());
});
test("get all review", async ({ request }) => {
    const data = readData();
    console.log("get all review");
    const r1 = await request.get(`https://www.shoppersstack.com/shopping/reviews/${data.prodId2}`, {
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        ignoreHTTPSErrors: true
    });
    console.log("Status:", r1.status());
    let body = await r1.json()
    data.reviewId = body.data[0].reviewId
    console.log(await r1.json());
    writeData(data)
});
test("update a review", async ({ request }) => {
    const data = readData();
    console.log("update a review");
    const r1 = await request.put(`https://www.shoppersstack.com/shopping/reviews/${data.reviewId}?productId=${data.prodId2}`, {
        data:{
            dateTime: "2026-03-28T07:36:42.605Z",
            description: "very nice veryyy product",
            heading: "nice product",
            rating: 5,
            shopperId: `${data.shopperId}`,
            shopperName: "flash"
        },
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        ignoreHTTPSErrors: true
    });
    console.log("Status:", r1.status());
    console.log(await r1.json());
});
test("delete a review", async ({ request }) => {
    const data = readData();
    console.log("delete a review");
    const r1 = await request.delete(`https://www.shoppersstack.com/shopping/reviews/${data.reviewId}?productId=${data.prodId2}`, {
        headers: {
            Authorization: `Bearer ${data.token}`
        },
        ignoreHTTPSErrors: true
    });
    console.log("Status:", r1.status());
    console.log(await r1.json());
});
