let nums = [2, 7, 11, 15];
let target = 9;
let temp = [];


for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]=== target){
            temp[0]=i;
            temp[1]=j;
            break;
        }
    }
}

console.log("the result is : ",temp);