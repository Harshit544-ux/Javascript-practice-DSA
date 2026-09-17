//remove duplicate in sorted array

let arr = [1,2,2,3,4,4,5,5,5]

let temp = [ ];

for (let i=0;i<arr.length;i++){
    if(arr[i]!=arr[i+1]){
        temp.push(arr[i])
    }
}

console.log(temp)