// Wap to find the second largest element in the array
const arr=[1,2,4,7,7,5];

//first pass for finding the largest element
let largest=arr[0];

for(let i=0;i<=arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i]
    }
}

console.log("largest number = ",largest)

//second pass for finding the second largest number

let second_largest=-1;

for(let i=0;i<arr.length;i++){
    if(arr[i]>second_largest && arr[i]!=largest){
        second_largest=arr[i];
    }
}

console.log("second largest number = ",second_largest)