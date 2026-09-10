// Recuperamos el carrito
const carritoCheckout =
    JSON.parse(localStorage.getItem("carrito")) || [];


// Buscamos los elementos del resumen
const resumenPedido =
    document.getElementById("resumenPedido");

const subtotalCheckout =
    document.getElementById("subtotalCheckout");

const envioCheckout =
    document.getElementById("envioCheckout");

const totalCheckout =
    document.getElementById("totalCheckout");


let subtotalCompra = 0;


// Si el carrito está vacío
if (carritoCheckout.length === 0) {

    resumenPedido.innerHTML =
        "<p>Tu carrito está vacío.</p>";

    subtotalCheckout.textContent = "$0";
    envioCheckout.textContent = "$0";
    totalCheckout.textContent = "$0";

}


// Si existen productos
carritoCheckout.forEach(function (producto) {

    const precioProducto =
        Number(producto.precio);

    const cantidadProducto =
        Number(producto.cantidad);

    const subtotalProducto =
        precioProducto * cantidadProducto;


    // Sumamos al subtotal
    subtotalCompra += subtotalProducto;


    // Mostramos el producto
    resumenPedido.innerHTML += `
        <div class="d-flex justify-content-between mb-2">

            <span>
                ${producto.nombre} (x${cantidadProducto})
            </span>

            <strong>
                $${subtotalProducto.toLocaleString("es-CL")}
            </strong>

        </div>
    `;

});


// Calculamos envío
const costoEnvio =
    carritoCheckout.length > 0 ? 2990 : 0;


// Calculamos total
const totalCompra =
    subtotalCompra + costoEnvio;


// Mostramos los resultados
subtotalCheckout.textContent =
    "$" + subtotalCompra.toLocaleString("es-CL");

envioCheckout.textContent =
    "$" + costoEnvio.toLocaleString("es-CL");

totalCheckout.textContent =
    "$" + totalCompra.toLocaleString("es-CL");


// Confirmar compra
function realizarPedido(event) {

    event.preventDefault();


    if (carritoCheckout.length === 0) {

        alert("Tu carrito está vacío.");

        return;
    }


    alert(
        "¡Gracias por tu compra! Tu pedido ha sido procesado correctamente."
    );


    // Vaciamos el carrito
    localStorage.removeItem("carrito");


    // Volvemos al inicio
    window.location.href = "index.html";

}