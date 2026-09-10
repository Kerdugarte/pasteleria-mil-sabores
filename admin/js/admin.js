// VALIDAR NUEVO PRODUCTO
const formNuevoProducto = document.getElementById("formNuevoProducto");

if (formNuevoProducto) {
    formNuevoProducto.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombreProducto").value.trim();
        const categoria = document.getElementById("categoriaProducto").value;
        const precio = document.getElementById("precioProducto").value;
        const stock = document.getElementById("stockProducto").value;
        const descripcion = document.getElementById("descripcionProducto").value.trim();

        if (nombre === "") {
            alert("Ingresa el nombre del producto.");
            return;
        }

        if (categoria === "") {
            alert("Selecciona una categoría.");
            return;
        }

        if (precio === "" || precio <= 0) {
            alert("Ingresa un precio válido.");
            return;
        }

        if (stock === "" || stock < 0) {
            alert("Ingresa un stock válido.");
            return;
        }

        if (descripcion === "") {
            alert("Ingresa una descripción.");
            return;
        }

        alert("Producto guardado correctamente.");
    });
}


// VALIDAR NUEVO USUARIO

const formNuevoUsuario = document.getElementById("formNuevoUsuario");

if (formNuevoUsuario) {
    formNuevoUsuario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombreUsuario").value.trim();
        const email = document.getElementById("emailUsuario").value.trim();
        const password = document.getElementById("passwordUsuario").value.trim();
        const rol = document.getElementById("rolUsuario").value;

        if (nombre === "") {
            alert("Ingresa el nombre del usuario.");
            return;
        }

        if (email === "") {
            alert("Ingresa el correo electrónico.");
            return;
        }

        if (!email.includes("@")) {
            alert("Ingresa un correo válido.");
            return;
        }

        if (password === "") {
            alert("Ingresa una contraseña.");
            return;
        }

        if (password.length < 4) {
            alert("La contraseña debe tener al menos 4 caracteres.");
            return;
        }

        if (rol === "") {
            alert("Selecciona un rol.");
            return;
        }

        alert("Usuario guardado correctamente.");
    });
}




// Cerrar sesión

const cerrarSesion = document.getElementById("cerrarSesion");

if (cerrarSesion) {
    cerrarSesion.addEventListener("click", function () {

        localStorage.removeItem("usuarioActivo");

        window.location.href = "../login.html";

    });
}