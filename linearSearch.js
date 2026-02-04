//wap to search an element in an array using linear search

//function to search an element in an array using linear search
function linearSearch(arr,target){
    //arr[] = [10, 23, 45, 7, 11, 4, 90]
    //target = 7

    //loop through the array
    for(let i=0;i<arr.length;i++){
        //check if the current element is equal to the target
        if(arr[i]===target){
        return i;
        }

    }
//if the target is not found, return -1 
return -1;

}


// create an array
const arr = [10, 23, 45, 7, 11, 4, 90];
const target = 7;

//call the function
const result= linearSearch(arr,target);


//print the result
if(result===-1)
{
    console.log("Element not found in the array");
}
else{
    console.log("Element found at index : ", result);
}

