//wap to find the minimum number from an array

const arr=[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

//take the temporary variable to store the minimum number
let min = arr[0];

//loop through the array
for(let i=0;i<arr.length;i++){
  //check the condition for minimum number
  if(min>arr[i])
  {
    min=arr[i];
  }
}

//print the minimum number
console.log("Minimum number is : " , min);