//wap to check if the array is sorted or not


// function to check if the array is sorted
function isSortedArray(arr)
{
    // arr[] = [1,2,2,3,3,4]

    //loop through the array
    for (let i=1;i<=arr.length-1;i++){
        //check if the current element is greater than the previous element
        if(arr[i]>=arr[i-1]){
              continue;
        }
        else{
            //if the current element is not greater than the previous element, return false
            return false;
        }
    }
    //if the array is sorted, return true
    return true;
}



//initialize the array
const arr=[1,2,2,3,3,4];

//call the function
const result=isSortedArray(arr);

//print the result
if(result==true){
    console.log("array is sorted")
}

if(result==false){
    console.log("array is not sorted")
}
