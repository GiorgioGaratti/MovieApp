import {BASE_URL,FILM} from "../config.js";

const listafilm = new Array;

export const apilistfilm = () => {
    const url_hp = BASE_URL + `t=${FILM.HP}`;
    fetch(url_hp).then((response) => response.json()).then((result) => {addtolistfilm(result);});

	const url_lor = BASE_URL + `t=${FILM.LOR}`;
    fetch(url_lor).then((response) => response.json()).then((result) => {addtolistfilm(result);});

	const url_pirates = BASE_URL + `t=${FILM.PIRATES}`;
    fetch(url_pirates).then((response) => response.json()).then((result) => {addtolistfilm(result);});

	createHTMllista(listafilm);
};

const addtolistfilm = (film) => {
	listafilm.push(film);
};

const createHTMllista = (lista) => {
	const element = document.getElementById("movie_row");
	for (let contatore = 0; contatore < lista.length; contatore++){
		if (contatore != 0){
			element = document.getElementById(`movie_row_${contatore}`);
		}
		element.innerHTML = 
		`<div class="col" id="movie_row_${contatore}">
			<div class="card h-100">
			<img src="${lista[contatore].Poster}" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">${lista[contatore].Title}</h5>
					<p class="card-text">${lista[contatore].Plot}</p>
				</div>
			</div>
		</div>`;
	};
}

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