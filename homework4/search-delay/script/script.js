let input = document.getElementById("input");
let timeout;
input.addEventListener("keyup", (e) => {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(() => { console.log("done") }, 300);

});


//
// let promice = function(res, rej) {
//     res.call(null);
//     rej.call(null);
// }
// promice()
//     .then(
//         result => console.log(result),
//         error => { new Error(console.error(error)) }
//     )