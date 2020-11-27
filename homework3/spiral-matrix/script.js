let R = 5,
    C = 5,
    r0 = 0,
    c0 = 0,
    n = 1;
let array = [];

function fillArray() {
    for (let i = 0; i < R; i++) {
        let innerArray = [];
        innerArray.length = C;
        for (let j = 0; j < C; j++) {

            innerArray.fill(0);
        }
        array.push(innerArray);
    }
}
fillArray();

console.log(array);