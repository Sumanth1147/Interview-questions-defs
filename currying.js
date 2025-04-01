// Currying is a functional programming technique where a function with multiple arguments is transformed into a series of functions, 1  each taking a single argument. 

//  It's a powerful tool for creating more flexible and reusable functions
// even though if we dont pass all the arguments, it will not through the error

// normal func 
function add(x, y) {
    return x + y;
  }


  // currying 

  function addX(x) {
    return function(y) {
      return x + y;
    };
  }

  const add5 = addX(5)

  console.log(add5(10));

  