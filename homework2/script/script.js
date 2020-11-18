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


//#endregion
//#region calculate
function calculate(a) {
    this.firstArg = a;
    this.add = function(b) {
        return this.firstArg + b;

    }
}
let calc = new calculate(3);
console.log(calc.add(2));
//#endregion