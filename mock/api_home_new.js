import { BASE_URL,ID } from "../config.js";

//funz per ottenere un singolo film dato il suo titolo completo
export const apifilm = (titolo) => {
    const url = BASE_URL + `t=${titolo}`;

    fetch(url).then((response) => response.json()).then((result) => { viewlistfilm(result); });
};

//funz per creare la card e mostrarla
const viewlistfilm = (film) => {
    //gli metto in coda il div con la classe col
    createdivcol(film);


    //gli metto in coda l'img

    //gli metto in coda il div con la classe card-body

    //gli metto in coda l'h5 con la classe card-title

    //gli metto in coda il p con class card-text

    //gli metto in coda la a con clsse del bottone
}

const createdivcol = (film) => {
    //mi posiziono sul nodo con id=movie_row
    const element = spostasumovie_row();
    //creo un div
    const divcol = creatediv();
    //gli assegno la classe col
    divcol.classList.add("col");
    //gli metto in coda il div con la classe card h-100
    createdivcardh100(film);
    //creazione della card
    element.appendChild(divcol);
}

//func per creare un div con la classe card h-100
const createdivcardh100 = (film) => {
    //mi posiziono sul nodo con id=movie_row
    const element = spostasumovie_row();
    //mi posizione sul nodo con classe col
    const element1 = element.getElementsByClassName("col");
    //creo un div
    const divcardh100 = creatediv();
    //gli assegno la classe card h-100
    divcardh100.classList.add("card h-100");
    //gli metto in coda l'img del poster
    const element2 = element.getElementsByClassName("card h-100");
    element2.appendChild(createimgsource(film));
    //mi posiziono su img
    const element3 = element.getElementsByTagName("img");
    //gli metto in coda il div con clas card body
    element3.appendChild(createdivcardbody(film));
}
//funz per creare img con source
const createimgsource = (film) => {
    const element = createimg();
    
    element.classList.add("card-img-top");
    //aggiugno l'url dell'immagine a src
    element.src(film.Poster);
    //aggiungo l'alt
    element.alt("harry potter");
}

//funz per creare div con classe card-body
const createdivcardbody = (film) => {
    const element = spostasumovie_row();
    const element1 = element.getElementsByTagName("card-img-top");
    const divcardbody = creatediv();
    divcardbody.classList.add("card-body");
    const tagh5 = document.createElement("h5");
    tagh5.classList.add("card-title");
    
    //aggiungere testo

}

//funz per posizionarmi si id=movie_row
const spostasumovie_row = () => {
    return document.getElementById(ID.MOVIE);
}

//funz per creare un div
const creatediv = () => {
    return document.createElement("div");
}

//funz per creare un tag img
const createimg = () => {
    return document.createElement("img");
}








/* 

    <div class="col">
        <div class="card h-100">
            <img src="" class="card-img-top" alt="harry potter">
            <div class="card-body">
                <h5 class="card-title">Harry Potter</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
     </div>

             */
/* 
const viewItem = (item) => {
    const element = document.getElementById("movie_row");
    element.innerHTML = createHTMLMovie(item);
};

const createHTMLMovie = (movie) => {
    const html_text = 
            `<div class='col'>
              <div class='card h-100'>
                <img src=${movie.Poster} class='card-img-top' alt='...'>
                <div class='card-body'>
                    <h5 class='card-title'>${movie.Title}</h5>
                    <p class='card-text'>${movie.Plot}</p>
                </div>
              </div>
            </div>`;
    return html_text;
};
 */
/* const createHTMLMovie = (movie) => {
    const div = document.createElement("div");
    div.innerHTML
    const node = document.createTextNode(movie.Title);

    para.appendChild(node);

    return para;
}; */

/*
            <div class="col">
              <div class="card h-100">
                <img src="/MovieApp/images/placeholder.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Harry Potter</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                       do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="/MovieApp/images/placeholder.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">The Lord of the Rings</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="/MovieApp/images/placeholder.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Pirates of the Carribean</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
*/