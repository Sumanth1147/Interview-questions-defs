
// A closure is a function that has access to variables in its outer (enclosing) function's scope, even after the outer function has returned. 
// currying is also example of closure
let x =1;

const parentFunction = () => {
    let myVar = 3;
    console.log(x);
    console.log(myVar);

    const childrenFunction = () => {
        console.log(myVar+=3);
        console.log(x+=1);
    }

    return childrenFunction;
}

const result = parentFunction();
// console.log(myVar);

result(); // output: 1
// 3
// 6
// 2

result(); //output: 1
// 3
// 6
// 2
// 9
// 3
console.log(x);
// console.log(myVar); // reference error: myVar is not defined