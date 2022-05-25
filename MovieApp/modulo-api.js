// usare la mia url e debuggare sul browser

const URL_LIST_HARRY_POTTER = "https://www.omdbapi.com/?apikey=d1b45642&s=harry%20potter&type=movie";

export const listHarryPotter = () => {
    fetch(URL_LIST_HARRY_POTTER).then((response) => response.json()).then((results) => {
        const movies = results.Search;
        console.log(movies);
    });
}