
// MI CUENTA

// ENLACE DEL ICONO DE PERFIL


// Buscamos el enlace del perfil
const enlacePerfil = document.getElementById("enlacePerfil");

// Solo si existe en esta página
if (enlacePerfil) {

    // Revisamos si hay alguien con sesión iniciada
    const usuarioActivo = JSON.parse(
        localStorage.getItem("usuarioActivo")
    );

    if (usuarioActivo) {

        // Si es administrador
        if (usuarioActivo.rol === "admin") {

            enlacePerfil.href = "admin/index.html";

        } else {

            // Si es cliente
            enlacePerfil.href = "mi_cuenta.html";

        }

    } else {

        // Si nadie ha iniciado sesión
        enlacePerfil.href = "login.html";

    }

}



const btnMisDatos = document.getElementById("btnMisDatos");
const btnDirecciones = document.getElementById("btnDirecciones");
const btnPedidos = document.getElementById("btnPedidos");
const btnCerrarSesion = document.getElementById("btnCerrarSesion");

const contenidoCuenta = document.getElementById("contenidoCuenta");


// Solo se ejecuta dentro de Mi Cuenta
if (
    btnMisDatos &&
    btnDirecciones &&
    btnPedidos &&
    btnCerrarSesion &&
    contenidoCuenta
) {

    // Buscamos quién inició sesión
    const usuarioActivo = JSON.parse(
        localStorage.getItem("usuarioActivo")
    );


    // Si alguien entra directamente sin iniciar sesión
    if (!usuarioActivo) {

        window.location.href = "login.html";

    }

    // MIS DATOS


    btnMisDatos.addEventListener("click", function () {

        quitarActivo();

        btnMisDatos.classList.add("activo");

        contenidoCuenta.innerHTML = `
            <div class="cuenta-tarjeta">

                <h2 class="letra-Titulos">
                    Mis datos
                </h2>

                <p>
                    <strong>Nombre:</strong>
                    ${usuarioActivo.nombre}
                </p>

                <p>
                    <strong>Email:</strong>
                    ${usuarioActivo.email}
                </p>

                <p>
                    <strong>Tipo de usuario:</strong>
                    Cliente
                </p>

            </div>
        `;

    });



    // MIS DIRECCIONES


    btnDirecciones.addEventListener("click", function () {

        quitarActivo();

        btnDirecciones.classList.add("activo");

        contenidoCuenta.innerHTML = `
            <div class="cuenta-tarjeta">

                <h2 class="letra-Titulos">
                    Mis direcciones
                </h2>

                <p>
                    Todavía no tienes direcciones registradas.
                </p>

                <button class="boton-acceso">
                    Agregar dirección
                </button>

            </div>
        `;

    });



    // MIS PEDIDOS

    btnPedidos.addEventListener("click", function () {

        quitarActivo();

        btnPedidos.classList.add("activo");

        contenidoCuenta.innerHTML = `
            <div class="cuenta-tarjeta">

                <h2 class="letra-Titulos">
                    Mis pedidos
                </h2>

                <p>
                    Aún no tienes pedidos realizados.
                </p>

            </div>
        `;

    });


    // CERRAR SESIÓN


    btnCerrarSesion.addEventListener("click", function () {

        // Eliminamos el usuario que estaba conectado
        localStorage.removeItem("usuarioActivo");

        // Lo enviamos nuevamente al login
        window.location.href = "login.html";

    });



    // QUITAR SELECCIÓN DEL MENÚ


    function quitarActivo() {

        btnMisDatos.classList.remove("activo");

        btnDirecciones.classList.remove("activo");

        btnPedidos.classList.remove("activo");

        btnCerrarSesion.classList.remove("activo");

    }

}


// PARA QUE APARESCA EL NOMBRE DEL USUARIO 

// Buscamos el título donde aparecerá el nombre
const nombreUsuarioCuenta = document.getElementById("nombreUsuarioCuenta");

// Buscamos quién tiene la sesión iniciada
const usuarioActivo = JSON.parse(
    localStorage.getItem("usuarioActivo")
);

// Si estamos en Mi Cuenta y existe un usuario
if (nombreUsuarioCuenta && usuarioActivo) {

    // Mostramos el nombre de la persona
    nombreUsuarioCuenta.textContent = usuarioActivo.nombre;

}