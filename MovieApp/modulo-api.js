/* 
import {apilist} from "./modulo-api.js";
import {CONTENT_TYPE} from "./config.js";

console.log("Inizio esecuzione.");

// apilist("harry potter","");

apilist("harry potter", CONTENT_TYPE.MOVIE);

apilist("harry potter","series");
// filtro i film
listHarryPotter();
// filtro le serie televisive
listSeriesHarryPotter();

console.log("Fine esecuzione...");
*/

import {BASE_URL} from "./config.js";

export const apilist = (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    fetch(url).then((response) => response.json()).then((results) => {
        const items = results.Search;
        // qui chiamo viewItems
        viewItems(items);
    });
}

// estrapola ogni elemento dell'array e stampa le proprietà
const viewItems = (items) => {
    // es6 introduce metodi + efficenti, esiste il metodo map, proprio egli array
    // map cicla l'array e per ogni elemento chiama la funzione di callback con argomento ciascun elemento dell'array
    
    // 1.ciclare l'array
    items.map((item) => {
        // 2.estrapolare un item
        // console.log(item);
        // 3.estrapolare solo le proprietà che ci servono
        //   le prop sono Title, Year, Poster e Type
        console.group(item.Title);// qui inizia un gruppo di elementi
        console.log(item.Year);
        console.log(item.Type);
        console.log(item.Poster);
        console.groupEnd();// qui termina il gruppo meglio formattato
    });
}

// quando passo una funzione come parametro non metto le parentesi tonde, solo quando la eseguo


























/* // usare la mia url e debuggare sul browser

const URL_LIST_HARRY_POTTER = "https://www.omdbapi.com/?apikey=d1b45642&s=harry%20potter";

// chiama la web api con tutti i contenuti di harry potter
export const listHarryPotter = () => {
    fetch(URL_LIST_HARRY_POTTER).then((response) => response.json()).then((results) => {
        const movies = results.Search;
        console.log(movies);
    });
}

// chiama la web api e restituisce solo le serie televisive di "harry potter"

const URL_LIST_SERIES_HARRY_POTTER = "https://www.omdbapi.com/?apikey=d1b45642&s=harry%20potter&type=series";

export const listSeriesHarryPotter = () => {
    fetch(URL_LIST_SERIES_HARRY_POTTER).then((response) => response.json()).then((results) => {
        const series = results.Search;
        console.log(series);
    });
} */

