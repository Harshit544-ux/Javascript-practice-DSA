//wap to left rotate the array by one place

const arr=[1,2,3,4,5];

//taking the temporary variable to store the first element
let temp=arr[0];

//traverse the array from the second element to last element
for(let i=1;i<=arr.length-1;i++){

 //assign the current element to the previous element
   //arr[0]=arr[1];
   //arr[1]=arr[2];
   //arr[2]=arr[3];
   //arr[3]=arr[4];
   //arr[4]=arr[5];

   arr[i-1]=arr[i];

}

//assign the first element to the last position
arr[arr.length-1]=temp;

//print the array
console.log(arr);