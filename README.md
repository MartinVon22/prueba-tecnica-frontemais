Para este proyecto se han utilizado dependencias necesarias para su correcto funcionamiento y para tener una funcionalidad dinámica y prolija.

Las dependencias utilizadas son:

- React Cookies // Para almacenar información en Cookies
- React Router // Para navegar entre rutas y renderizar componentes en las mismas
- MUI // Librería de Componentes para diseño
- Moment // Para formatear las fechas en un formato correcto.

En la página de inicio encontraremos texto, un campo para ingresar texto y un botón para ir a favoritos, el campo de texto solo servirá para buscar películas con palabras claves..
..y el botón para ir a las películas que agregamos como favoritas.

Para agregar una película como favorita tenemos un ícono de una estrella sin relleno la cual indica que esa película no está en favoritos, presionando el ícono aparecerá..
..una estrella con relleno para indicar que ya se agregó como favorita y aparecerá en el listado de favoritos /favs.

Se utilizó Cookies porque la información almacenada en las mismas tienen duración a diferencia del local storage que volviendo hacia atrás en el navegador esta información..
..se resetea.

Con respecto a la página de detalle la cual era opcional, explico un poco como lo habría hecho: simplemente es un link hacia una nueva ruta la cual enviaría dentro del estado de la ruta..
..de React un objeto que contenga toda la información de la película seleccionada y luego en la página de detalle capturaría la misma usando el hook useLocation.
