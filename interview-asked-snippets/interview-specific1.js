
// ---------------------------------------reverse an array elements

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

// 6 ------------  Check if an Array is a Subset of Another ---- 2

function isSubset (arr1, arr2) {

}

console.log(isSubset([]));