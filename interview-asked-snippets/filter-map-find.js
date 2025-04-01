// Key Differences:
// Feature	                filter                                                   	find
// Purpose        	Returns all elements that match a condition	    Returns the first element that matches a condition
// Return Value	    A new array (empty if no matches)	       The first matching element (or undefined if no match)
// Iteration	   Iterates through the entire array           	Stops iterating after the first match


// Key Differences:
// Feature	                        map         	filter
// Purpose	Transforms each element in the array	    Selects elements based on a condition
// Return Value	New array of the same length	       New array with fewer or equal elements
// Callback	Returns the transformed value	         Returns true or false

// To create a React app with TypeScript, you can use the create-react-app tool with the --template typescript flag. Here's the command:

// npx create-react-app my-app --template typescript

// Alternative: Using Vite
// If you prefer a faster and more modern setup, you can use Vite to create a React + TypeScript app:

// bash
// Copy
// npm create vite@latest my-app -- --template react-ts


// ---------------------------------------------  innerText     -------- textContent
// const element = document.getElementById("example");

// console.log(element.innerHTML);  
// // Output: "<strong>Hello</strong> World!<span style="display: none;">Hidden Text</span>"

// console.log(element.innerText);  
// // Output: "Hello World!"

// console.log(element.textContent);  
// // Output: "Hello World!Hidden Text"