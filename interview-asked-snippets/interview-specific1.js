
// ---------------------------------------reverse an array elements


// refer for js interview tricky questions-- https://www.codinn.dev/tricky-javascript/es6789-code-snippets-interview-questions


//  1 ---------------------------------------------1
// const exArray = [1,2,3,4,5]

// const final = (arr) => arr.reverse();

// const result = final(exArray)
// console.log(result);

// ------------------------------------reverse an array ---  2
// function rev(arr) {
//     let i;
//     let revarray = []
//     for (i = arr.length - 1; i >=0; i--) {
//         revarray.push(arr[i])
//     }

//     return revarray
// }

// console.log(rev([1,2,3,4,5]));  

//  2   ----------------------------------------------------------sort an array --- 1 
// const result = (arr) => arr.sort((a, b) => (a-b))

// console.log(result([4,3,6,8,1])); 

// ----------------------------------------------------  sort an array --- 2
// function sort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j= i+1; j< arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }
// console.log(sort([2,5,1,9,3,6]));

//  3  ---------------------------------------- find max num in an array ---- 1
// const arr = [3, 4, 7 ,9 ,2, 5, 1]
// const result = Math.max(...arr);

// console.log(result);

// 3  ------------------------------------------find max num in an array ---- 2

// function maxNum(arr) {
//     let max = arr[0];
//     for (let i = 1; i<arr.length; i++) {
//         if (arr[i] > max) max = arr[i];
//     }
//     return max
// }

// console.log(maxNum([1,7,4,8,9,2,4]));

// 4 ----------------------------------------- flatten array  ----- 1

// const flattenArray = (arr) => arr.flat(Infinity);
// console.log(flattenArray([1, [2, [3, 4], 5]])); // Output: [1, 2, 3, 4, 5]

// 4 ----------------------------------------- flatten array  ----- 2

//  function flattenArray(arr) {
//     const result = []
//     function helper(subArray) {
//         for(let i=0; i< subArray.length; i++) {
//             if(Array.isArray(subArray[i])) {
//             helper(subArray[i])
//             } else {
//                 result.push(subArray[i])
//             }
//         }
        
//     }
//     helper(arr)
//     return result
// }

// console.log(flattenArray([1, [2, [6, 6]], 7]));

// 5 ------------------- alternate array --------------------

// function alternate (arr1, arr2) {
//     let result = []
//     const maxLength = Math.max(arr1.length, arr2.length)

//     for (i=0; i<maxLength; i++) {
//         if( i< arr1.length) result.push(arr1[i])
//         if( i< arr2.length) result.push(arr2[i])
//     }
// return result;
// }

// console.log(alternate([1,3,4,5,6], [2,3,4]));

// 6 ------------  Check if an Array is a Subset of Another ---- 1
// const isSubset = (arr1, arr2) => arr2.every((val) => arr1.includes(val));

// console.log(isSubset([1,2,3,4,5], [1,4]));

// ------------------6 ------------  Check if an Array is a Subset of Another ---- 2

// function isSubset (arr1, arr2) {
//     for(let i = 0; i< arr2.length; i++) {
//         if(!(arr1.includes(arr2[i]))) return false
//     }
//     return true;
// }

// console.log(isSubset([1,2,3,4,7,8,9], [1,2,3,0]));

// ----------------------------------// 7 Count the Frequency of Elements in an Array       --------------------------- 1
// function countFrequency(arr) {
//     let result = {}
//     for (let i=0; i< arr.length; i++) {
//         result[arr[i]] = (result[arr[i]] || 0) + 1;
//     }

//     return result;
// }

// console.log(countFrequency([1,2,2,3,3,4,4,6,6,5,5,5]));

// ------------------------------// 7 Count the Frequency of Elements in an Array with reduce       --------------------------- 2
// const countFrequency = (arr) => {
//     return arr.reduce((acc, val) => {
//       acc[val] = (acc[val] || 0) + 1;
//       return acc;
//     }, {});
//   };
//   console.log(countFrequency([1, 2, 2, 3, 3, 3])); // Output: { 1: 1, 2: 2, 3: 3 }

//  ----------------------------------  8   Find the Missing Number in a Sequence ------------------------ 1
// const findMissing = (arr) => {
//   const n = arr.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = arr.reduce((a, b) => a + b, 0);
//   return expectedSum - actualSum;
// };
// console.log(findMissing([1, 2, 4, 5])); // Output: 3

//  ---------------------  8   Find the Missing Number in a Sequence ------------------------ 1

function findMissing(arr) {
    let actualSum =0; let currentSum=0;
    let n = arr.length + 1;
    for (let i=1; i<= n; i++) {
        actualSum+=i;
    }

    for (let i=0; i< arr.length; i++) {
        currentSum+=arr[i];
    }

    return actualSum-currentSum;
}

console.log(findMissing([1,2,3,5,6]));

//  ---------------------------------------------   9 - Implement a function that returns an updated array with r
// right rotations on an array of integers a .
// Example:
// Given the following array: [2,3,4,5,7]
// Perform 3 right rotations:
// First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]
// return [4,5,7,2,3]
// Answer:
function rotateRight(arr,rotations){
if(rotations == 0) return arr;
for(let i = 0; i < rotations;i++){
let element = arr.pop();
arr.unshift(element);
}
return arr;
}
rotateRight([2, 3, 4, 5, 7], 3); // Return [4,5,7,2,3]
rotateRight([44, 1, 22, 111], 5); // Returns [111,44,1,22]



//   -------------------------------------- 9 ----rotate array without inbuilt methods


function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n; // Handle cases where k > n

    let rotatedArr = new Array(n); // Create a new array of the same size

    // Manually copy elements to rotated positions
    for (let i = 0; i < n; i++) {
        let newPosition = (i + k) % n;
        rotatedArr[newPosition] = arr[i];
    }

    // Copy rotatedArr values back to the original array
    for (let i = 0; i < n; i++) {
        arr[i] = rotatedArr[i];
    }
}

// Example Usage:
let arr = [1, 2, 3, 4, 5];
let k = 2;
rotateArray(arr, k);
console.log(arr); 
// Output: [4, 5, 1, 2, 3]


// find repeated words in a paragraph, remove them
// sort array of strings in alphabetical order

     1    
    1 2
   1 2 3
  1 2 3 4
 1 2 3 4 5