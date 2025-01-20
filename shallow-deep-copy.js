// primitive data types will be pass by value type and structural data types are pass by reference type

//primitive data types are immutable where as structural data types are mutable

// const array = [1, 2, 3];

// even though it's "const" still we can mutate structural types but we can't reassign new array;
// array.push(8);
// console.log(array);

// Primitive vs Structural Data Types

// Primitives data types pass values
// Structural data types pass references
// Primitives data types are immutable
// Reassignment is not the same as mutable
// Structural data types contain mutable data
// Shallow copy vs. Deep copy (clones of data structures)

// Shallow copies still share references of nested structures, which allows for mutation of the original data
// Object.freeze() creates a shallow freeze
// Deep copies share no references   
// All of this is important to know when constructing Pure Functions because they require you to avoid mutating the original data


const originalObject = {
    name: "Alice",
    age: 30,
    address: {
      street: "Main Street",
      city: "New York"
    }
  };
  
  const shallow = originalObject;
  originalObject.name = "sumanth";
  console.log(shallow);
  console.log(originalObject);

// Shallow copies still share references of nested structures, which allows for mutation of the original data
  const shallowCopy = { ...originalObject };
  
  shallowCopy.name = "Bob"; // Changes only the name in the shallow copy
  
  shallowCopy.address.city = "Los Angeles"; // Changes the city in both the original and the shallow copy

  // can't used for dates, functions, regExp, maps ...
  // Deep copies share no references    
  const deepCopy = JSON.parse(JSON.stringify(originalObject));

  deepCopy.name = "Charlie"; // Changes only the name in the deep copy
  
  deepCopy.address.city = "Miami"; // Changes the city only in the deep copy

  // can use libraries like loadash for deep copy