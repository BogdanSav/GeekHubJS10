let github = document.getElementById("github");
let cats = document.getElementById("cats");
let currency = document.getElementById("currency");

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    .then(response => response.json())
    .then(commits => {
        github.innerText = JSON.stringify(commits[5].commit);
    })
    .then(() => fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(file => cats.innerText = JSON.stringify(file))
        .then(() => {
            fetch("https://currencyapi.net/api/v1/rates?key=i816RTk7BxrhOTSrr7HHEPBQP32lDzmnNXRd")
                .then(response => response.json())
                .then(item => currency.innerText = JSON.stringify(item));

        }))