import { BASE_URL, FILM, ID_SERIES, ID_PLOT, ID_PLOT_SERIES, ID_MOVIE, ID_H5, ID_YEAR, ID_RUN, ID_DIR, ID_PREV, ID_PREV_SER , IDIMG_SERIES,ID_H5_SERIES,ID_YEAR_SERIES,ID_RUN_SERIES, ID_RATE_SERIES, ID_WRITER_SERIES } from "./config.js";
import { formattaruntime, formattaruntimeseries } from "./util.js";

export const apifilm = async (titolo) => {
    const url = BASE_URL + `t=${titolo}`;

    const response = await fetch(url);
    const result = await response.json();
    modificacardfilm(result);
}

//funz per visualizzare un film
const modificacardfilm = async (film) => {
    //mostro il poster cambiando il contenuto di src
    let id_img = "";
    switch (true) {
        case (film.Title == FILM.HP):
            id_img = ID_MOVIE.HP;
            break;
        case (film.Title == FILM.LOR):
            id_img = ID_MOVIE.LOR;
            break;
        case (film.Title == FILM.PIRATES):
            id_img = ID_MOVIE.PIRATES;
            break;
    }
    const tagimg = document.getElementById(id_img);
    tagimg.src = film.Poster;

    //mostro il titolo cambiando il contenuto di h5
    let id_cardtit = "";
    switch (true) {
        case (film.Title == FILM.HP):
            id_cardtit = ID_H5.HP;
            break;
        case (film.Title == FILM.LOR):
            id_cardtit = ID_H5.LOR;
            break;
        case (film.Title == FILM.PIRATES):
            id_cardtit = ID_H5.PIRATES;
            break;
    }
    const tagh5 = document.getElementById(id_cardtit);
    tagh5.textContent = film.Title;
    
    //mostro l'anno di uscita cambiando il contenuto del p
    let id_cardyear = "";
    switch (true) {
        case (film.Title == FILM.HP):
            id_cardyear = ID_YEAR.HP;
            break;
        case (film.Title == FILM.LOR):
            id_cardyear = ID_YEAR.LOR;
            break;
        case (film.Title == FILM.PIRATES):
            id_cardyear = ID_YEAR.PIRATES;
            break;
    }
    const tagpyear = document.getElementById(id_cardyear);
    tagpyear.textContent = "Year: " + film.Year;

    //mostro la durata del film cambiando il contenuto del p
    let id_cardrunt = "";
    switch (true) {
        case (film.Title == FILM.HP):
            id_cardrunt = ID_RUN.HP;
            break;
        case (film.Title == FILM.LOR):
            id_cardrunt = ID_RUN.LOR;
            break;
        case (film.Title == FILM.PIRATES):
            id_cardrunt = ID_RUN.PIRATES;
            break;
    }
    const tagprunt = document.getElementById(id_cardrunt);
    //cambio formato al runtime eliminando "min"
    tagprunt.textContent = "Runtime: " + formattaruntime(film) + "''";

    //mostro la regia del film cambiando il contenuto del p
    let id_carddir = "";
    switch (true) {
        case (film.Title == FILM.HP):
            id_carddir = ID_DIR.HP;
            break;
        case (film.Title == FILM.LOR):
            id_carddir = ID_DIR.LOR;
            break;
        case (film.Title == FILM.PIRATES):
            id_carddir = ID_DIR.PIRATES;
            break;
    }
    const tagpdir = document.getElementById(id_carddir);
    tagpdir.textContent = "Direction: " + film.Director;
};


export const createmodalfilm = async (a_movie_tag) => {

    let idmovieh4 = "";
    switch (true) {
        case (a_movie_tag.id == ID_PREV.HP):
            idmovieh4 = "title-modal1";
            break;
        case (a_movie_tag.id == ID_PREV.LOR):
            idmovieh4 = "title-modal2";
            break;
        case (a_movie_tag.id == ID_PREV.PIRATES):
            idmovieh4 = "title-modal3";
            break;
    }

    const modaltitle = document.getElementById(idmovieh4);

    //setto il titolo del film per il modal
    let film = "";
    switch (true) {
        case (idmovieh4 == "title-modal1"):
            film = FILM.HP;
            break;
        case (idmovieh4 == "title-modal2"):
            film = FILM.LOR;
            break;
        case (idmovieh4 == "title-modal3"):
            film = FILM.PIRATES;
            break;
    }

    modaltitle.textContent = film;

    //setto la src dell'immagine
    let idmoviesrc = "";
    switch (true) {
        case (a_movie_tag.id == ID_PREV.HP):
            idmoviesrc = "harry_col";
            break;
        case (a_movie_tag.id == ID_PREV.LOR):
            idmoviesrc = "lor_col";
            break;
        case (a_movie_tag.id == ID_PREV.PIRATES):
            idmoviesrc = "pirates_col";
            break;
    }

    let idmovieimg = "";
    switch (true) {
        case (idmoviesrc == "harry_col"):
            idmovieimg = "img-modal1";
            break;
        case (idmoviesrc == "lor_col"):
            idmovieimg = "img-modal2";
            break;
        case (idmoviesrc == "pirates_col"):
            idmovieimg = "img-modal3";
            break;
    }

    let modalimg = document.getElementById(idmovieimg);
    modalimg.setAttribute("src", document.getElementById(idmoviesrc).getAttribute("src"));

    const url = BASE_URL + `t=${film}`;

    const response = await fetch(url);
    const result = await response.json();

    let idmovieplot = "";
    switch (true) {
        case (a_movie_tag.id == ID_PREV.HP):
            idmovieplot = "plot-modal1";
            break;
        case (a_movie_tag.id == ID_PREV.LOR):
            idmovieplot = "plot-modal2";
            break;
        case (a_movie_tag.id == ID_PREV.PIRATES):
            idmovieplot = "plot-modal3";
            break;
    }

    const modalplot = document.getElementById(idmovieplot);
    modalplot.textContent = result.Plot;

    let idmoviegen = "";
    switch (true) {
        case (a_movie_tag.id == ID_PREV.HP):
            idmoviegen = "gen-modal1";
            break;
        case (a_movie_tag.id == ID_PREV.LOR):
            idmoviegen = "gen-modal2";
            break;
        case (a_movie_tag.id == ID_PREV.PIRATES):
            idmoviegen = "gen-modal3";
            break;
    }

    const modalgen = document.getElementById(idmoviegen);
    modalgen.textContent = result.Genre;
};

//api per series
export const apiseries = async (idseries) => {
    const url = BASE_URL + `i=${idseries}&plot=full`;

    const response = await fetch(url);
    const result = await response.json();
    modificacardseries(result);
}


//funz per visualizzare una series
const modificacardseries = async (series) => {
    //mostro il poster cambiando il contenuto di src
    let id_img = "";
    switch (true) {
        case (series.imdbID == ID_SERIES.TITANS):
            id_img = IDIMG_SERIES.TITANS;
            break;
        case (series.imdbID == ID_SERIES.BOYS):
            id_img = IDIMG_SERIES.BOYS;
            break;
        case (series.imdbID == ID_SERIES.WITCHER):
            id_img = IDIMG_SERIES.WITCHER;
            break;
    }
    const tagimg = document.getElementById(id_img);
    tagimg.src = series.Poster;

    //mostro il titolo cambiando il contenuto di h5
    let id_cardtit = "";
    switch (true) {
        case (series.imdbID == ID_SERIES.TITANS):
            id_cardtit = ID_H5_SERIES.TITANS;
            break;
        case (series.imdbID == ID_SERIES.BOYS):
            id_cardtit = ID_H5_SERIES.BOYS;
            break;
        case (series.imdbID == ID_SERIES.WITCHER):
            id_cardtit = ID_H5_SERIES.WITCHER;
            break;
    }
    const tagh5 = document.getElementById(id_cardtit);
    tagh5.textContent = series.Title;
    
    //mostro l'anno di uscita cambiando il contenuto del p
    let id_cardyear = "";
    switch (true) {
        case (series.imdbID == ID_SERIES.TITANS):
            id_cardyear = ID_YEAR_SERIES.TITANS;
            break;
        case (series.imdbID == ID_SERIES.BOYS):
            id_cardyear = ID_YEAR_SERIES.BOYS;
            break;
        case (series.imdbID == ID_SERIES.WITCHER):
            id_cardyear = ID_YEAR_SERIES.WITCHER;
            break;
    }
    const tagpyear = document.getElementById(id_cardyear);
    tagpyear.textContent = "Year: " + series.Year;

    //mostro la durata del film cambiando il contenuto del p
    let id_cardrunt = "";
    switch (true) {
        case (series.imdbID == ID_SERIES.TITANS):
            id_cardrunt = ID_RUN_SERIES.TITANS;
            break;
        case (series.imdbID == ID_SERIES.BOYS):
            id_cardrunt = ID_RUN_SERIES.BOYS;
            break;
        case (series.imdbID == ID_SERIES.WITCHER):
            id_cardrunt = ID_RUN_SERIES.WITCHER;
            break;
    }
    const tagprunt = document.getElementById(id_cardrunt);
    //cambio formato al runtime eliminando "min"
    tagprunt.textContent = "Runtime: " + formattaruntimeseries(series) + "''";

    //mostro la regia del film cambiando il contenuto del p
    let id_cardrate = "";
    switch (true) {
        case (series.imdbID == ID_SERIES.TITANS):
            id_cardrate = ID_RATE_SERIES.TITANS;
            break;
        case (series.imdbID == ID_SERIES.BOYS):
            id_cardrate = ID_RATE_SERIES.BOYS;
            break;
        case (series.imdbID == ID_SERIES.WITCHER):
            id_cardrate = ID_RATE_SERIES.WITCHER;
            break;
    }
    const tagpdir = document.getElementById(id_cardrate);
    tagpdir.textContent = "Rating: " + series.Ratings[0].Value;
};

export const createmodalseries = async (a_series_tag) => {

    let idseriesh4 = "";
    switch (true) {
        case (a_series_tag.id == ID_PREV_SER.TITANS):
            idseriesh4 = "title-modal4";
            break;
        case (a_series_tag.id == ID_PREV_SER.BOYS):
            idseriesh4 = "title-modal5";
            break;
        case (a_series_tag.id == ID_PREV_SER.WITCHER):
            idseriesh4 = "title-modal6";
            break;
    }

    const modaltitle = document.getElementById(idseriesh4);

    //setto il titolo del film per il modal
    let series = "";
    switch (true) {
        case (idseriesh4 == "title-modal4"):
            series = document.getElementById(ID_H5_SERIES.TITANS).textContent;
            break;
        case (idseriesh4 == "title-modal5"):
            series = document.getElementById(ID_H5_SERIES.BOYS).textContent;
            break;
        case (idseriesh4 == "title-modal6"):
            series = document.getElementById(ID_H5_SERIES.WITCHER).textContent;
            break;
    }

    modaltitle.textContent = series;

    //setto la src dell'immagine
    let idseriessrc = "";
    switch (true) {
        case (a_series_tag.id == ID_PREV_SER.TITANS):
            idseriessrc = IDIMG_SERIES.TITANS;
            break;
        case (a_series_tag.id == ID_PREV_SER.BOYS):
            idseriessrc = IDIMG_SERIES.BOYS;
            break;
        case (a_series_tag.id == ID_PREV_SER.WITCHER):
            idseriessrc = IDIMG_SERIES.WITCHER;
            break;
    }

    let idseriesimg = "";
    switch (true) {
        case (idseriessrc == IDIMG_SERIES.TITANS):
            idseriesimg = "img-modal4";
            break;
        case (idseriessrc == IDIMG_SERIES.BOYS):
            idseriesimg = "img-modal5";
            break;
        case (idseriessrc == IDIMG_SERIES.WITCHER):
            idseriesimg = "img-modal6";
            break;
    }

    let modalimg = document.getElementById(idseriesimg);
    modalimg.setAttribute("src", document.getElementById(idseriessrc).getAttribute("src"));


    let idtocall = "";
    switch (true) {
        case (a_series_tag.id == ID_PREV_SER.TITANS):
            idtocall = ID_SERIES.TITANS;
            break;
        case (a_series_tag.id == ID_PREV_SER.BOYS):
            idtocall = ID_SERIES.BOYS;
            break;
        case a_series_tag.id == (ID_PREV_SER.WITCHER):
            idtocall = ID_SERIES.WITCHER;
            break;
    }

    const url = BASE_URL + `i=${idtocall}&plot=full`;

    const response = await fetch(url);
    const result = await response.json();

    let idseriesplot = "";
    switch (true) {
        case (a_series_tag.id == ID_PREV_SER.TITANS):
            idseriesplot = ID_PLOT_SERIES.TITANS;
            break;
        case (a_series_tag.id == ID_PREV_SER.BOYS):
            idseriesplot = ID_PLOT_SERIES.BOYS;
            break;
        case a_series_tag.id == (ID_PREV_SER.WITCHER):
            idseriesplot = ID_PLOT_SERIES.WITCHER;
            break;
    }

    const modalplot = document.getElementById(idseriesplot);
    modalplot.textContent = result.Plot;

    let idserieswriter = "";
    switch (true) {
        case (a_series_tag.id == ID_PREV_SER.TITANS):
            idserieswriter = ID_WRITER_SERIES.TITANS;
            break;
        case (a_series_tag.id == ID_PREV_SER.BOYS):
            idserieswriter = ID_WRITER_SERIES.BOYS;
            break;
        case (a_series_tag.id == ID_PREV_SER.WITCHER):
            idserieswriter = ID_WRITER_SERIES.WITCHER;
            break;
    }

    let modalwriter = document.getElementById(idserieswriter);
    modalwriter.textContent = "Writer:  "+result.Writer;
};
