// usare la mia url e debuggare sul browser

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
}