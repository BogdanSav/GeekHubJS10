const apis = ['http://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0', "https://cat-fact.herokuapp.com/facts", "https://api.coingecko.com/api/v3/exchange_rates"];
export default function fetchData() {
    let promises = [];
    apis.forEach((url) => {
        promises.push(fetch(url).then(responce => responce.json()))

    });
    return Promise.all(promises);
}
//