// Q. Async kya hota hai?

// async ek keyword hai jo function ke aage lagaya jata hai. Iska matlab hai ki ye function asynchronous operations handle karega aur hamesha Promise return karega.

// Agar function normal value bhi return kare, JavaScript usko Promise mein wrap kar deta hai.

// Q.Await kya hota hai?

// await sirf async function ke andar use hota hai.

// Jab JavaScript ko await milta hai, to wo us Promise ke resolve hone ka wait karta hai aur phir next line execute karta hai.

// Note : - Important baat:

// await pura program nahi rokta.
// Sirf us async function ki execution temporarily pause hoti hai. Baaki JavaScript code chalta rehta hai.


// | async                                | await                                       |
// | ------------------------------------ | ------------------------------------------- |
// | Function ke saath use hota hai       | Promise ke saath use hota hai               |
// | Function ko asynchronous banata hai  | Promise ke resolve hone ka wait karta hai   |
// | Hamesha Promise return karta hai     | Promise ka resolved value return karta hai  |
// | Function declaration ka part hai     | Function ke andar use hone wala keyword hai |
// | `await` ke bina bhi use ho sakta hai | `async` function ke bina use nahi ho sakta  |


//cart api 5 second me resolve hoga
function cart_api(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("cart api")
            resolve()
        },5000)
    })
}

//product api 2 second me resolve hoga
function product_api(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("product api")
            resolve()
        },2000)
    })
}

//agar hum async await ka use nahi karte to dono api parallel me call hongi aur dono ke complete hone me 5 second lagenge kyuki cart api 5 second me resolve hoga

// cart_api();
// product_api();

//agar hum async await ka use karte hai to dono api sequentially call hongi aur dono ke complete hone me 7 second lagenge kyuki cart api 5 second me resolve hoga aur product api 2 second me resolve hoga
async function fetch_api(){
    await cart_api();
    await product_api();
}

//call the fetch_api function to see the result
fetch_api();