//Makes an array from start --> finish
function range(startNum, endNum, stepInput = 1) {
    let outputArray = new Array(Math.abs(startNum - endNum));

    // Positive stepInput
    if (stepInput > 0) {
        for (i = 0; i <= outputArray.length; i += stepInput) {
            outputArray[i] = (startNum + i);
        }
    }
    // Negative stepInput
    else if (stepInput < 0) {
        for (i = 0; i <= outputArray.length; i += stepInput) {
            outputArray[i] = (endNum + i);
        }
    }

    //Checks for undefined values in outputArray
    for (i = 0; i < outputArray.length; i++) {
        if (isNaN(outputArray[i])) {
            outputArray.splice(i, 1);
        }
    }

    // return(outputArray);
    console.log(outputArray);
}

//Takes array, and adds the sum of all numbers inside.
function sum(arrayInput) {
    let sum = 0;
    const inputArray = arrayInput;

    for (i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }

    console.log(sum);
}



//Calling the funcitons
console.log(range(2, 10, 2));
console.log(range(5, 2, -1));
