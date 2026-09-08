//remove duplicate in sorted array

let arr = [1,2,2,3,4,4,5,5,5]

let temp =[]
 let j=0;

for (let i=0;i<arr.length-1;i++){
    if(arr[i]!=arr[i+1]){

       temp[j]=arr[i]
        j++;

}}

temp [j] = arr[arr.length-1]

console.log("remove duplicate in sorted array")

for (let i=0;i<temp.length;i++){
    console.log(temp[i])
}

