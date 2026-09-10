const botonesCarrito = document.querySelectorAll(".agregar-carrito");

botonesCarrito.forEach(boton => {

    boton.addEventListener("click", function () {

        const producto = {
            nombre: boton.dataset.nombre,
            precio: Number(boton.dataset.precio),
            imagen: boton.dataset.imagen,
            cantidad: 1
        };

        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        const productoExistente = carrito.find(
            item => item.nombre === producto.nombre
        );

        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            carrito.push(producto);
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));

        const mensaje = document.getElementById("mensajeCarrito");

        mensaje.style.display = "block";

        setTimeout(function () {
            mensaje.style.display = "none";
        }, 2000);

    });

});

document.addEventListener("DOMContentLoaded", function () {

    // Buscamos todas las tarjetas de productos
    const productos = document.querySelectorAll(".tarjetas-contenedor .card");

    // Buscamos los botones de la paginación
    const pagina1 = document.getElementById("pagina1");
    const pagina2 = document.getElementById("pagina2");
    const anterior = document.getElementById("anterior");
    const siguiente = document.getElementById("siguiente");

    // Buscamos el botón que aplica los filtros
    const botonFiltro = document.getElementById("aplicarFiltro");

    // Queremos mostrar máximo 8 productos por página
    const productosPorPagina = 8;

    // Al comenzar estamos en la página 1
    let paginaActual = 1;

    // Al principio todos los productos están disponibles
    let productosFiltrados = Array.from(productos);


    // Esta función se encarga de mostrar los productos de cada página
    function mostrarPagina(pagina) {

        paginaActual = pagina;

        // Calculamos desde qué producto hasta cuál debemos mostrar
        const inicio = (pagina - 1) * productosPorPagina;
        const fin = inicio + productosPorPagina;

        // Primero ocultamos todas las tarjetas
        productos.forEach(function (producto) {
            producto.style.display = "none";
        });

        // Después mostramos solamente los 8 productos
        // que corresponden a la página seleccionada
        productosFiltrados.forEach(function (producto, index) {

            if (index >= inicio && index < fin) {
                producto.style.display = "block";
            }

        });
    }


    // Cuando hacemos clic en "Aplicar filtro"
    botonFiltro.addEventListener("click", function () {

        // Buscamos todas las categorías que están marcadas
        const seleccionados = document.querySelectorAll(
            ".form-check-input:checked"
        );

        // Guardamos el valor de cada categoría seleccionada
        const categorias = Array.from(seleccionados).map(function (checkbox) {
            return checkbox.value;
        });


        // Si el usuario no marcó ninguna categoría,
        // volvemos a mostrar todos los productos
        if (categorias.length === 0) {

            productosFiltrados = Array.from(productos);

        } else {

            // Si hay categorías marcadas,
            // dejamos solamente los productos que pertenecen a ellas
            productosFiltrados = Array.from(productos).filter(function (producto) {

                return categorias.includes(
                    producto.dataset.categoria
                );

            });

        }

        // Cada vez que aplicamos un filtro volvemos a la página 1
        mostrarPagina(1);

    });


    // Si hacemos clic en el número 1 mostramos la página 1
    pagina1.addEventListener("click", function (e) {

        // Evita que el enlace recargue o mueva la página
        e.preventDefault();

        mostrarPagina(1);
    });


    // Si hacemos clic en el número 2 mostramos la página 2
    pagina2.addEventListener("click", function (e) {

        e.preventDefault();

        // Solo vamos a la página 2 si existen más de 8 productos
        productosFiltrados.length > productosPorPagina &&
            mostrarPagina(2);
    });


    // Botón para volver a la página anterior
    anterior.addEventListener("click", function (e) {

        e.preventDefault();

        // Solo retrocedemos si no estamos en la primera página
        if (paginaActual > 1) {
            mostrarPagina(paginaActual - 1);
        }

    });


    // Botón para avanzar a la siguiente página
    siguiente.addEventListener("click", function (e) {

        e.preventDefault();

        // Calculamos cuántas páginas necesitamos según
        // la cantidad de productos que quedaron después del filtro
        const totalPaginas = Math.ceil(
            productosFiltrados.length / productosPorPagina
        );

        // Solo avanzamos si existe otra página
        if (paginaActual < totalPaginas) {
            mostrarPagina(paginaActual + 1);
        }

    });


    // Cuando entramos a Productos mostramos primero la página 1
    mostrarPagina(1);

});
