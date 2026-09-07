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

        alert("Producto agregado al carrito");
    });

});


document.addEventListener("DOMContentLoaded", function () {

    const productos = document.querySelectorAll(".tarjetas-contenedor .card");

    const pagina1 = document.getElementById("pagina1");
    const pagina2 = document.getElementById("pagina2");
    const anterior = document.getElementById("anterior");
    const siguiente = document.getElementById("siguiente");

    const productosPorPagina = 8;
    let paginaActual = 1;

    function mostrarPagina(pagina) {

        paginaActual = pagina;

        const inicio = (pagina - 1) * productosPorPagina;
        const fin = inicio + productosPorPagina;

        productos.forEach(function (producto, index) {

            if (index >= inicio && index < fin) {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }

        });
    }

    pagina1.addEventListener("click", function (e) {
        e.preventDefault();
        mostrarPagina(1);
    });

    pagina2.addEventListener("click", function (e) {
        e.preventDefault();
        mostrarPagina(2);
    });

    anterior.addEventListener("click", function (e) {
        e.preventDefault();

        if (paginaActual > 1) {
            mostrarPagina(paginaActual - 1);
        }
    });

    siguiente.addEventListener("click", function (e) {
        e.preventDefault();

        if (paginaActual < 2) {
            mostrarPagina(paginaActual + 1);
        }
    });

    mostrarPagina(1);

});