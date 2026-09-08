// find maximum number in an array

let array = [4,3,5,2,1,6]

let max = array[0];  // max = 4


for (let i=1;i<=5;i++){

    if (array[i]>max){
      max = array[i];
    }

}

console.log("the maximum number is :" ,max) // after the loop stop i got the maximum number in the array