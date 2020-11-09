let array = [1, undefined, 3, 5, -3];

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === undefined || NaN) {
            continue;
        }
        sum += array[i];
    }
    console.log("sum:", sum);
}

function min(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }

    }
    console.log("min:", min);
}

function max(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }

    }
    console.log("max:", max);
}

function waterCount(rockHeight) {
    let maxHeight = rockHeight[0];
    for (let i = 0; i < rockHeight.length; i++) {


    }
}
sum(array);
min(array);
max(array);