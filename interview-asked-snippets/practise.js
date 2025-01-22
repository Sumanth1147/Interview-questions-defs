
// log each element of an array after 1 sec delay using setTimeout or setInterval
// here time difference will not increase with index, because all timers will start at once and the difference will be 1000 ms
// 1000, 2000, 3000 ...all timers start at once


const array = [1, 3, 5, 2, 8];

// setTimeout()
array.forEach((num, i) => {
    setTimeout(()=> {
        console.log(num);
    }, i*1000);
});

// index = 0;

//setInterval()
// const interval = setInterval(()=> {
//     if(index < array.length) {
//         console.log(array[index]);
//         index++;
//     } else {
//         clearInterval(interval);
//     }
// }, 1000);


// promise

// const array = [1, 2, 3, 4, 5];

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// (async function logArray() {
//   for (const element of array) {
//     console.log(element); // Logs one element at a time
//     await delay(1000);    // Waits 1 second before moving to the next
//   }
// })();

// const array = [1, 2, 3, 4];

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms) );

// (async function logArray() {
//     for(const element of array) {
//         console.log(element);
//         await delay(1000);
//     }

// })();


// useEffect(() => {


// return test = () => {
    
// }

// }, [])




