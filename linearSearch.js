function linearSearch(arr,target){

 for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
       return i;
    }

 }
 
 return -1;

}


// create an array
const arr = [10, 23, 45, 7, 11, 4, 90];
const target = 7;


const result= linearSearch(arr,target);

if(result===-1)
{
    console.log("Element not found in the array");
}
else{
    console.log("Element found at index : ", result);
}

