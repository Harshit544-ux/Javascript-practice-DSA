// wap to find the maximum number from an array 

const arr=[3,5,7,8,6,1];

let max=0;

//loop
for(let i=0;i<arr.length;i++){
   //check the condition for maximum number
   if(max<arr[i]){
    max=arr[i];
   }
}

console.log("Maximum number is : " , max);



