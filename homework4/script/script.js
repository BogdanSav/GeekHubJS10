//#region isPrime
function isPrime(number) {
    let i = 2,
        j = 0;
    while (i * i <= number && j != 1) {
        if (number % i == 0) {
            j = 1;
            i++;
        } else i++;
    }
    if (j == 1) {
        return "not Prime";
    } else {
        return "Prime";
    }
}
for (let i = 1; i <= 100; i++) {
    console.log(i + " " + isPrime(i));
}
//#endregion
//#region  factorial
function factorial(number) {
    if (number != 1) {
        return number * factorial(number - 1);
    } else return 1;
}
// for (let i = 1; i <= 50; i++) {
//     console.log("factorial of" + i + ":" + factorial(i));
// }
//#endregion
//#region Fubonacci number
function fib(number) {
    let fibonacci = [0, 1];
    if (number === 0) {
        return 0;
    } else if (number === 1) {
        return 1;
    }
    for (let i = 2; i <= number; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}
// console.log("fib:", fib(20));
//#endregion
//#region reverse
function _reverse(string) {
    let innerString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        innerString += string[i];
    }
    return innerString;
}
let str = "Praesentium, voluptas et. Repudiandae itaque cum labore fuga modi molestias cumque eius fugit tempora pariatur";
console.log(`${str}\n${_reverse(str)}`);
//#endregion
//#region indexOf
function indexOf(array, i) {
    let result = -1;
    array.forEach((item, index) => {
        if (item === i) {
            result = index;
        }
    });
    return result;

}
console.log(indexOf([1, 2, 3, 4, 5, 6], 4));
//#endregion
//#region isPalindrome
function isPalindrome(string) {
    let innerString = Array.from(string);
    innerString.forEach((item, index, array) => {
        if (item === " ") {
            array.splice(array.indexOf(item), 1);
        }
    });
    let origStr = innerString.join('').toLowerCase();
    let reversed = innerString.reverse().join('').toLowerCase();

    console.log(`org:${origStr}\nrev:${reversed}`);
    if (origStr === reversed) {
        return true
    } else return false;


}
console.log(isPalindrome(''))
console.log(isPalindrome('abcdcba'))
console.log(isPalindrome('abcd'))
console.log(isPalindrome('A man a plan a canal Panama'));
//#endregion
//#region missing
function missing(array) {
    array.sort();
    let result = undefined;
    for (let i = 1; i < array.length; i++) {
        if (array[0] == 2) {
            result = 1;
        }
        if ((array[i] - array[i - 1]) != 1) {
            result = array[i] - 1;
            break;
        }
    }
    return result;
}
console.log(missing([1, 4, 3]));
console.log(missing([2, 3, 4]));
console.log(missing([5, 1, 4, 2]));
console.log(missing([1, 2, 3, 4]));
//#endregion