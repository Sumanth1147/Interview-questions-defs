// const a = {
//     name : "ramu",
//     age: 25
// }

// a.car = "alto 800 ac";


// console.log(a);

// const age = 2;

// if ( age > 10 && age < 20) {
//     console.log('age lies between 10 and 20')
// }


// const num = 7;
// let divisible = num % 2;
// let divisible3 = num % 3;


// const yes = ( divisible === 0 || divisible3 === 0) ? true:  false;
// console.log(yes);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// const data = {
//     arun: "student",
//     ramu : "job"
// }

// for (const key in data) {
//     console.log(key, data.key);
    
// }
// console.log(mean(1,1,1));
// function mean (a, b, c) {
//     return ((a + b + c)/3 );
// }

// result = mean(1, 1, 1)


// const mean = (a, b, c) => {
//     return ((a + b + c)/3 );
    
// }
//  exercise 9 faulty calulator ------- 
/**
 * returns faulty value at 10% of the times
 */
// function sum(a, b) {
//     if (Math.random() < 0.1) {
//         // console.log(Math.random());
//         return (a - b);
//     } else {
//         return (a + b);
//     }
// }

// function multiply(a, b) {
//     if (Math.random() < 0.1) {
//         return (a + b);
//     } else {
//         return (a*b);
//     }
// }

// function sub(a, b) {
//     if (Math.random() < 0.1) {
//         return (a / b);
//     } else {
//         return (a - b);
//     }
// }

// function divide(a, b) {
//     if (Math.random() < 0.1) {
//         return (a**b);
//     } else {
//         return (a / b);
//     }
// }


// for (let i = 0; i < 50; i++) {
    
//     console.log(sum(1,1));
    
// }

// const arr = [1,2,3]

// const num = prompt('enter a number')

// const newArray = arr.push(num)

// alert(`new array iss ${[arr]} `)

class Animal {
    constructor(name) {
        this.name = name;
    }

    eats() {
        console.log('I can eat,' + this.name);
    }

    jumps() {
        console.log('I can jump');
    }
}

class Monkey extends Animal {

}

const a = new Animal('animal1');
console.log(a);

const m = new Monkey('monkey');
console.log(m);

