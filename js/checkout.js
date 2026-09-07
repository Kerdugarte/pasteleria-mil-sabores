function irAlCheckout() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. Agrega productos antes de proceder al pago.");
        return;
    }
    // Redirige a la página de checkout
    window.location.href = 'checkout.html';
}