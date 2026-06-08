//Promise : -

//JavaScript mein Promise ek "Vaada" (Promise) hai jo yeh kehta hai ki koi kaam (jo thoda time lega) 
// bhavishya (future) mein pura hoga—chahe woh successfully pura ho ya fail ho jaye.

//Technically, Promise JavaScript ka ek object hai jo kisi Asynchronous Operation 
// (jaise internet se data lana, file read karna, ya timer lagana) ke final result (success ya failure) ko represent karta hai.

// Promise ke 3 States hote hain
// 1. Pending

// Kaam chal raha hai.

// Promise { <pending> }


// 2. Fulfilled (Resolved)

// Kaam successful ho gaya.

// Promise { "Pizza Delivered" }


// 3. Rejected

// Kaam fail ho gaya.

// Promise { "Out of Stock" }


//example and syntax : -
const myPromise = new Promise((resolve, reject)=>{
    const success = true;

    if(success){
        resolve("Promise resolved successfully!");
    }
    else{
        reject("Promise rejected !");
    }
})

//separate the catch and then blocks
myPromise.then((data)=>{
    console.log(data)
})

myPromise.catch((error)=>{
    console.log(error)
})

//chaining of promises
myPromise
  .then((data)=>{
  console.log(data)
}).catch((error)=>{
   console.log(error)
})


//Real Example
//Api calling krni hai
const fetchUsers = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(["Mohit","Harshit","Gaurav"])
    }, 2000)
})

fetchUsers
.then((users)=>{
    console.log("Users fetched successfully !")
    console.log(users)
})
.catch(
(error)=>{
    console.log("Error fetching users !")
})