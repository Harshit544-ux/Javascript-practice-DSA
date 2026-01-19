//write the function to remove duplicate elements from a sorted array
function removeDupplicate(arr) {
    //loop through the array
    for (let i = 0; i < arr.length; i++) {
         
         // condition to check if current element is not equal to previous element
         // 1 !== 2
        if (arr[i] !== arr[i - 1]) {
            uniqueArr.push(arr[i]);
        }
       
    }
    //return the array with unique elements
    return uniqueArr;

}

//create an array with duplicate elements
const arr = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];
//array to store unique elements
const uniqueArr = [];

//call the function
const result = removeDupplicate(arr);

//print the array after removing the duplicates
console.log("Array after removing duplicates :", result);






