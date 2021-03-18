import { takeLeading, put, call } from "redux-saga/effects";
import { GET_DATA } from "./actions"
const apis = ['http://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0', "https://cat-fact.herokuapp.com/facts", "https://api.coingecko.com/api/v3/exchange_rates"];

export function* sagaWatcher() {
    yield takeLeading(GET_DATA, getData)
}

function* getData() {
    const payload = yield call(dataFromApis);

    yield console.log(payload);
    yield put({ type: GET_DATA, payload });
}
async function dataFromApis() {
    const data = apis.map(url => {
        return fetch(url).then(response => response.json()).then(data => data);
    })
    return Promise.all(data);
}