//#region Cycle_For
function cycleFor(start, condidtion, step, callback) {

    if (start < condidtion) {
        start += step;
        callback.call(null, start, condidtion, step);
        cycleFor(start, condidtion, step, callback);
    } else console.log(start);
}

cycleFor(2, 10, 1, function() {
    console.log(1);
});
//#endregion
//#region sum(1)(2)(3)
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

function sumFunc(a, b, c) {
    return a + b + c;
}
let sum = curry(sumFunc);
console.log(sum(1)(2)(3));
//#endregion
//#region calculate
let Calc = function(inputValue) {
    this.value = inputValue;
};
Calc.prototype.add = function(number) {
    this.value += number;
    return this;
};
Calc.prototype.multiply = function(number) {
    this.value *= number;
    return this;
}
Calc.prototype.result = function() {
    return this.value;
}
let calculate = new Calc(3);
let result = calculate.add(2).multiply(2).result();
console.log("calculate:", result);
//#endregion
//#region array methods
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback.call(null, this[i], i, this);
    }
};
Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result[i] = callback.call(null, this[i], i, this);
    }
    return result;
}
Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback.call(null, this[i], i, this)) {
            result[i] = this[i];
        }
    }
    return result;
}
Array.prototype.myFind = function(callback) {
    let result;
    for (let i = 0; i < this.length; i++) {
        if (callback.call(null, this[i], i, this)) {
            result = this[i];
            break;
        }
    }
    return result;
};
//#endregion
//#region test
let arr = [2, 2, 3, 1, 5, 6, 1, 12, 1, 56, 34, 45];
arr.myForEach((item, i, array) => {
    console.log(item, i, array);
})

let mapArr = arr.myMap((item) => {
    return item * 2;
});
console.log(mapArr);
let filterArr = arr.myFilter((item) => {
    return item < 3;
})
console.log(filterArr);
let findArr = arr.myFind((item) => {
    return item < 3;
})
console.log(findArr);
//#endregion