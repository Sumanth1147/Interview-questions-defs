// make it alternative



// 5 ------------------- alternate array --------------------

// function alternate (arr1, arr2) {
//   let result = []
//   const maxLength = Math.max(arr1.length, arr2.length)

//   for (i=0; i<maxLength; i++) {
//       if( i< arr1.length) result.push(arr1[i])
//       if( i< arr2.length) result.push(arr2[i])
//   }
// return result;
// }

// console.log(alternate([1,3,4,5,6], [2,3,4]));



// let str = 'abcdef'
// let str2 = 123
// output should be a1b2c3def

let str = 'abc'
let str2 = 123456
// a1b2c3456

function alternative (str, str2) {
    let first = str.toString();
    let second = str2.toString();

    let i = 0
    let j = 0
    let res = ''
    while(i < first.length && j < second.length) {
        res += first[i] + second[j];
        i++
        j++
    }
    

    res += first.substring(i) + second.substring(j);

  return res;
 
}

const fin = alternative(str, str2) 

console.log(fin);


// alternative

// const num = 1234;
// const string = 'abcdef'

// const num2 = 12345;
// const string2 = 'abc'

// function alternate(str1, str2) {
//   let altString = '';

//  let i = 0;
//   for (i = 0; i < str1.length && i < str2.length; i++) {
//     altString+=str1[i] + str2[i] ;
//   }

//   if (i >= str1.length) {
//     altString+=str2.slice(i, str2.length)
//   }

//   if (i >= str2.length) {
//     altString+=str1.slice(i, str1.length)
//   }

//   return altString
// }

// const stringNum = num.toString()
// const result = alternate(stringNum, string)

// console.log(result)