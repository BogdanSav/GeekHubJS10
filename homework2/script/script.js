//#region Cycle_For
function cycleFor(start, condidtion, step) {

    if (start < condidtion) {
        start += step;
        console.log("iteration");
        cycleFor(start, condidtion, step);
    } else console.log(start);
}

cycleFor(2, 10, 1);
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


//#endregion
//region array methods


//#endregion