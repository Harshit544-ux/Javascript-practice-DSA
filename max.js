// wap to find the maximum number from an array 

const arr=[3,5,7,8,6,1];

//take the temporary variable to store the maximum number
let max=arr[0];

//loop through the array
for(let i=0;i<arr.length;i++){
   //check the condition for maximum number
   if(max<arr[i]){
    max=arr[i];
   }
}

//print the maximum number
console.log("Maximum number is : " , max);



