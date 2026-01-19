const arr=[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let min = arr[0];

for(let i=0;i<arr.length;i++){
  if(min>arr[i])
  {
    min=arr[i];
  }
}

console.log("Minimum number is : " , min);