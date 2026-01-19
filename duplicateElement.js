//create an array with some duplcate elments
const arr = [1, 1,3, 2 , 2 , 4, 5, 6, 4];

//another array to store duplicate elements
const duplicates = [];

// loop through the array
for(let i=0 ;i<arr.length;i++){
    //check for duplicate elements
    // 1 === 1
    if(arr[i]===arr[i+1]){
        duplicates.push(arr[i]);
    }
}

//print the duplicate elements
console.log("Duplicate elements in the array are : ", duplicates);