//Makes an array from start --> finish
function range(startNum, endNum, stepInput = 1) {
    let outputArray = new Array(Math.abs((startNum - endNum) / stepInput));
    let numAdd = 0;

    // Experimental conditional
    if (stepInput > 0) {
        numAdd = startNum;
        for (i = 0; i < outputArray.length; i++) {
            outputArray[i] = (numAdd);
            numAdd += stepInput;
        }
    }
    else if (stepInput < 0) {
        numAdd = startNum;
        for (i = 0; i < outputArray.length; i++) {
            outputArray[i] = (numAdd);
            numAdd += stepInput;
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
console.log(range(3, 15, 3));
// console.log(range(5, 2, -1));
