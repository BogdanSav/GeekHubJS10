let input = document.getElementById("input");
input.addEventListener("keyup", (e) => {
    let timeout = setTimeout(() => { console.log("done") }, 2000);
});


//
let promice = function(res, rej) {
    res.call(null);
    rej.call(null);
}
promice()
    .then(
        result => console.log(result),
        error => { new Error(console.error(error)) }
    )