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

function reverseArrayInPlace(arrayInput) {
    let tempVal = arrayInput[arrayInput.length - 1];

    for (i = 0; i < arrayInput.length; i++) {
        arrayInput[i] = tempVal;
        console.log(tempVal);
        tempVal = arrayInput[arrayInput.length - (i + 2)];
    }

    return (arrayInput);
}

function arrayToList(arrayInput) {
    // arrayInput[value]

    // Might have to define length of list
    let listOutput = {};

for (i = arrayInput.length; i > 0; i--) {

}


}

function listToArray(listInput) {
    // listInput[value]

    // Might have to define length of the array
    let arrayOutput = [];

    let iterator = 0;
    while (listInput[value] != null) {
        arrayOutput[iterator] = listInput[value]
        iterator++;
    }

    return(arrayOutput);
}

function deepEqual(input1, input2) {

    if (input1 != null && input2 != null) {

        // if (input1 === input2) {
        //     return (true);
        // }
        // else if (typeof (input1) == "object" && typeof (input2) == "object") {
        //     return (true);
        // }
        // else {
        //     return (false);
        // }

        if ((typeof(input1) === "object") && typeof(input2) === "object") {
            // Something with Object.keys
        }

    }

}

//Calling the funcitons
console.log(sum(range(1, 10)));
console.log(reverseArray(["A", "B", "C", "D", "E"]) + " Better One");
console.log(reverseArrayInPlace(["A", "B", "C", "D", "E"]) + " Worse One");



// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// console.log(deepEqual(obj, {here: 1, object: 2}));
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));