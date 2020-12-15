let input = document.getElementById("input");
input.addEventListener("keyup", (e) => {
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => { console.log("done") }, 3000);

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