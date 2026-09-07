let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const cuerpoCarrito = document.getElementById("carrito-body");
const subtotalElemento = document.getElementById("subtotal-carrito");
const totalElemento = document.getElementById("total-carrito");

function mostrarCarrito() {

    cuerpoCarrito.innerHTML = "";

    let subtotal = 0;

    carrito.forEach((producto, index) => {

        const subtotalProducto = producto.precio * producto.cantidad;

        subtotal += subtotalProducto;

        cuerpoCarrito.innerHTML += `
            <tr>
                <td class="d-flex align-items-center gap-3">
                    <img
                        src="${producto.imagen}"
                        alt="${producto.nombre}"
                        style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">

                    <span>${producto.nombre}</span>
                </td>

                <td>
                    $${producto.precio.toLocaleString("es-CL")}
                </td>

                <td>
                    ${producto.cantidad}
                </td>

                <td>
                    $${subtotalProducto.toLocaleString("es-CL")}
                </td>

                <td>
                    <button
                        class="btn btn-sm btn-outline-danger"
                        onclick="eliminarProducto(${index})">
                        ✕
                    </button>
                </td>
            </tr>
        `;
    });

    const envio = carrito.length > 0 ? 2990 : 0;

    subtotalElemento.textContent =
        "$" + subtotal.toLocaleString("es-CL");

    totalElemento.textContent =
        "$" + (subtotal + envio).toLocaleString("es-CL");
}


function eliminarProducto(index) {

    carrito.splice(index, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();
}


mostrarCarrito();