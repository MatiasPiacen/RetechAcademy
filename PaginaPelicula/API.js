const API_KEY = 'api_key=93df802a9e529fe0cfd6000a6d47254c';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

getMovies(API_URL);

function getMovies(url) {
    const main = document.getElementById("main");
    fetch(url).then(res => res.json()).then(data => {
        data.results.forEach(showMovies, main);
    })
}
function showMovies(item){
    const{title,overview,release_date,poster_path} = item;
    const divPadre = document.createElement("div");
    divPadre.classList.add("pelicula");
    main.appendChild(divPadre);
    const replaceHtml  = '<img src="' + IMG_URL+poster_path + '" alt="' + title + '"> <div id="info"> <h2 id="titulo-pel">' + title + '</h2> <h3 id="genero">Genero</h3> <h4 id="año">'+ release_date +'</h4> </div> <div id="descripcion"> <h1>'+ title + '</h1> ' + overview + '</div>';
    divPadre.innerHTML = replaceHtml;
}