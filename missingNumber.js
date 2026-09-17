let arr = [12, 7, 3, 9, 0, 5, 14, 2, 10, 6, 1, 8, 11, 4, 15]

let sum =0

for (let i=0;i<arr.length;i++){
    sum=sum+arr[i]
}

console.log("sum: " + sum)

let n = arr.length;
console.log("n: " + n)

let actual_sum = n*(n+1)/2

console.log("actual sum: " + actual_sum)

console.log("missing number: " , actual_sum-sum)