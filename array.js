// console.log(('helo\"').length);

// let word = 'give me rs 1000';

// word[2] = 'a'

// console.log(word);


// const arr = [20, 34, 34, 80, 90];

// const newarray = arr.map(num => {
//     return (num**2)
// });

// console.log(newarray);

// const arr = [1, 2, 3, 4]

// const newarr = arr.reduce( element => {
    
// })
// removing duplicates from an array
const firstArray = [1, 2, 3, 1, 2, 3, 4, 'Sumanth', 'ramu', 'Sumanth'];

const uniqArray = [...new Set(firstArray)];

const numArray = uniqArray.filter(value => typeof(value) === 'number')
console.log(numArray);

const stringArray = uniqArray.filter(value => typeof(value) === 'string')
console.log(stringArray);
