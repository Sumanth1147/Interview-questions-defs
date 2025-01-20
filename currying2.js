const curry = (fn) => {
    const curried = (...args) => {
        if (fn.length !== args.length) {
            // fn.length is length of parameters
            console.log(...args); // Logs intermediate arguments
            return curried.bind(null, ...args); // Partially applies arguments
        }
        return fn(...args); // Executes the function when all arguments are provided
    };
    return curried;
};

// Example function
const total = (x, y, z) => x + y + z;

// Curried version of the function
const curriedTotal = curry(total);

// Using the curried function
console.log(curriedTotal(10)(20)(30)); // Logs 60