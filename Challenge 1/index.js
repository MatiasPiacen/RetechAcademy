const buscarPelicula = () => {
      const nombreDePelicula = document.getElementById("nombre-peliculas").value;

      fetch(
        `https://api.themoviedb.org/3/movie/movie?api_key=93df802a9e529fe0cfd6000a6d47254c&language=es-MX&page=${pagina}$query=${nombreDePelicula},`,
        {
          method: "GET",
          redirect: "follow",
        }
      )
        .then((success) => success.json())
        .then((data) => {
          console.log(data.results);
          for (const pelicula of data.results) {
            let listItem = document.createElement("li");
            listItem.appendChild(document.createElement("strong")).textContent =
              pelicula.original_title;
            document.getElementById("lista").appendChild(listItem);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };