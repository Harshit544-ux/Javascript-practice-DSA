// function greet(){
//     console.log("Hello Harshit !")
// }

// greet()


// function greet(name){
//     console.log("name is " , name)
// }

// greet("Harshit")
// greet("Mohit")
// greet("Gaurav")
// greet("Sonal")



function add(a,b){
    return a+b
}


result=add(3,5)
// console.log("result" , result)


const greet = function(name){
    return `Hello ${name} !`
}

// console.log(greet("Harshit"))


//Arrow function


// function add (a,b){
//     return a+b
// }

const adding = (a,b) =>{
    return a+b
}


const sub= (a,b,title)=>{
    console.log(title)
    return a - b
}

console.log(sub(5,3,"Subtraction"))
console.log(adding(3,5))


//component 
// const handlePress = ()=>{
//     console.log("Button is presses")
// }


// <Button
//    title= "click me"
//    onClick = {handlePress}
// />

