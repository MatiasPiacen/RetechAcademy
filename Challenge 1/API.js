let pagina = 1;
function dibujarTarjetasDePeliculas(peliculas) {
 let misPeliculas = "";
 peliculas.forEach((pelicula) => {
    misPeliculas += `
              <div class="pelicula">
                  <img  class="img-pel" src="https://image.tmdb.org/t/p/w500/${peliculas.poster_path}" >
                  <div id="info">
                      <h2 id="titulo-pel">${pelicula.title}</h2>
                      <h3 id="genero">${pelicula.genres_movies}</h3>
                      <h4 id="año">${pelicula.release_date}</h4>
                  </div>
                  <div id="descripcion">
                      <h1>${pelicula.title}</h1>
                      <p>${pelicula.overview}</p>
                      </div>
              </div>
          `;
});

document.getElementById("main").innerHTML = misPeliculas;
}

const cargarPelis = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=93df802a9e529fe0cfd6000a6d47254c&language=es-MX&page=${pagina}`
    );

    console.log(respuesta);

    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      dibujarTarjetasDePeliculas(datos.result)
    }
    //////////////Error por si no pongo el condicional del boton anterior////////////////////////////
    else if (respuesta.status === 401) {
      console.log("Algo anda mal");
    } else if (respuesta.status === 404) {
      console.log("La pelicula que buscas no existe");
    }
  } catch (error) {
    console.log(error);
  }
};
/////////////////////////////////Botones/////////////////////////////////////////////////////////////
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
	if(pagina < 1000){
		pagina += 1;
		cargarPelis();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		cargarPelis();
	}
});
///////////////////////////////////////BUSCADOR////////////////////////////////////////////////////
function buscarPeliculas() {
  const nombreDePelicula = document.getElementById("nombre-peliculas").value;
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=af0e0a76ec3a39a7dc32e7f88e6e6968&language=es-MX&query=${nombreDePelicula}&page=1&,`,
    {
      method: "GET",
      redirect: "follow",
    }
  )
    .then((success) => success.json())
    .then((datos) => {
       dibujarTarjetasDePeliculas(datos.result)
    })
    .catch((error) => {
      console.log(error);
    });
} 
 let BotonSearch = document.querySelector("#boton");
 let Botonclear = document.querySelector("#clear")
 let inputPeliculas = document.querySelector("#nombre-peliculas");
 let url;

 BotonSearch.addEventListener("click",() =>{
   defaultAll(main)
   var nombre_pelicula = inputPeliculas.value;
   url = `https://api.themoviedb.org/3/search/movie?api_key=af0e0a76ec3a39a7dc32e7f88e6e6968&language=en-US&query=${nombre_pelicula}&page=1&`;
   buscarPeliculas(url, main)
 })
 Botonclear.addEventListener("click", () => { 
    defaultAll(main) 
    inputPeliculas.value = ""; 
    popular() 
})
 function defaultAll(main) {
    main.innerHTML = ""; }
 
