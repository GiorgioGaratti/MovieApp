import {BASE_URL} from "./config.js";

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
    
    // 1.ciclare l'array
    items.map((item) => {
        // 2.estrapolare un item
        // console.log(item);
        // 3.estrapolare solo le proprietà che ci servono
        //   le prop sono Title, Year, Poster e Type

        // qui ci sarà il createelement e il createnode
       
    });
}