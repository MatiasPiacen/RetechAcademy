///////////////////////////////////API Funcionando///////////////////////////////////////////////
const cargarPelis = async() => {
    try{ 
    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=93df802a9e529fe0cfd6000a6d47254c&language=es-MX&page=${pagina}`);

     console.log(respuesta);

     if(respuesta.status ===200){ 
     const datos = await respuesta.json();
     let Mispeliculas = ''
     datos.results.forEach(peliculas => {
        Mispeliculas +=  `
            <div class="pelicula">
                <img  class="img-pel" src="https://image.tmdb.org/t/p/w500/${peliculas.poster_path}" >
                <div id="info">
                    <h2 id="titulo-pel">${peliculas.title}</h2>
                    <h3 id="genero">${peliculas.genres_movies}</h3>
                    <h4 id="año">${peliculas.release_date}</h4>
                </div>
                <div id="descripcion">
                    <h1>${peliculas.title}</h1>
                    <p>${peliculas.overview}</p>
                    </div>
            </div>
        `
     });
     
     document.getElementById('main').innerHTML = Mispeliculas; 
    }
    //////////////Error por si no pongo el condicional del boton anterior////////////////////////////
    else if(respuesta.status ===401){
         console.log('Algo anda mal')
     }
     else if(respuesta.status ===404){
         console.log('La pelicula que buscas no existe')
     }
     
    }
    catch(error){
         console.log(error);
     }
    }
cargarPelis();
/////////////////////////////////Botones/////////////////////////////////////////////////////////////
let pagina = 1;
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
		cargarPelis( hub);
	}
});

