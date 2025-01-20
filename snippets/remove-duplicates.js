// removing duplicates from an array
const firstArray = [1, 2, 3, 1, 2, 3, 4, 'Sumanth', 'ramu', 'Sumanth'];

const uniqArray = [...new Set(firstArray)];

const numArray = uniqArray.filter(value => typeof(value) === 'number')
console.log(numArray);

const stringArray = uniqArray.filter(value => typeof(value) === 'string')
console.log(stringArray);

// 

// const exArray = [1, 1,{}  ,3 , 4, 4]

// // const uniqueArray = exArray.filter((value, index, self) => self.indexOf(value) === index);
//
///////
// let uniqueArray = []

// exArray.forEach((value) => {
//     if(!uniqueArray.includes(value)) {
//         uniqueArray.push(value)
//     }
// })

// console.log(uniqueArray);
