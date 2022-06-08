import {BASE_URL, TAG} from "./config.js";

// chiama, usando la libreria fetch, le api passando il parametro ricerca e il tipo. Le API restituiscono oggetti json
export const apilist = (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    fetch(url)
    .then((response) => response.json())
    .then((results) => {
        const items = results.Search;
        // qui chiamo viewItems
        viewItems(items);
    });
}

const viewItems = (items) => {
    const element = document.getElementById("div1");
    // 1.ciclare l'array
    items.map((item) => {
        element.appendChild(createHTMLMovie(item));
        // qui ci sarà il createelement e il createnode
    });
};

const createHTMLMovie = (movie) => {
    const para = document.createElement(TAG.P);

    const node = document.createTextNode(movie.Title);

    para.appendChild(node);

    return para;
};