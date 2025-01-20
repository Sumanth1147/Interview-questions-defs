const initArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function pyramid(initArray) {
    let index = 0;

    for (let row = 1; index < initArray.length; row++) {
        const rowArray = [];
        for (let i = 0; i < row && index < initArray.length; i++) {
            rowArray.push(initArray[index]);
            index++;
        }
        console.log(rowArray.join(' '));
    }
}

pyramid(initArray);