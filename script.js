//Makes an array from start --> finish
function range(startNum, endNum, stepInput = 1) {
    let outputArray = new Array(Math.abs((startNum - endNum) / stepInput - 1));
    let numAdd = startNum;

    // Experimental conditional
    for (i = 0; i < outputArray.length; i++) {
        outputArray[i] = (numAdd);
        numAdd += stepInput;
    }

    return (outputArray);
}

//Takes array, and adds the sum of all numbers inside.
function sum(arrayInput) {
    let sum = 0;
    const inputArray = arrayInput;

    for (i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }

    return (sum);
}

function reverseArray(arrayInput) {
    let arrayOutput = new Array(arrayInput.length);
    let tempVal = arrayInput[arrayInput.length - 1];

    for (i = 0; i < arrayInput.length; i++) {
        arrayOutput[i] = tempVal;
        tempVal = arrayInput[arrayInput.length - (i + 2)];
    }

    return (arrayOutput);
}

function reverseArrayInPlace() {

}

//Calling the funcitons
console.log(sum(range(1, 10)));
console.log(reverseArray(["A", "B", "C"]));
// reverseArrayInPlace(arrayValue);
