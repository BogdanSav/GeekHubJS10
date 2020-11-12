let task1Array = [
    [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1],
    [-1, -8, -2],
    [1, 7, 3],
    [1, undefined, 3, 5, -3],
    [1, NaN, 3, 5, -3]
]
let task2Array = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6];

function sum(array) {

    for (let i = 0; i < array.length; i++) {
        let sum = 0;
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j]) {
                sum += array[i][j];
            } else if (isNaN(array[i][j])) {
                continue;
            }

        }
        console.log("sum of ", i, " array:", sum);
    }
}

function min(array) {
    for (let i = 0; i < array.length; i++) {
        let min = array[i][0];
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] < min) {
                min = array[i][j];
            }
        }
        console.log("min of ", i, " array:", min);
    }
}

function max(array) {
    for (let i = 0; i < array.length; i++) {
        let max = array[i][0];
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > max) {
                max = array[i][j];
            }
        }
        console.log("max of ", i, " array:", max);
    }
}

function waterCount(rockHeight) {
    let lMax = 0;
    let rMax = 0;
    let left = 0;
    let right = rockHeight.length - 1;
    let sum = 0;
    while (left < right) {
        if (rockHeight[right] > rMax) {
            rMax = rockHeight[right];
        }
        if (rockHeight[left] > lMax) {
            lMax = rockHeight[left];
        }

        if (lMax >= rMax) {
            sum += rMax - rockHeight[right];
            right--;
        } else {
            sum += lMax - rockHeight[left];
            left++;
        }
    }
    console.log("count of water between rocks:", sum);


}
sum(task1Array);
min(task1Array);
max(task1Array);
waterCount(task2Array);